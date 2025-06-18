// src/lib/llm-providers.ts
import { env } from "~/env";

export interface LLMProvider {
  name: string;
  models: string[];
  generate: (
    messages: { role: string; content: string }[],
    model: string,
    maxTokens?: number
  ) => Promise<ReadableStream<Uint8Array>>;
}


export class OpenRouterProvider implements LLMProvider {
  name = "OpenRouter";
  models = [
    "mistralai/mistral-7b-instruct:free",
    "deepseek/deepseek-r1-0528:free",
    "meta-llama/llama-4-scout:free",
  ];

  async generate(messages: any[], model: string) {
    const apiKey = env.OPENROUTER_API_KEY;
    
    if (!apiKey) {
      throw new Error("OPENROUTER_API_KEY is not configured");
    }

    console.log("Sending request to OpenRouter:", { model, messageCount: messages.length });

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
        "X-Title": "T3 Chat App",
      },
      body: JSON.stringify({
        model,
        messages,
        stream: true,
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter error:", response.status, errorText);
      throw new Error(`OpenRouter error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    if (!response.body) {
      throw new Error("No response body from OpenRouter");
    }

    console.log("OpenRouter response received, starting stream...");
    return response.body;
  }
}
export class GroqProvider implements LLMProvider {
  name = "Groq";
  models = [
    "llama3-8b-8192",
    "llama3-70b-8192",
    // "mixtral-8x7b-32768",
    // "gemma-7b-it",
    "gemma2-9b-it",
  ];

  async generate(messages: any[], model: string, maxTokens?: number) {
    const apiKey = env.GROQ_API_KEY;
    
    if (!apiKey) {
      throw new Error("GROQ_API_KEY is not configured");
    }

    console.log("Sending request to Groq:", { model, messageCount: messages.length });

    // Ensure messages have the correct format for Groq
    const formattedMessages = messages.map(msg => ({
      role: msg.role === "USER" ? "user" : msg.role === "ASSISTANT" ? "assistant" : msg.role,
      content: msg.content
    }));

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: formattedMessages,
        max_tokens: maxTokens || 1000,
        temperature: 0.7,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq error:", response.status, errorText);
      throw new Error(`Groq error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    if (!response.body) {
      throw new Error("No response body from Groq");
    }

    console.log("Groq response received, starting stream...");
    return response.body;
  }
}
// export class HuggingFaceProvider implements LLMProvider {
//   name = "Hugging Face";
//   models = [
//     "Qwen/Qwen3-Embedding-0.6B",  
//     "microsoft/DialoGPT-small",  
//     "facebook/blenderbot-1B-distill",
//   ];

//   async generate(messages: any[], model: string) {
//     const apiKey = env.HUGGINGFACE_API_KEY;
    
//     // Format messages for DialoGPT-style models
//     const formattedMessages = this.formatMessages(messages);
    
//     const response = await fetch(
//       `https://api-inference.huggingface.co/models/${model}`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${apiKey}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           inputs: formattedMessages,
//           parameters: {
//             max_new_tokens: 1024,
//             return_full_text: false,
//           },
//         }),
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`Hugging Face error: ${response.statusText}`);
//     }

//     return this.createStreamFromResponse(response);
//   }

//   private formatMessages(messages: any[]) {
//     // For conversation models, format as { past_user_inputs, generated_responses, text }
//     if (this.isConversationModel()) {
//       const userMessages = messages
//         .filter(m => m.role === "user")
//         .map(m => m.content);
      
//       const assistantMessages = messages
//         .filter(m => m.role === "assistant")
//         .map(m => m.content);
      
//       return {
//         past_user_inputs: userMessages.slice(0, -1),
//         generated_responses: assistantMessages,
//         text: userMessages[userMessages.length - 1] || "",
//       };
//     }
    
//     // For text generation models, use the last message
//     return messages[messages.length - 1]?.content || "";
//   }

//   private isConversationModel() {
//     return this.models.some(m => m.includes("DialoGPT") || m.includes("blenderbot"));
//   }

//   private async createStreamFromResponse(response: Response) {
//     const data = await response.json();
//     const generatedText = data.generated_text || data[0]?.generated_text || "";
    
//     return new ReadableStream({
//       start(controller) {
//         const encoder = new TextEncoder();
//         let index = 0;
        
//         function pushChunk() {
//           if (index < generatedText.length) {
//             controller.enqueue(
//               encoder.encode(`data: ${JSON.stringify({ content: generatedText.charAt(index) })}\n\n`)
//             );
//             index++;
//             setTimeout(pushChunk, 20);
//           } else {
//             controller.close();
//           }
//         }
        
//         pushChunk();
//       },
//     });
//   }
// }

export const providers: Record<string, LLMProvider> = {
  openrouter: new OpenRouterProvider(),
  groq: new GroqProvider(),
  // huggingface: new HuggingFaceProvider(),
};