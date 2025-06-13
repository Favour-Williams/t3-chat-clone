// import { NextRequest, NextResponse } from "next/server";
// import { getServerAuthSession } from "~/server/auth";
// import { env } from "~/env";
// import { createParser } from "eventsource-parser";
// import { providers } from "~/lib/llm-providers";

// export async function POST(req: NextRequest) {
//   try {
//     const session = await getServerAuthSession();
//     if (!session?.user) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     const { messages, provider = "openrouter", model } = await req.json();

//     if (!messages || !Array.isArray(messages)) {
//       return NextResponse.json({ error: "Messages are required" }, { status: 400 });
//     }

//     let apiUrl: string;
//     let headers: Record<string, string>;
//     let body: any;

//     switch (provider) {
//       case "openrouter":
//         if (!env.OPENROUTER_API_KEY) {
//           return NextResponse.json({ error: "OpenRouter API key not configured" }, { status: 500 });
//         }
//         apiUrl = "https://openrouter.ai/api/v1/chat/completions";
//         headers = {
//           "Authorization": `Bearer ${env.OPENROUTER_API_KEY}`,
//           "Content-Type": "application/json",
//           "HTTP-Referer": "http://localhost:3000",
//           "X-Title": "T3 Chat App",
//         };
//         body = {
//           model: model || "openai/gpt-3.5-turbo",
//           messages,
//           stream: true,
//         };
//         break;

//       case "groq":
//         if (!env.GROQ_API_KEY) {
//           return NextResponse.json({ error: "Groq API key not configured" }, { status: 500 });
//         }
//         apiUrl = "https://api.groq.com/openai/v1/chat/completions";
//         headers = {
//           "Authorization": `Bearer ${env.GROQ_API_KEY}`,
//           "Content-Type": "application/json",
//         };
//         body = {
//           model: model || "mixtral-8x7b-32768",
//           messages,
//           stream: true,
//         };
//         break;

//       case "huggingface":
//         if (!env.HUGGINGFACE_API_KEY) {
//           return NextResponse.json({ error: "Hugging Face API key not configured" }, { status: 500 });
//         }
//         apiUrl = `https://api-inference.huggingface.co/models/${model || "microsoft/DialoGPT-medium"}`;
//         headers = {
//           "Authorization": `Bearer ${env.HUGGINGFACE_API_KEY}`,
//           "Content-Type": "application/json",
//         };
//         body = {
//           inputs: messages[messages.length - 1]?.content || "",
//           parameters: {
//             max_length: 1000,
//             temperature: 0.7,
//           },
//         };
//         break;

//       default:
//         return NextResponse.json({ error: "Invalid provider" }, { status: 400 });
//     }

//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers,
//       body: JSON.stringify(body),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error(`API Error (${provider}):`, errorText);
//       return NextResponse.json(
//         { error: `API request failed: ${response.statusText}` },
//         { status: response.status }
//       );
//     }

//     // Handle streaming response
//     if (provider === "openrouter" || provider === "groq") {
//       const encoder = new TextEncoder();
//       const decoder = new TextDecoder();

//       const stream = new ReadableStream({
//         async start(controller) {
//           const parser = createParser((event) => {
//             if (event.type === "event") {
//               const data = event.data;
//               if (data === "[DONE]") {
//                 controller.close();
//                 return;
//               }
//               try {
//                 const parsed = JSON.parse(data);
//                 const content = parsed.choices?.[0]?.delta?.content;
//                 if (content) {
//                   controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
//                 }
//               } catch (e) {
//                 // Ignore parsing errors
//               }
//             }
//           });

//           const reader = response.body?.getReader();
//           if (!reader) {
//             controller.close();
//             return;
//           }

//           try {
//             while (true) {
//               const { done, value } = await reader.read();
//               if (done) break;
//               parser.feed(decoder.decode(value));
//             }
//           } catch (error) {
//             console.error("Stream reading error:", error);
//           } finally {
//             controller.close();
//           }
//         },
//       });

//       return new Response(stream, {
//         headers: {
//           "Content-Type": "text/event-stream",
//           "Cache-Control": "no-cache",
//           "Connection": "keep-alive",
//         },
//       });
//     } else {
//       // Handle non-streaming response (Hugging Face)
//       const data = await response.json();
//       return NextResponse.json({ content: data.generated_text || data[0]?.generated_text || "No response" });
//     }
//   } catch (error) {
//     console.error("Chat API error:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import { getServerAuthSession } from "~/server/auth";
import { providers } from "~/lib/llm-providers"; // Adjust import path as needed

// Force Node.js runtime instead of Edge Runtime
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerAuthSession();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { messages, provider = "openrouter", model } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages are required" }, 
        { status: 400 }
      );
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

    // Generate the stream using the provider
    const stream = await llmProvider.generate(messages, model);
    
    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
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