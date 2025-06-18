// src/components/MessageList.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { User, Bot, Sparkles } from "lucide-react";
import { type RouterOutputs } from "~/trpc/shared";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Message = NonNullable<RouterOutputs["chat"]["getById"]>["messages"][0];

interface MessageListProps {
  messages: Message[];
  isStreaming: boolean;
  streamingMessage: string;
}

const parseContent = (content: string) => {
  const parts = [];
  let remaining = content;

  // Process code blocks first (triple backticks)
  while (remaining.includes('```')) {
    const beforeCode = remaining.substring(0, remaining.indexOf('```'));
    if (beforeCode) {
      parts.push({ type: 'text', content: beforeCode });
    }

    remaining = remaining.substring(remaining.indexOf('```') + 3);
    const nextNewline = remaining.indexOf('\n');
    const language = nextNewline !== -1 ? remaining.substring(0, nextNewline).trim() || 'text' : 'text';
    remaining = nextNewline !== -1 ? remaining.substring(nextNewline + 1) : remaining;
    
    const codeEnd = remaining.indexOf('```');
    if (codeEnd === -1) {
      // If no closing ```, treat the rest as code
      parts.push({ type: 'code', language, content: remaining });
      remaining = '';
    } else {
      const codeContent = remaining.substring(0, codeEnd);
      remaining = remaining.substring(codeEnd + 3);
      parts.push({ type: 'code', language, content: codeContent });
    }
  }

  if (remaining) {
    parts.push({ type: 'text', content: remaining });
  }

  return parts;
};

const parseTextFormatting = (text: string) => {
  const parts = [];
  let remaining = text;

  while (remaining.length > 0) {
    // Find the next formatting marker
    const boldIndex = remaining.indexOf('**');
    const italicIndex = remaining.indexOf('*');
    const headingIndex = remaining.indexOf('###');
    const subheadingIndex = remaining.indexOf('##');
    const mainHeadingIndex = remaining.indexOf('#');
    const inlineCodeIndex = remaining.indexOf('`');

    // Determine which comes first (excluding markers that are part of longer sequences)
    const markers = [
      { index: headingIndex, type: 'heading3', marker: '###', length: 3 },
      { index: subheadingIndex !== headingIndex ? subheadingIndex : -1, type: 'heading2', marker: '##', length: 2 },
      { index: mainHeadingIndex !== headingIndex && mainHeadingIndex !== subheadingIndex ? mainHeadingIndex : -1, type: 'heading1', marker: '#', length: 1 },
      { index: boldIndex, type: 'bold', marker: '**', length: 2 },
      { index: italicIndex !== boldIndex ? italicIndex : -1, type: 'italic', marker: '*', length: 1 },
      { index: inlineCodeIndex, type: 'inlineCode', marker: '`', length: 1 }
    ].filter(m => m.index !== -1).sort((a, b) => a.index - b.index);

    if (markers.length === 0) {
      // No more formatting markers
      parts.push({ type: 'text', content: remaining });
      break;
    }

    const nextMarker = markers[0]!;
    
    // Add text before the marker
    if (nextMarker.index > 0) {
      parts.push({ type: 'text', content: remaining.substring(0, nextMarker.index) });
    }

    // Process the formatted text
    remaining = remaining.substring(nextMarker.index + nextMarker.length);
    
    if (nextMarker.type === 'heading1' || nextMarker.type === 'heading2' || nextMarker.type === 'heading3') {
      // For headings, take everything until the end of line
      const endOfLine = remaining.indexOf('\n');
      const headingContent = endOfLine === -1 ? remaining : remaining.substring(0, endOfLine);
      parts.push({ type: nextMarker.type, content: headingContent.trim() });
      remaining = endOfLine === -1 ? '' : remaining.substring(endOfLine);
    } else {
      // For bold, italic, and inline code, find the closing marker
      const closingIndex = remaining.indexOf(nextMarker.marker);
      if (closingIndex === -1) {
        // No closing marker, treat as regular text
        parts.push({ type: 'text', content: nextMarker.marker });
      } else {
        const formattedContent = remaining.substring(0, closingIndex);
        parts.push({ type: nextMarker.type, content: formattedContent });
        remaining = remaining.substring(closingIndex + nextMarker.length);
      }
    }
  }

  return parts;
}; 

