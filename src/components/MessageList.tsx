// src/components/MessageList.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { User, Bot, Sparkles } from "lucide-react";
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
  const [messageAnimations, setMessageAnimations] = useState<Set<string>>(new Set());

  // Scroll to bottom when messages or streaming changes
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle message entrance animations
  useEffect(() => {
    const newAnimations = new Set(messageAnimations);
    messages.forEach((message) => {
      if (!newAnimations.has(message.id)) {
        newAnimations.add(message.id);
      }
    });
    setMessageAnimations(newAnimations);
  }, [messages]);

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
        }, 15); // Slightly faster typing for smoother effect
        
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

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-pink">
      {messages.map((message, index) => (
        <div
          key={message.id}
          className={`flex gap-4 message-enter message-enter-active ${
            message.role === "USER" ? "justify-end" : "justify-start"
          }`}
          style={{
            animationDelay: `${index * 0.1}s`
          }}
        >
          {message.role === "ASSISTANT" && (
            <div className="w-10 h-10 pink-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg floating-element">
              <Bot size={18} className="text-white" />
            </div>
          )}

          <div
            className={`max-w-3xl rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
              message.role === "USER"
                ? "chat-bubble-user shadow-lg"
                : "chat-bubble-assistant glass-pink"
            }`}
          >
            <div className="whitespace-pre-wrap break-words text-sm leading-relaxed">
              {message.content}
            </div>
            
            {message.attachments && message.attachments.length > 0 && (
              <div className="mt-3 space-y-2">
                {message.attachments.map((attachment) => (
                  <div
                    key={attachment.id}
                    className="flex items-center gap-3 p-3 glass-pink rounded-xl border border-pink-200"
                  >
                    <div className="w-8 h-8 pink-gradient-secondary rounded-lg flex items-center justify-center">
                      <Sparkles size={14} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-pink-800">
                        {attachment.filename}
                      </span>
                      <div className="text-xs text-pink-600 opacity-75">
                        {(attachment.size / 1024).toFixed(1)} KB
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="text-xs opacity-60 mt-3 font-medium">
              {formatTime(new Date(message.createdAt))}
            </div>
          </div>

          {message.role === "USER" && (
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg floating-element">
              <User size={18} className="text-white" />
            </div>
          )}
        </div>
      ))}

      {/* Enhanced streaming message with typewriter effect */}
      {isStreaming && streamingMessage && (
        <div className="flex gap-4 justify-start message-enter message-enter-active">
          <div className="w-10 h-10 pink-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
            <Bot size={18} className="text-white animate-pulse" />
          </div>
          
          <div className="max-w-3xl chat-bubble-assistant glass-pink">
            <div className="whitespace-pre-wrap break-words text-sm leading-relaxed">
              {displayedStreamingMessage}
              {!isTypingComplete && (
                <span className="inline-block w-0.5 h-4 bg-pink-500 ml-1 animate-pulse rounded-full" />
              )}
            </div>
            
            {isTypingComplete && (
              <div className="text-xs opacity-60 mt-3 font-medium flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Streaming complete
              </div>
            )}
          </div>
        </div>
      )}

      {/* Enhanced typing indicator when streaming starts but no content yet */}
      {isStreaming && !streamingMessage && (
        <div className="flex gap-4 justify-start message-enter message-enter-active">
          <div className="w-10 h-10 pink-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
            <Bot size={18} className="text-white animate-pulse" />
          </div>
          
          <div className="glass-pink rounded-2xl p-4 border border-pink-200">
            <div className="typing-indicator">
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
            <div className="text-xs text-pink-600 opacity-75 mt-2 font-medium">
              AI is thinking...
            </div>
          </div>
        </div>
      )}

      {/* Floating background elements for visual appeal */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-200 rounded-full opacity-20 floating-element blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-pink-300 rounded-full opacity-15 floating-element blur-lg" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-pink-400 rounded-full opacity-10 floating-element blur-md" style={{ animationDelay: '4s' }}></div>
      </div>

      <div ref={messagesEndRef} />
    </div>
  );
}