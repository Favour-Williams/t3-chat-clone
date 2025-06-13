"use client";

import { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import { api } from "~/trpc/react";
import ChatSidebar from "./ChatSidebar";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { type RouterOutputs } from "~/trpc/shared";

type Chat = RouterOutputs["chat"]["getAll"][0];
type Message = RouterOutputs["chat"]["getById"]["messages"][0];

export default function ChatInterface() {
  const { data: session } = useSession();
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [retryPayload, setRetryPayload] = useState<{
    content: string;
    provider: string;
    model: string;
  } | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const { data: chats, refetch: refetchChats } = api.chat.getAll.useQuery();
  const { data: selectedChat } = api.chat.getById.useQuery(
    { id: selectedChatId! },
    { enabled: !!selectedChatId }
  );

  const createChatMutation = api.chat.create.useMutation({
    onSuccess: (newChat) => {
      setSelectedChatId(newChat.id);
      refetchChats();
    },
  });

  const addMessageMutation = api.chat.addMessage.useMutation();

  useEffect(() => {
    if (selectedChat?.messages) {
      setMessages(selectedChat.messages);
    }
  }, [selectedChat]);

  const handleNewChat = () => {
    const title = `Chat ${new Date().toLocaleString()}`;
    createChatMutation.mutate({ title });
  };

  const handleSendMessage = async (
    content: string,
    provider: string,
    model: string
  ) => {
    if (!selectedChatId || !content.trim()) return;

    // Clear previous errors
    setError(null);
    setRetryPayload({ content, provider, model });

    // Add user message
    const userMessage: Message = {
      id: `temp-${Date.now()}`,
      content,
      role: "USER",
      chatId: selectedChatId,
      userId: session?.user?.id || "",
      attachments: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Save user message to database
    try {
      await addMessageMutation.mutateAsync({
        chatId: selectedChatId,
        content,
        role: "USER",
      });
    } catch (error) {
      console.error("Failed to save user message:", error);
    }

    // Prepare messages for API
    const apiMessages = [...messages, userMessage].map((msg) => ({
      role: msg.role.toLowerCase(),
      content: msg.content,
    }));

    setIsStreaming(true);
    setStreamingMessage("");

    // Create abort controller for this request
    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: apiMessages,
          provider,
          model,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `API request failed with status ${response.status}`
        );
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        let accumulatedContent = "";

     try {
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value, { stream: true });
    const lines = chunk
      .split("\n")
      .filter((line) => line.trim() !== "");

    for (const line of lines) {
      // Handle SSE comments (lines starting with :)
      if (line.startsWith(":")) {
        console.log("SSE comment:", line);
        continue;
      }

      // Handle data lines
      if (line.startsWith("data: ")) {
        const dataContent = line.slice(6).trim();
        
        // Skip the [DONE] marker
        if (dataContent === "[DONE]") {
          console.log("Stream completed with [DONE]");
          break;
        }

        // Skip empty data
        if (!dataContent) {
          continue;
        }

        try {
          const data = JSON.parse(dataContent);
          
          // Handle OpenRouter/OpenAI format: data.choices[0].delta.content
          if (data.choices && data.choices[0] && data.choices[0].delta) {
            const content = data.choices[0].delta.content;
            if (content) {
              accumulatedContent += content;
              setStreamingMessage(accumulatedContent);
            }
          }
          // Handle alternative format: data.content
          else if (data.content) {
            accumulatedContent += data.content;
            setStreamingMessage(accumulatedContent);
          }
          // Handle other possible formats
          else if (typeof data === 'string') {
            accumulatedContent += data;
            setStreamingMessage(accumulatedContent);
          }
        } catch (parseError) {
          console.error("Error parsing JSON:", parseError);
          console.error("Raw data content:", dataContent);
          // Continue processing other chunks even if one fails
        }
      }
    }
  }
}finally {
          reader.releaseLock();
        }

        // Save assistant message to database
        if (accumulatedContent) {
          const assistantMessage = await addMessageMutation.mutateAsync({
            chatId: selectedChatId,
            content: accumulatedContent,
            role: "ASSISTANT",
          });

          setMessages((prev) => [...prev, assistantMessage]);
        }
      }
    } catch (error: any) {
      if (error.name === "AbortError") {
        console.log("Request was aborted");
      } else {
        console.error("Error sending message:", error);
        setError(error.message || "Failed to generate response");
      }
    } finally {
      setIsStreaming(false);
      setStreamingMessage("");
      abortControllerRef.current = null;
    }
  };

  const handleStopGeneration = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  const handleRetry = () => {
    if (retryPayload) {
      handleSendMessage(
        retryPayload.content,
        retryPayload.provider,
        retryPayload.model
      );
    }
  };

  if (!session?.user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading chat session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <ChatSidebar
        chats={chats || []}
        selectedChatId={selectedChatId}
        onSelectChat={setSelectedChatId}
        onNewChat={handleNewChat}
        user={session.user}
      />

      <div className="flex-1 flex flex-col">
        {error && (
          <div className="bg-red-50 border border-red-200 p-3 flex items-center justify-between">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-red-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-red-700">{error}</span>
            </div>
            <button
              onClick={handleRetry}
              className="ml-4 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
            >
              Retry
            </button>
          </div>
        )}

        <div className="flex-1 flex flex-col">
          {selectedChatId ? (
            <>
              <div className="p-3 bg-white border-b flex items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  <span>Connected to LLM service</span>
                </div>
              </div>
              <MessageList
                messages={messages}
                isStreaming={isStreaming}
                streamingMessage={streamingMessage}
              />
              <MessageInput
                onSendMessage={handleSendMessage}
                isStreaming={isStreaming}
                onStopGeneration={handleStopGeneration}
              />
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center max-w-lg">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Welcome to T3 Chat
                </h2>
                <p className="text-gray-600 mb-6">
                  Start a conversation with our AI assistant. Select a chat from
                  the sidebar or create a new one to begin.
                </p>
                <button
                  onClick={handleNewChat}
                  className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center mx-auto"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                  Start New Chat
                </button>
                <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-5 h-5 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      Smart AI
                    </h3>
                    <p className="text-xs text-gray-500">
                      Powered by cutting-edge language models
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-5 h-5 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      Real-time
                    </h3>
                    <p className="text-xs text-gray-500">
                      Stream responses instantly
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-5 h-5 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-800 mb-1">Fast</h3>
                    <p className="text-xs text-gray-500">
                      Lightning-fast responses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}