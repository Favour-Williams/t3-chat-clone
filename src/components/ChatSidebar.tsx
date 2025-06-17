"use client";

import { useState, useMemo } from "react";
import { signOut } from "next-auth/react";
import { 
  MessageSquare, 
  Plus, 
  User, 
  LogOut, 
  Settings, 
  Trash2, 
  X, 
  Search,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Calendar,
  Hash,
  Filter,
  Moon, Sun, Palette, Monitor
} from "lucide-react";
import { type RouterOutputs } from "~/trpc/shared";
import { useTheme } from "~/contexts/ThemeContext";

type Chat = RouterOutputs["chat"]["getAll"][0];
type User = {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

interface ChatSidebarProps {
  chats: Chat[];
  selectedChatId: string | null;
  onSelectChat: (chatId: string) => void;
  onNewChat: () => void;
  onDeleteChat: (chatId: string) => void;
  onSignOut?: () => void;
  isGuest?: boolean;
  user: User;
}

// Function to generate smart chat topics based on content
const generateChatTopic = (messages: any[]): string => {
  if (!messages || messages.length === 0) return "💬 New Chat";
  
  const firstUserMessage = messages.find(msg => msg.role === 'user')?.content || '';
  
  if (!firstUserMessage.trim()) return "💬 New Chat";
  
  // Simple topic extraction logic
  const content = firstUserMessage.toLowerCase();
  
  if (content.includes('code') || content.includes('programming') || content.includes('function') || 
      content.includes('javascript') || content.includes('python') || content.includes('react') || 
      content.includes('component') || content.includes('bug') || content.includes('debug')) {
    return "💻 Programming Help";
  }
  if (content.includes('explain') || content.includes('what is') || content.includes('how does') || 
      content.includes('definition') || content.includes('meaning')) {
    return "❓ Explanation Request";
  }
  if (content.includes('help') || content.includes('problem') || content.includes('issue') || 
      content.includes('trouble') || content.includes('stuck')) {
    return "🆘 Help & Support";
  }
  if (content.includes('write') || content.includes('create') || content.includes('generate') || 
      content.includes('make') || content.includes('build')) {
    return "✍️ Content Creation";
  }
  if (content.includes('review') || content.includes('check') || content.includes('feedback') || 
      content.includes('opinion') || content.includes('thoughts')) {
    return "👀 Review & Feedback";
  }
  if (content.includes('idea') || content.includes('brainstorm') || content.includes('suggest') || 
      content.includes('recommendation') || content.includes('advice')) {
    return "💡 Ideas & Brainstorming";
  }
  if (content.includes('plan') || content.includes('strategy') || content.includes('organize') || 
      content.includes('schedule') || content.includes('structure')) {
    return "📋 Planning & Strategy";
  }
  if (content.includes('learn') || content.includes('tutorial') || content.includes('teach') || 
      content.includes('guide') || content.includes('lesson')) {
    return "📚 Learning & Tutorial";
  }
  if (content.includes('design') || content.includes('ui') || content.includes('ux') || 
      content.includes('interface') || content.includes('layout')) {
    return "🎨 Design & UI";
  }
  if (content.includes('data') || content.includes('analyze') || content.includes('chart') || 
      content.includes('graph') || content.includes('statistics')) {
    return "📊 Data & Analysis";
  }
  
  // Fallback: use first few meaningful words
  const words = firstUserMessage.trim().split(/\s+/).slice(0, 4);
  const topic = words.join(' ');
  
  if (topic.length > 25) {
    return "💬 " + topic.substring(0, 22) + '...';
  }
  
  return topic.length > 0 ? "💬 " + topic : "💬 General Chat";
};

// Function to get time-based greeting
const getTimeBasedIcon = (date: Date): string => {
  const hour = date.getHours();
  if (hour < 6) return "🌙";
  if (hour < 12) return "🌅";
  if (hour < 18) return "☀️";
  return "🌆";
};

export default function ChatSidebar({
  chats,
  selectedChatId,
  onSelectChat,
  onNewChat,
  onDeleteChat,
  onSignOut,
  isGuest,
  user,
}: ChatSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showSearchPopup, setShowSearchPopup] = useState(false);

  const { theme, setTheme } = useTheme();

  // Filter chats based on search query
  const filteredChats = useMemo(() => {
    if (!searchQuery.trim()) return chats;
    
    return chats.filter(chat => {
      const topic = generateChatTopic(chat.messages);
      const firstMessage = chat.messages[0]?.content || '';
      
      return (
        topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        firstMessage.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.title?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [chats, searchQuery]);

  // Group chats by date
  const groupedChats = useMemo(() => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const lastWeek = new Date(today);
    lastWeek.setDate(lastWeek.getDate() - 7);

    const groups = {
      today: [] as Chat[],
      yesterday: [] as Chat[],
      thisWeek: [] as Chat[],
      older: [] as Chat[]
    };

    filteredChats.forEach(chat => {
      const chatDate = new Date(chat.updatedAt);
      const isToday = chatDate.toDateString() === today.toDateString();
      const isYesterday = chatDate.toDateString() === yesterday.toDateString();
      const isThisWeek = chatDate > lastWeek;

      if (isToday) groups.today.push(chat);
      else if (isYesterday) groups.yesterday.push(chat);
      else if (isThisWeek) groups.thisWeek.push(chat);
      else groups.older.push(chat);
    });

    return groups;
  }, [filteredChats]);

  const handleDeleteClick = (e: React.MouseEvent, chatId: string) => {
    e.stopPropagation();
    setDeleteConfirmId(chatId);
  };

  const handleConfirmDelete = (e: React.MouseEvent, chatId: string) => {
    e.stopPropagation();
    onDeleteChat(chatId);
    setDeleteConfirmId(null);
  };

  const handleCancelDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDeleteConfirmId(null);
  };

  const handleSearchIconClick = () => {
    if (isCollapsed) {
      setShowSearchPopup(true);
    }
  };

  const ChatGroup = ({ title, chats: groupChats, icon }: { title: string; chats: Chat[]; icon: React.ReactNode }) => {
    if (groupChats.length === 0) return null;

    return (
      <div className="mb-4">
        <div className={`flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider ${theme === 'pink' ? 'text-pink-400' : 'text-secondary-themed'}`}>
          {icon}
          <span>{title}</span>
          <div className="flex-1 h-px bg-gradient-to-r from-pink-200/30 to-transparent ml-2"></div>
        </div>
        {groupChats.map((chat) => (
          <div
            key={chat.id}
           className={`relative group w-full rounded-xl mb-2 transition-all duration-300 transform hover:scale-[1.02] ${
              selectedChatId === chat.id
                ? theme === 'pink' ? 'glass-pink border-pink-300' : 'glass-themed border-border bg-accent'
                : theme === 'pink' ? 'hover:glass-pink hover:border-pink-200/50 border border-transparent' : 'hover:glass-themed hover:border-border border border-transparent'
            }`}
          >
            <button
              onClick={() => onSelectChat(chat.id)}
              className="w-full text-left p-4 rounded-xl transition-all duration-200"
            >
              <div className="pr-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm">{getTimeBasedIcon(new Date(chat.updatedAt))}</span>
                  <div className="font-semibold text-pink-800 truncate text-sm">
                    {generateChatTopic(chat.messages)}
                  </div>
                </div>
                {chat.messages.length > 0 && (
                  <div className="text-sm text-pink-600 truncate mb-2 leading-relaxed">
                    {chat.messages[0]?.content}
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs text-pink-500">
                  <Calendar size={12} />
                  <span>{new Date(chat.updatedAt).toLocaleDateString()}</span>
                  <Hash size={12} className="ml-2" />
                  <span>{chat.messages.length} messages</span>
                </div>
              </div>
            </button>

            {/* Delete Button */}
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {deleteConfirmId === chat.id ? (
                <div className="flex gap-1 message-enter-active">
                  <button
                    onClick={(e) => handleConfirmDelete(e, chat.id)}
                    className="p-2 text-red-500 hover:text-red-400 hover:bg-red-100 rounded-lg transition-all duration-200 hover:scale-110"
                    title="Confirm delete"
                  >
                    <Trash2 size={14} />
                  </button>
                  <button
                    onClick={handleCancelDelete}
                    className="p-2 text-pink-500 hover:text-pink-400 hover:bg-pink-100 rounded-lg transition-all duration-200 hover:scale-110"
                    title="Cancel"
                  >
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={(e) => handleDeleteClick(e, chat.id)}
                  className="p-2 text-pink-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-red-100 rounded-lg hover:scale-110"
                  title="Delete chat"
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // When collapsed, show only the horizontal icon bar
  if (isCollapsed) {
    return (
      <>
        {/* Minimal Horizontal Icon Bar */}
        <div className={`fixed top-4 left-4 z-50 flex items-center gap-2 border backdrop-blur-xl rounded-2xl p-2 shadow-2xl ${theme === 'pink' ? 'pink-gradient-soft border-pink-200/30' : 'sidebar-bg border-border'}`}>
          <button
            onClick={() => setIsCollapsed(false)}
            className="p-2 hover:bg-pink-100 rounded-xl transition-all duration-200 hover:scale-110 group"
            title="Expand sidebar"
          >
            <ChevronRight size={20} className="text-pink-600 group-hover:text-pink-700" />
          </button>
          
          <button
            onClick={handleSearchIconClick}
            className="p-2 hover:bg-pink-100 rounded-xl transition-all duration-200 hover:scale-110 group"
            title="Search chats"
          >
            <Search size={20} className="text-pink-600 group-hover:text-pink-700" />
          </button>
          
          <button
            onClick={onNewChat}
            className="p-2 hover:bg-pink-100 rounded-xl transition-all duration-200 hover:scale-110 group"
            title="New chat"
          >
            <Plus size={20} className="text-pink-600 group-hover:text-pink-700" />
          </button>
        </div>

        {/* Search Popup for Collapsed State */}
        {showSearchPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`bg-white rounded-2xl p-6 w-96 max-w-[90vw] max-h-[80vh] overflow-hidden border shadow-2xl ${theme === 'pink' ? 'glass-pink border-pink-200' : 'glass-themed border-border'}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-pink-800">Search Chats</h3>
                <button
                  onClick={() => setShowSearchPopup(false)}
                  className="p-2 hover:bg-pink-100 rounded-lg transition-colors"
                >
                  <X size={20} className="text-pink-600" />
                </button>
              </div>
              
              <div className="relative mb-4">
                <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 text-sm ${theme === 'pink' ? 'input-pink' : 'input-themed'}`}
                  autoFocus
                />
              </div>
              
              <div className="max-h-60 overflow-y-auto scrollbar-pink">
                {filteredChats.slice(0, 10).map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => {
                      onSelectChat(chat.id);
                      setShowSearchPopup(false);
                    }}
                    className="w-full text-left p-3 hover:bg-pink-50 rounded-lg transition-colors mb-2"
                  >
                    <div className="font-medium text-pink-800 text-sm mb-1">
                      {generateChatTopic(chat.messages)}
                    </div>
                    <div className="text-xs text-pink-600 truncate">
                      {chat.messages[0]?.content}
                    </div>
                  </button>
                ))}
                
                {filteredChats.length === 0 && searchQuery && (
                  <div className="text-center py-8">
                    <p className="text-pink-600">No chats found</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Full sidebar when expanded
  return (
    <>
      <div className={`w-96 h-screen sidebar-bg border-r backdrop-blur-xl flex flex-col transition-all duration-500 ease-in-out shadow-2xl ${theme === 'pink' ? 'pink-gradient-soft border-pink-200/30' : ''}`}>
        {/* Header */}
        <div className={`flex-shrink-0 p-6 border-b ${theme === 'pink' ? 'border-pink-200/30' : 'border-border'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl pink-gradient-primary flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className={`text-xl font-bold ${theme === 'pink' ? 'text-pink-800' : 'text-primary-themed'}`}>T3 Chat</h1>
                <p className={`text-xs ${theme === 'pink' ? 'text-pink-600' : 'text-secondary-themed'}`}>AI-Powered Conversations</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsCollapsed(true)}
              className="p-3 hover:bg-pink-100 rounded-xl transition-all duration-200 hover:scale-110 group glass-pink"
            >
              <ChevronLeft size={20} className="text-pink-600 group-hover:text-pink-700" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-shrink-0 p-4">
          <div className={`relative transition-all duration-300 ${isSearchFocused ? 'transform scale-105' : ''}`}>
            <Search 
              size={18} 
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                isSearchFocused ? 'text-pink-500' : 'text-pink-400'
              }`} 
            />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`w-full pl-12 pr-4 py-3 text-sm ${theme === 'pink' ? 'input-pink' : 'input-themed'}`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-pink-400 hover:text-pink-600 transition-colors duration-200"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* New Chat Button */}
        <div className="flex-shrink-0 px-4 pb-4">
          <button
            onClick={onNewChat}
            className={`w-full flex items-center gap-3 py-4 text-sm font-semibold px-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${theme === 'pink' ? 'btn-pink-primary' : 'btn-primary-themed'}`}
          >
            <Plus size={20} />
            <span>Start New Chat</span>
            <Sparkles size={16} className="ml-auto" />
          </button>
        </div>

        {/* Chat List - Scrollable Area */}
        <div className={`flex-1 overflow-y-auto px-2 ${theme === 'pink' ? 'scrollbar-pink' : 'scrollbar-themed'}`}>
          <ChatGroup 
            title="Today" 
            chats={groupedChats.today} 
            icon={<span className="text-green-500">●</span>} 
          />
          <ChatGroup 
            title="Yesterday" 
            chats={groupedChats.yesterday} 
            icon={<span className="text-yellow-500">●</span>} 
          />
          <ChatGroup 
            title="This Week" 
            chats={groupedChats.thisWeek} 
            icon={<span className="text-blue-500">●</span>} 
          />
          <ChatGroup 
            title="Older" 
            chats={groupedChats.older} 
            icon={<span className="text-gray-500">●</span>} 
          />
          
          {filteredChats.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <Filter className="w-12 h-12 text-pink-300 mx-auto mb-4" />
              <p className="text-pink-600 font-medium">No chats found</p>
              <p className="text-pink-500 text-sm">Try adjusting your search terms</p>
            </div>
          )}
        </div>

        {/* User Section - Fixed at Bottom */}
        <div className={`flex-shrink-0 p-4 border-t ${theme === 'pink' ? 'border-pink-200/30 glass-pink' : 'border-border glass-themed'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              {user.image ? (
                <img
                  src={user.image}
                  alt={user.name || "User"}
                  className="w-12 h-12 rounded-2xl border-2 border-pink-200 shadow-lg"
                />
              ) : (
                <div className="w-12 h-12 pink-gradient-secondary rounded-2xl flex items-center justify-center shadow-lg">
                  <User size={20} className="text-white" />
                </div>
              )}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-pink-800 truncate">
                {user.name || "User"}
              </div>
              <div className="text-sm text-pink-600 truncate">
                {user.email}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="mt-3">
              <div className={`flex items-center justify-center gap-2 py-3 text-sm ${theme === 'pink' ? 'btn-pink-secondary' : 'btn-secondary-themed'}`}>
                <button
                  onClick={() => setTheme('pink')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    theme === 'pink' ? 'theme-active' : 'theme-inactive'
                  }`}
                  title="Pink Theme"
                >
                  <Palette size={16} />
                </button>
                <button
                  onClick={() => setTheme('white')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    theme === 'white' ? 'theme-active' : 'theme-inactive'
                  }`}
                  title="Light Theme"
                >
                  <Sun size={16} />
                </button>
                <button
                  onClick={() => setTheme('black')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    theme === 'black' ? 'theme-active' : 'theme-inactive'
                  }`}
                  title="Dark Theme"
                >
                  <Moon size={16} />
                </button>
                <button
                  onClick={() => setTheme('grey')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    theme === 'grey' ? 'theme-active' : 'theme-inactive'
                  }`}
                  title="Grey Theme"
                >
                  <Monitor size={16} />
                </button>
              </div>
            </div>
            {!isGuest && (
              <button
                onClick={() => signOut()}
                className="btn-pink-secondary flex items-center justify-center gap-2 py-3 text-sm hover:bg-red-100 hover:text-red-600 hover:border-red-300"
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </button>
            )}
            {isGuest && onSignOut && (
              <button
                onClick={onSignOut}
                className={`flex items-center justify-center gap-2 py-3 text-sm transition-all duration-200 ${theme === 'pink' ? 'btn-pink-secondary hover:bg-pink-100 hover:text-pink-600 hover:border-pink-300' : 'btn-secondary-themed hover:bg-blue-100 hover:text-blue-600 hover:border-blue-300'}`}
              >
                <LogOut size={16} />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}