const MessageContent = ({ content }: { content: string }) => {
  // Early return for empty content
  if (!content) return null;
  
  const parts = parseContent(content);

  return (
    <div className="space-y-3">
      {parts.map((part, index) => {
        if (part.type === 'code') {
          return (
            <div key={index} className="my-4 rounded-lg overflow-hidden shadow-lg border border-gray-700 bg-gray-900">
              {/* IDE-like header */}
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-600 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-300 text-xs font-medium ml-2">
                    {part.language || 'code'}
                  </span>
                </div>
                <div className="text-gray-400 text-xs">
                  {part.content.split('\n').length} lines
                </div>
              </div>
              <SyntaxHighlighter
                language={part.language}
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  borderRadius: 0,
                  padding: '1.25rem',
                  fontSize: '0.875rem',
                  lineHeight: '1.6',
                  backgroundColor: '#1e1e1e',
                  fontFamily: 'JetBrains Mono, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                }}
                showLineNumbers={part.content.split('\n').length > 3}
                lineNumberStyle={{
                  color: '#6b7280',
                  paddingRight: '1rem',
                  fontSize: '0.75rem',
                  minWidth: '2.5rem'
                }}
              >
                {part.content}
              </SyntaxHighlighter>
            </div>
          );
        }

        // Process text for formatting
        const textParts = parseTextFormatting(part.content);

        return (
          <div key={index} className="formatted-text">
            {textParts.map((textPart, i) => {
              switch (textPart.type) {
                case 'heading1':
                  return (
                    <h1 key={i} className="text-2xl font-bold text-pink-800 dark:text-pink-200 mt-6 mb-4 flex items-center gap-2 border-b border-pink-200 dark:border-pink-800 pb-2">
                      <span className="text-pink-500 text-lg">#</span>
                      <span className="flex-1">{textPart.content}</span>
                    </h1>
                  );
                case 'heading2':
                  return (
                    <h2 key={i} className="text-xl font-semibold text-pink-700 dark:text-pink-300 mt-5 mb-3 flex items-center gap-2">
                      <span className="text-pink-500">##</span>
                      <span>{textPart.content}</span>
                    </h2>
                  );
                case 'heading3':
                  return (
                    <h3 key={i} className="text-lg font-semibold text-pink-600 dark:text-pink-400 mt-4 mb-2 flex items-center gap-2">
                      <span className="text-pink-500">###</span>
                      <span>{textPart.content}</span>
                    </h3>
                  );
                case 'bold':
                  return (
                    <strong key={i} className="font-semibold text-pink-700 dark:text-pink-300 bg-pink-50 dark:bg-pink-900/20 px-1 py-0.5 rounded">
                      {textPart.content}
                    </strong>
                  );
                case 'italic':
                  return (
                    <em key={i} className="italic text-pink-600 dark:text-pink-400">
                      {textPart.content}
                    </em>
                  );
                case 'inlineCode':
                  return (
                    <code key={i} className="bg-gray-100 dark:bg-gray-800 text-pink-600 dark:text-pink-400 px-2 py-1 rounded text-sm font-mono border">
                      {textPart.content}
                    </code>
                  );
                default:
                  return (
                    <span key={i} className="whitespace-pre-wrap">
                      {textPart.content}
                    </span>
                  );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

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
          setDisplayedStreamingMessage((prev) => {
            const newMessage = prev + streamingMessage[currentIndex];
            return newMessage;
          });
          setCurrentIndex((prev) => prev + 1);
        }, 15);
        
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

  // Alternative effect to handle complete streaming message updates
  useEffect(() => {
    if (streamingMessage && displayedStreamingMessage !== streamingMessage) {
      // If the streaming message changed dramatically (like a reset), update accordingly
      if (streamingMessage.length < displayedStreamingMessage.length) {
        setDisplayedStreamingMessage(streamingMessage);
        setCurrentIndex(streamingMessage.length);
      }
    }
  }, [streamingMessage, displayedStreamingMessage]);

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
            className={`max-w-4xl rounded-2xl transition-all duration-300 hover:scale-[1.01] ${
              message.role === "USER"
                ? "chat-bubble-user shadow-lg"
                : "chat-bubble-assistant glass-pink"
            }`}
          >
            <div className="text-sm leading-relaxed">
               <MessageContent content={message.content} />
            </div>
            
            {message.attachments && message.attachments.length > 0 && (
              <div className="mt-4 space-y-2">
                {message.attachments.map((attachment) => (
                  <div
                    key={attachment.id}
                    className="flex items-center gap-3 p-3 glass-pink rounded-xl border border-pink-200 hover:bg-pink-50 dark:hover:bg-pink-900/10 transition-colors"
                  >
                    <div className="w-8 h-8 pink-gradient-secondary rounded-lg flex items-center justify-center">
                      <Sparkles size={14} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-pink-800 dark:text-pink-200">
                        {attachment.filename}
                      </span>
                      <div className="text-xs text-pink-600 dark:text-pink-400 opacity-75">
                        {(attachment.size / 1024).toFixed(1)} KB
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="text-xs opacity-60 mt-4 font-medium flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
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
      {isStreaming && (
        <div className="flex gap-4 justify-start message-enter message-enter-active">
          <div className="w-10 h-10 pink-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
            <Bot size={18} className="text-white animate-pulse" />
          </div>
          
          <div className="max-w-4xl chat-bubble-assistant glass-pink">
            {streamingMessage ? (
              <>
                <div className="text-sm leading-relaxed">
                  <MessageContent content={displayedStreamingMessage} />
                  {!isTypingComplete && displayedStreamingMessage && (
                    <span className="inline-block w-0.5 h-4 bg-pink-500 ml-1 animate-pulse rounded-full" />
                  )}
                </div>
                
                {isTypingComplete && (
                  <div className="text-xs opacity-60 mt-3 font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Streaming complete</span>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
                <div className="text-xs text-pink-600 opacity-75 mt-2 font-medium">
                  AI is thinking...
                </div>
              </>
            )}
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