// src/components/MessageList.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { User, Bot } from "lucide-react";
import { type RouterOutputs } from "~/trpc/shared";

type Message = RouterOutputs["chat"]["getById"]["messages"][0];

interface MessageListProps {
  messages: Message[];
  isStreaming: boolean;
  streamingMessage: string;
}

export default function MessageList({
  messages,
  isStreaming,
  streamingMessage,
}: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [displayedStreamingMessage, setDisplayedStreamingMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Scroll to bottom when messages or streaming changes
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle typewriter effect for streaming messages
  useEffect(() => {
    if (isStreaming && streamingMessage) {
      setIsTypingComplete(false);
      
      if (currentIndex < streamingMessage.length) {
        const timer = setTimeout(() => {
          setDisplayedStreamingMessage(
            (prev) => prev + streamingMessage[currentIndex]
          );
          setCurrentIndex((prev) => prev + 1);
        }, 20);
        
        return () => clearTimeout(timer);
      } else {
        setIsTypingComplete(true);
      }
    } else {
      // Reset when streaming stops
      setDisplayedStreamingMessage("");
      setCurrentIndex(0);
      setIsTypingComplete(false);
    }
  }, [isStreaming, streamingMessage, currentIndex]);

  // Scroll to bottom whenever messages change or streaming updates
  useEffect(() => {
    scrollToBottom();
  }, [messages, displayedStreamingMessage, isStreaming]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex gap-3 ${
            message.role === "USER" ? "justify-end" : "justify-start"
          }`}
        >
          {message.role === "ASSISTANT" && (
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot size={16} className="text-white" />
            </div>
          )}

          <div
            className={`max-w-3xl p-4 rounded-lg ${
              message.role === "USER"
                ? "bg-indigo-600 text-white"
                : "bg-white border border-gray-200"
            }`}
          >
            <div className="whitespace-pre-wrap break-words">
              {message.content}
            </div>
            
            {message.attachments && message.attachments.length > 0 && (
              <div className="mt-2 space-y-2">
                {message.attachments.map((attachment) => (
                  <div
                    key={attachment.id}
                    className="flex items-center gap-2 p-2 bg-gray-100 rounded"
                  >
                    <span className="text-sm font-medium">
                      {attachment.filename}
                    </span>
                    <span className="text-xs text-gray-500">
                      ({(attachment.size / 1024).toFixed(1)} KB)
                    </span>
                  </div>
                ))}
              </div>
            )}
            
            <div className="text-xs opacity-70 mt-2">
              {new Date(message.createdAt).toLocaleTimeString()}
            </div>
          </div>

          {message.role === "USER" && (
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
              <User size={16} className="text-white" />
            </div>
          )}
        </div>
      ))}

      {/* Streaming message with typewriter effect */}
      {isStreaming && (
        <div className="flex gap-3 justify-start">
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Bot size={16} className="text-white" />
          </div>
          
          <div className="max-w-3xl p-4 rounded-lg bg-white border border-gray-200">
            <div className="whitespace-pre-wrap break-words">
              {displayedStreamingMessage}
              {!isTypingComplete && (
                <span className="inline-block w-2 h-5 bg-gray-400 ml-1 animate-pulse" />
              )}
            </div>
            
            {isTypingComplete && (
              <div className="text-xs opacity-70 mt-2">
                Streaming complete
              </div>
            )}
          </div>
        </div>
      )}

      {/* Typing indicator when streaming starts but no content yet */}
      {isStreaming && !streamingMessage && (
        <div className="flex gap-3 justify-start">
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Bot size={16} className="text-white" />
          </div>
          
          <div className="max-w-3xl p-4 rounded-lg bg-white border border-gray-200">
            <div className="typing-indicator flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
      
      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .typing-indicator > div {
          animation: bounce 1s infinite;
        }
      `}</style>
    </div>
  );
}