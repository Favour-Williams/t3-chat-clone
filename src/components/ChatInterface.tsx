"use client";

import { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import { api } from "~/trpc/react";
import ChatSidebar from "./ChatSidebar";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { type RouterOutputs } from "~/trpc/shared";

type Chat = RouterOutputs["chat"]["getAll"][0];
type Message = NonNullable<RouterOutputs["chat"]["getById"]>["messages"][0];

export default function ChatInterface() {
  const { data: session, status } = useSession();
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [guestMessages, setGuestMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [retryPayload, setRetryPayload] = useState<{
    content: string;
    provider: string;
    model: string;
  } | null>(null);

  const [isGuest, setIsGuest] = useState(false);
  const [guestMessageCount, setGuestMessageCount] = useState(10);
  const [showGuestLimitModal, setShowGuestLimitModal] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Determine authentication status first
  const isAuthenticated = status === "authenticated" && !!session?.user;
  const isLoadingAuth = status === "loading";

  // Set guest status based on authentication
  useEffect(() => {
    if (status === "loading") return; // Don't set guest status while loading
    
    if (!isAuthenticated) {
      setIsGuest(true);
      const savedCount = sessionStorage.getItem('guestMessageCount');
      if (savedCount) {
        setGuestMessageCount(parseInt(savedCount));
      }
    } else {
      setIsGuest(false);
    }
  }, [isAuthenticated, status]);

  // tRPC queries - only run when authenticated and not loading
  const {
    data: chats,
    refetch: refetchChats,
    error: chatsError
  } = api.chat.getAll.useQuery(undefined, {
    enabled: isAuthenticated && !isLoadingAuth,
    retry: false, // Don't retry unauthorized requests
  });

  const {
    data: selectedChat,
    error: selectedChatError
  } = api.chat.getById.useQuery(
    { id: selectedChatId! },
    {
      enabled: !!selectedChatId && isAuthenticated && !isLoadingAuth,
      retry: false,
    }
  );

  // Log tRPC errors for debugging
  useEffect(() => {
    if (chatsError) {
      console.error("tRPC chats error:", chatsError);
    }
    if (selectedChatError) {
      console.error("tRPC selected chat error:", selectedChatError);
    }
  }, [chatsError, selectedChatError]);

  const createChatMutation = api.chat.create.useMutation({
    onSuccess: (newChat) => {
      setSelectedChatId(newChat.id);
      refetchChats();
    },
  });

  const addMessageMutation = api.chat.addMessage.useMutation();
  
  const deleteChatMutation = api.chat.delete.useMutation({
    onSuccess: (deletedChat) => {
      if (selectedChatId === deletedChat.id) {
        setSelectedChatId(null);
        setMessages([]);
      }
      refetchChats();
    },
  });

  // Auto-scroll to bottom when messages change or streaming updates
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingMessage]);

  const handleDeleteChat = async (chatId: string) => {
    if (isGuest) {
      if (selectedChatId === chatId) {
        setSelectedChatId(null);
        setMessages([]);
      }
      return;
    }

    try {
      await deleteChatMutation.mutateAsync({ id: chatId });
    } catch (error) {
      console.error("Failed to delete chat:", error);
      setError("Failed to delete chat. Please try again.");
    }
  };

  // Update messages when selected chat changes
  useEffect(() => {
    if (isGuest) {
      // For guests, messages are managed locally
      return;
    } else if (selectedChat?.messages && isAuthenticated) {
      setMessages(selectedChat.messages);
    }
  }, [selectedChat, isGuest, isAuthenticated]);

  // Auto-select a chat for guests
  useEffect(() => {
    if (isGuest && !selectedChatId && status !== "loading") {
      setSelectedChatId('guest-chat');
      setMessages(guestMessages);
    }
  }, [isGuest, selectedChatId, guestMessages, status]);

  // Handle URL guest parameter
  useEffect(() => {
    if (status === "loading") return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const isGuestFromSignIn = urlParams.get('guest') === 'true';
    
    if (isGuestFromSignIn) {
      setIsGuest(true);
      sessionStorage.setItem('guestMessageCount', '10');
      setGuestMessageCount(10);
      
      // Clear the query parameter
      const newUrl = window.location.pathname;
      window.history.replaceState(null, '', newUrl);
    }
  }, [status]);

  // Save guest message count
  useEffect(() => {
    if (isGuest) {
      sessionStorage.setItem('guestMessageCount', guestMessageCount.toString());
    }
  }, [guestMessageCount, isGuest]);

  const handleGuestSignOut = () => {
    sessionStorage.removeItem('guestMessageCount');
    window.location.href = '/auth/signin';
  };

  const handleGuestNewChat = () => {
    setSelectedChatId('guest-chat');
    setMessages([]);
    setGuestMessages([]);
    setError(null);
    setStreamingMessage('');
  };

  const handleNewChat = () => {
    if (isGuest) {
      handleGuestNewChat();
      return;
    }
    
    if (!isAuthenticated) {
      console.error("Cannot create chat: user not authenticated");
      return;
    }
    
    const title = `Chat ${new Date().toLocaleString()}`;
    createChatMutation.mutate({ title });
  };

  const handleSendMessage = async (
    content: string,
    provider: string,
    model: string
  ) => {
    if (!selectedChatId || !content.trim()) return;

    if (isGuest && guestMessageCount <= 0) {
      setShowGuestLimitModal(true);
      return;
    }

    // Decrease guest message count
    if (isGuest) {
      setGuestMessageCount(prev => prev - 1);
    }

    // Clear previous errors
    setError(null);
    setRetryPayload({ content, provider, model });

    // Add user message
    const userMessage: Message = {
      id: `temp-${Date.now()}`,
      content,
      role: "USER",
      chatId: selectedChatId,
      userId: session?.user?.id || "guest",
      attachments: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Save user message to database (only for authenticated users)
    if (!isGuest && isAuthenticated) {
      try {
        await addMessageMutation.mutateAsync({
          chatId: selectedChatId,
          content,
          role: "USER",
        });
      } catch (error) {
        console.error("Failed to save user message:", error);
      }
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
        } finally {
          reader.releaseLock();
        }

        // Save assistant message to database
        if (accumulatedContent) {
          if (isGuest) {
            const assistantMessage: Message = {
              id: `temp-assistant-${Date.now()}`,
              content: accumulatedContent,
              role: "ASSISTANT",
              chatId: selectedChatId,
              userId: "guest",
              attachments: [],
              createdAt: new Date(),
              updatedAt: new Date(),
            };
            
            setMessages((prev) => [...prev, assistantMessage]);
            setGuestMessages((prev) => [...prev, userMessage, assistantMessage]);
          } else if (isAuthenticated) {
            try {
              const assistantMessage = await addMessageMutation.mutateAsync({
                chatId: selectedChatId,
                content: accumulatedContent,
                role: "ASSISTANT",
              });

              setMessages((prev) => [...prev, assistantMessage]);
            } catch (error) {
              console.error("Failed to save assistant message:", error);
              // Still add the message locally even if save fails
              const assistantMessage: Message = {
                id: `temp-assistant-${Date.now()}`,
                content: accumulatedContent,
                role: "ASSISTANT",
                chatId: selectedChatId,
                userId: session?.user?.id || "guest",
                attachments: [],
                createdAt: new Date(),
                updatedAt: new Date(),
              };
              setMessages((prev) => [...prev, assistantMessage]);
            }
          }
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

  const GuestLimitModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="card-pink max-w-md mx-4 animate-in fade-in duration-300">
          <div className="text-center">
            <div className="w-16 h-16 pink-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Guest Message Limit Reached
            </h3>
            <p className="text-gray-600 mb-6">
              You've used all 10 guest messages. Sign in to continue chatting with unlimited access!
            </p>
            
            <div className="flex gap-3 justify-center">
              <button
                onClick={onClose}
                className="btn-pink-secondary"
              >
                Cancel
              </button>
              <a
                href="/auth/signin"
                className="btn-pink-primary"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const GuestMessageCounter = ({ count }: { count: number }) => {
    return (
      <div className="glass-pink mx-4 mb-4 rounded-xl p-4 border">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 pink-gradient-primary rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-pink-800">
              Guest Mode
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-pink-700">
              Messages remaining:
            </span>
            <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              {count}
            </span>
          </div>
        </div>
        <p className="text-xs text-pink-600/80 mt-2 ml-11">
          Sign in to get unlimited messages and save your chat history
        </p>
      </div>
    );
  };

  // Show loading state while authentication is being determined
  if (isLoadingAuth) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 pink-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <svg className="w-8 h-8 text-white animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <p className="text-pink-700 font-medium">Loading chat session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <ChatSidebar
        chats={isGuest ? [] : (chats || [])}
        selectedChatId={selectedChatId}
        onSelectChat={setSelectedChatId}
        onNewChat={handleNewChat}
        onDeleteChat={handleDeleteChat}
        onSignOut={isGuest ? handleGuestSignOut : undefined}
        user={session?.user || { id: 'guest', name: 'Guest', email: 'guest@example.com' }}
        isGuest={isGuest}
      />

      <div className="flex-1 flex flex-col min-h-0">
        {isGuest && <GuestMessageCounter count={guestMessageCount} />}

        <GuestLimitModal 
          isOpen={showGuestLimitModal} 
          onClose={() => setShowGuestLimitModal(false)} 
        />

        {error && (
          <div className="bg-red-50/80 backdrop-blur-sm border border-red-200 p-4 mx-4 mb-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-red-700 font-medium">{error}</span>
            </div>
            <button
              onClick={handleRetry}
              className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 text-sm font-medium"
            >
              Retry
            </button>
          </div>
        )}

        {selectedChatId ? (
          <>
            {/* Header with glass effect */}
            <div className="header-pink p-4 flex items-center shrink-0 border-b border-pink-200/30">
              <div className="flex items-center text-sm text-pink-700">
                <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-500 mr-3 animate-pulse shadow-sm"></span>
                <span className="font-medium">Connected to LLM service</span>
              </div>
            </div>
            
            {/* Messages Container with custom scrollbar */}
            <div className="flex-1 overflow-hidden flex flex-col min-h-0">
              <div className="flex-1 overflow-y-auto scrollbar-pink p-6">
                <MessageList
                  messages={messages}
                  isStreaming={isStreaming}
                  streamingMessage={streamingMessage}
                />
                <div ref={messagesEndRef} />
              </div>
              
              {/* Fixed Input at Bottom with glass effect */}
              <div className="shrink-0 border-t border-pink-200/30 glass-pink">
                <MessageInput
                  onSendMessage={handleSendMessage}
                  isStreaming={isStreaming}
                  onStopGeneration={handleStopGeneration}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center max-w-2xl">
              <div className="floating-element mb-8">
                <div className="w-24 h-24 pink-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent mb-4">
                Welcome to T3 Chat
              </h2>
              <p className="text-pink-700/80 text-lg mb-8 leading-relaxed">
                Start a conversation with our AI assistant. Experience the power of modern AI 
                with our beautiful, responsive interface designed for seamless interactions.
              </p>
              
              <button
                onClick={handleNewChat}
                className="btn-pink-primary text-lg px-8 py-4 rounded-2xl mb-12 shadow-2xl"
              >
                <svg
                  className="w-6 h-6 mr-3 inline"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Start New Chat
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="card-pink text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 pink-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-pink-800 mb-2 text-lg">
                    Smart AI
                  </h3>
                  <p className="text-pink-600/80 text-sm leading-relaxed">
                    Powered by cutting-edge language models for intelligent conversations
                  </p>
                </div>

                <div className="card-pink text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 pink-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-pink-800 mb-2 text-lg">
                    Real-time
                  </h3>
                  <p className="text-pink-600/80 text-sm leading-relaxed">
                    Stream responses instantly with smooth, responsive interactions
                  </p>
                </div>

                <div className="card-pink text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 pink-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-pink-800 mb-2 text-lg">
                    Lightning Fast
                  </h3>
                  <p className="text-pink-600/80 text-sm leading-relaxed">
                    Optimized for speed with modern architecture and caching
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}