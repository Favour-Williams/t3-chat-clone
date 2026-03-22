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
    "meta-llama/llama-3.3-70b-instruct:free",
    "deepseek/deepseek-r1:free",
    "mistralai/mistral-small-3.1-24b-instruct:free",
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
    "llama-3.1-8b-instant",   
    "llama-3.3-70b-versatile", 
    "mixtral-8x7b-32768",
  ];

  async generate(messages: any[], model: string, maxTokens?: number) {
    const apiKey = env.GROQ_API_KEY;

    if (!apiKey) {
      throw new Error("GROQ_API_KEY is not configured");
    }

    console.log("Sending request to Groq:", { model, messageCount: messages.length });

    const formattedMessages = messages.map(msg => ({
      role: msg.role === "USER" ? "user" : msg.role === "ASSISTANT" ? "assistant" : msg.role,
      content: msg.content,
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

export const providers: Record<string, LLMProvider> = {
  // openrouter: new OpenRouterProvider(),
  groq: new GroqProvider(),
};

// llm-providers.ts — add this export at the bottom
export const LLM_PROVIDER_CONFIG = {
  
  groq: {
    name: "Groq",
    models: [
      "llama-3.1-8b-instant",
      "llama-3.3-70b-versatile",
    ],
  },
} as const;