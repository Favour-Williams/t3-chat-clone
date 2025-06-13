"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { MessageSquare, Plus, User, LogOut, Settings } from "lucide-react";
import { type RouterOutputs } from "~/trpc/shared";

type Chat = RouterOutputs["chat"]["getAll"][0];
type User = {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

interface ChatSidebarProps {
  chats: Chat[];
  selectedChatId: string | null;
  onSelectChat: (chatId: string) => void;
  onNewChat: () => void;
  user: User;
}

export default function ChatSidebar({
  chats,
  selectedChatId,
  onSelectChat,
  onNewChat,
  user,
}: ChatSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`bg-gray-900 text-white flex flex-col transition-all duration-300 ${
      isCollapsed ? "w-16" : "w-80"
    }`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-xl font-semibold">T3 Chat</h1>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <MessageSquare size={20} />
          </button>
        </div>
      </div>

      {/* New Chat Button */}
      <div className="p-4">
        <button
          onClick={onNewChat}
          className={`w-full flex items-center gap-3 p-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <Plus size={20} />
          {!isCollapsed && <span>New Chat</span>}
        </button>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        <div className="p-2">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className={`w-full text-left p-3 rounded-lg mb-2 transition-colors ${
                selectedChatId === chat.id
                  ? "bg-indigo-600"
                  : "hover:bg-gray-700"
              } ${isCollapsed ? "flex justify-center" : ""}`}
            >
              {isCollapsed ? (
                <MessageSquare size={20} />
              ) : (
                <div>
                  <div className="font-medium truncate">{chat.title}</div>
                  {chat.messages.length > 0 && (
                    <div className="text-sm text-gray-400 truncate mt-1">
                      {chat.messages[0]?.content}
                    </div>
                  )}
                  <div className="text-xs text-gray-500 mt-1">
                    {new Date(chat.updatedAt).toLocaleDateString()}
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* User Section */}
      <div className="p-4 border-t border-gray-700">
        <div className={`flex items-center gap-3 ${isCollapsed ? "justify-center" : ""}`}>
          {user.image ? (
            <img
              src={user.image}
              alt={user.name || "User"}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <User size={16} />
            </div>
          )}
          
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">
                {user.name || "User"}
              </div>
              <div className="text-sm text-gray-400 truncate">
                {user.email}
              </div>
            </div>
          )}
        </div>

        {!isCollapsed && (
          <div className="mt-3 flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <Settings size={16} />
              <span className="text-sm">Settings</span>
            </button>
            <button
              onClick={() => signOut()}
              className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <LogOut size={16} />
              <span className="text-sm">Sign Out</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}