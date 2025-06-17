import { NextRequest, NextResponse } from "next/server";
import { getServerAuthSession } from "~/server/auth";
import { providers } from "~/lib/llm-providers"; // Adjust import path as needed

// Force Node.js runtime instead of Edge Runtime
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerAuthSession();
    
    // Check if user is authenticated OR if this is a guest request
    const isGuest = !session?.user;
    const isAuthenticated = !!session?.user;
    
    // Allow both authenticated users and guests
    if (!isAuthenticated && !isGuest) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { messages, provider = "openrouter", model, isGuestRequest } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages are required" }, 
        { status: 400 }
      );
    }

    // Optional: Add rate limiting for guest users
    if (isGuest) {
      // You can implement additional checks here for guest users
      // such as message count limits, rate limiting, etc.
      console.log("Processing guest request");
      
      // Optional: Limit message length for guests
      const totalMessageLength = messages.reduce((total, msg) => total + (msg.content?.length || 0), 0);
      if (totalMessageLength > 5000) { // 5KB limit for guests
        return NextResponse.json(
          { error: "Message too long for guest users" },
          { status: 400 }
        );
      }
    }

    // Get the provider implementation
    const llmProvider = providers[provider as keyof typeof providers];
    
    if (!llmProvider) {
      return NextResponse.json(
        { error: `Invalid provider: ${provider}` },
        { status: 400 }
      );
    }

    // Validate model selection
    if (!llmProvider.models.includes(model)) {
      return NextResponse.json(
        { error: `Invalid model for provider ${provider}: ${model}` },
        { status: 400 }
      );
    }

    // Optional: For guests, you might want to use a specific model or provider
    // to control costs or capabilities
    let finalModel = model;
    let finalProvider = llmProvider;
    
    if (isGuest) {
      // You could force guests to use a cheaper/faster model
      // finalModel = "gpt-3.5-turbo"; // Example
      console.log(`Guest using model: ${finalModel}`);
    }

    // Generate the stream using the provider
    const stream = await finalProvider.generate(messages, finalModel);
    
    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        // Optional: Add headers to identify guest vs authenticated requests
        "X-User-Type": isGuest ? "guest" : "authenticated",
      },
    });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}