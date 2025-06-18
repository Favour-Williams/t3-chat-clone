"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Square, Paperclip, Settings, X, Upload, FileText, Image, File } from "lucide-react";
import { useTheme } from "~/contexts/ThemeContext";
export interface AttachedFile {
  id: string;
  file: File;
  preview?: string;
  type: 'image' | 'pdf' | 'text' | 'other';
  uploadProgress?: number;
  uploaded?: boolean;
}

interface MessageInputProps {
  onSendMessage: (content: string, provider: string, model: string, attachments?: AttachedFile[]) => void;
  isStreaming: boolean;
  onStopGeneration: () => void;
}

const LLM_PROVIDERS = {
  openrouter: {
    name: "OpenRouter",
    models: [
      "mistralai/mistral-7b-instruct:free",
      "deepseek/deepseek-r1-0528:free",
      "meta-llama/llama-4-scout:free",
    ],
  },
  groq: {
    name: "Groq",
    models: [
      "llama3-8b-8192",
      "llama3-70b-8192",
      "gemma2-9b-it",
    ],
  },
};

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const SUPPORTED_FILE_TYPES = {
  'image/png': 'image',
  'image/jpeg': 'image', 
  'image/jpg': 'image',
  'image/webp': 'image',
  'application/pdf': 'pdf',
  'text/plain': 'text',
  'text/markdown': 'text',
  'text/csv': 'text',
} as const;

export default function MessageInput({
  onSendMessage,
  isStreaming,
  onStopGeneration,
}: MessageInputProps) {
  const [message, setMessage] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("openrouter");
  const [selectedModel, setSelectedModel] = useState("mistralai/mistral-7b-instruct:free");
  const [showSettings, setShowSettings] = useState(false);
  const [isProviderError, setIsProviderError] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const getFileType = (file: File): AttachedFile['type'] => {
    const mimeType = file.type as keyof typeof SUPPORTED_FILE_TYPES;
    return SUPPORTED_FILE_TYPES[mimeType] || 'other';
  };

  const getFileIcon = (type: AttachedFile['type']) => {
    switch (type) {
      case 'image': return <Image size={16} className="text-pink-500" />;
      case 'pdf': return <FileText size={16} className="text-rose-500" />;
      case 'text': return <FileText size={16} className="text-pink-600" />;
      default: return <File size={16} className="text-gray-500" />;
    }
  };

  const validateFile = (file: File): string | null => {
    if (file.size > MAX_FILE_SIZE) {
      return `File "${file.name}" is too large. Maximum size is 10MB.`;
    }
    
    if (!Object.keys(SUPPORTED_FILE_TYPES).includes(file.type)) {
      return `File type "${file.type}" is not supported. Supported types: Images (PNG, JPG, WebP), PDF, and Text files.`;
    }
    
    return null;
  };

  const createFilePreview = (file: File): Promise<string | undefined> => {
    return new Promise((resolve) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target?.result as string);
        reader.onerror = () => resolve(undefined);
        reader.readAsDataURL(file);
      } else {
        resolve(undefined);
      }
    });
  };

  const simulateUpload = (fileId: string): Promise<void> => {
    return new Promise((resolve) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
          progress = 100;
          setAttachedFiles(prev => 
            prev.map(f => 
              f.id === fileId 
                ? { ...f, uploadProgress: 100, uploaded: true }
                : f
            )
          );
          clearInterval(interval);
          resolve();
        } else {
          setAttachedFiles(prev => 
            prev.map(f => 
              f.id === fileId 
                ? { ...f, uploadProgress: Math.round(progress) }
                : f
            )
          );
        }
      }, 100);
    });
  };

  const handleFileSelect = async (files: FileList | File[]) => {
    setUploadError(null);
    const filesArray = Array.from(files);
    
    for (const file of filesArray) {
      const error = validateFile(file);
      if (error) {
        setUploadError(error);
        continue;
      }

      const fileId = `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const preview = await createFilePreview(file);
      
      const attachedFile: AttachedFile = {
        id: fileId,
        file,
        preview,
        type: getFileType(file),
        uploadProgress: 0,
        uploaded: false,
      };
      
      setAttachedFiles(prev => [...prev, attachedFile]);
      
      // Simulate upload process
      simulateUpload(fileId);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFileSelect(e.target.files);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    if (!dropZoneRef.current?.contains(e.relatedTarget as Node)) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      handleFileSelect(e.dataTransfer.files);
    }
  };

  const removeFile = (fileId: string) => {
    setAttachedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ((message.trim() || attachedFiles.length > 0) && !isStreaming) {
      // Validate provider/model
      if (!LLM_PROVIDERS[selectedProvider as keyof typeof LLM_PROVIDERS]?.models.includes(selectedModel)) {
        setIsProviderError(true);
        return;
      }
      
      // Check if all files are uploaded
      const pendingFiles = attachedFiles.filter(f => !f.uploaded);
      if (pendingFiles.length > 0) {
        setUploadError("Please wait for all files to finish uploading.");
        return;
      }
      
      setIsProviderError(false);
      setUploadError(null);
      onSendMessage(message.trim(), selectedProvider, selectedModel, attachedFiles);
      setMessage("");
      setAttachedFiles([]);
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setIsProviderError(false);
    setUploadError(null);

    // Auto-resize textarea
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
  };

  const handleProviderChange = (provider: string) => {
    const newProvider = provider as keyof typeof LLM_PROVIDERS;
    setSelectedProvider(newProvider);
    
    // Set default model for the provider
    const firstModel = LLM_PROVIDERS[newProvider].models[0] || "";
    setSelectedModel(firstModel);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <>
      <style jsx>{`
        .pink-gradient-soft {
          background: linear-gradient(135deg,
            rgb(253, 242, 248) 0%,
            rgb(251, 207, 232) 50%,
            rgb(249, 168, 212) 100%);
        }
        
        .glass-pink {
          background: rgba(251, 207, 232, 0.25);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(244, 114, 182, 0.2);
          box-shadow: 0 8px 32px rgba(236, 72, 153, 0.15);
        }
        
        .btn-pink-primary {
          background: linear-gradient(135deg, rgb(236, 72, 153), rgb(219, 39, 119));
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 16px rgba(236, 72, 153, 0.3);
        }
        
        .btn-pink-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(236, 72, 153, 0.4);
          background: linear-gradient(135deg, rgb(219, 39, 119), rgb(190, 24, 93));
        }
        
        .btn-pink-primary:active {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(236, 72, 153, 0.3);
        }
        
        .btn-pink-secondary {
          background: rgba(251, 207, 232, 0.8);
          color: rgb(190, 24, 93);
          border: 2px solid rgb(244, 114, 182);
          padding: 10px 22px;
          border-radius: 12px;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(8px);
        }
        
        .btn-pink-secondary:hover {
          background: rgb(244, 114, 182);
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(244, 114, 182, 0.3);
        }
        
        .input-pink {
          background: rgba(253, 242, 248, 0.8);
          border: 2px solid rgb(249, 168, 212);
          border-radius: 12px;
          padding: 12px 16px;
          color: rgb(134, 25, 143);
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        
        .input-pink:focus {
          outline: none;
          border-color: rgb(236, 72, 153);
          box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
          background: rgba(253, 242, 248, 1);
        }
        
        .input-pink::placeholder {
          color: rgb(190, 24, 93);
          opacity: 0.6;
        }
        
        .card-pink {
          background: rgba(253, 242, 248, 0.9);
          border: 1px solid rgba(244, 114, 182, 0.2);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 16px rgba(236, 72, 153, 0.1);
        }
        
        .card-pink:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(236, 72, 153, 0.2);
          border-color: rgba(236, 72, 153, 0.4);
        }
        
        .progress-pink {
          background: linear-gradient(90deg, rgb(244, 114, 182), rgb(236, 72, 153));
        }
        
      `}</style>
      
      <div className={`border-t ${theme === 'pink' ? 'border-pink-200' : 'border-border'}`} style={{
        background: theme === 'pink' 
          ? 'linear-gradient(135deg, rgba(253, 242, 248, 0.95) 0%, rgba(251, 207, 232, 0.9) 100%)' 
          : 'var(--input-bg)',
        backdropFilter: 'blur(20px)'
      }}>
        {/* Settings Panel */}
        {showSettings && (
          <div className={`p-4 border-b ${theme === 'pink' ? 'pink-gradient-soft border-pink-200' : 'bg-background border-border'}`}>          
            <div className="max-w-4xl mx-auto">
              <h3 className="text-sm font-medium text-pink-800 mb-3">LLM Settings</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-pink-700 mb-1">
                    Provider
                  </label>
                  <select
                    value={selectedProvider}
                    onChange={(e) => handleProviderChange(e.target.value)}
                    className="input-pink w-full"
                  >
                    {Object.entries(LLM_PROVIDERS).map(([key, provider]) => (
                      <option key={key} value={key}>
                        {provider.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-pink-700 mb-1">
                    Model
                  </label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="input-pink w-full"
                  >
                    {LLM_PROVIDERS[selectedProvider as keyof typeof LLM_PROVIDERS]?.models.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* File Attachments Display */}
        {attachedFiles.length > 0 && (
           <div className={`p-4 border-b ${theme === 'pink' ? 'pink-gradient-soft border-pink-200' : 'bg-background border-border'}`}>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2">
                {attachedFiles.map((file) => (
                  <div
                    key={file.id}
                    className="card-pink flex items-center gap-2 p-3 relative"
                    style={{ padding: '12px' }}
                  >
                    {file.preview && (
                      <img
                        src={file.preview}
                        alt={file.file.name}
                        className="w-8 h-8 object-cover rounded-lg border border-pink-200"
                      />
                    )}
                    {!file.preview && getFileIcon(file.type)}
                    
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-pink-800 truncate max-w-32">
                        {file.file.name}
                      </div>
                      <div className="text-xs text-pink-600">
                        {formatFileSize(file.file.size)}
                      </div>
                    </div>
                    
                    {!file.uploaded && file.uploadProgress !== undefined && (
                      <div className="flex items-center gap-1">
                        <div className="w-16 h-2 bg-pink-200 rounded-full overflow-hidden">
                          <div
                            className="h-full progress-pink transition-all duration-200 rounded-full"
                            style={{ width: `${file.uploadProgress}%` }}
                          />
                        </div>
                        <span className="text-xs text-pink-600 w-8 text-right font-medium">
                          {file.uploadProgress}%
                        </span>
                      </div>
                    )}
                    
                    {file.uploaded && (
                      <div className="w-3 h-3 bg-pink-500 rounded-full shadow-lg" />
                    )}
                    
                    <button
                      onClick={() => removeFile(file.id)}
                      className="p-1 text-pink-400 hover:text-pink-600 hover:bg-pink-100 rounded-full transition-all duration-200"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Error Display */}
        {uploadError && (
           <div className={`p-3 ${theme === 'pink' ? 'bg-rose-50 border-rose-200' : 'bg-destructive/10 border-destructive'}`}>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-rose-500 flex-shrink-0" />
                <span className="text-sm text-rose-700">{uploadError}</span>
              </div>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-4">
          <div className="max-w-4xl mx-auto">
            {/* Drag and Drop Zone */}
            <div
              ref={dropZoneRef}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative ${isDragging ? 'ring-2 ring-pink-400 ring-offset-2' : ''}`}
            >
              {isDragging && (
                <div className={`absolute inset-0 border-2 border-dashed rounded-lg flex items-center justify-center z-10 ${
                  theme === 'pink' 
                    ? 'glass-pink border-pink-300' 
                    : 'glass-themed border-border'
                }`}>
                  <div className="text-center">
                    <Upload className="mx-auto h-8 w-8 text-pink-500 mb-2" />
                    <p className="text-sm text-pink-600 font-medium">Drop files here</p>
                    <p className="text-xs text-pink-500">Images, PDFs, and text files up to 10MB</p>
                  </div>
                </div>
              )}
              
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <textarea
                    ref={textareaRef}
                    value={message}
                    onChange={handleTextareaChange}
                    onKeyDown={handleKeyDown}
                    placeholder={attachedFiles.length > 0 ? "Add a message (optional)..." : "Type your message..."}
                    className={`w-full pr-12 resize-none input-consistent ${
                      theme === 'pink' 
                        ? 'input-pink' 
                        : 'input-themed'
                    } ${isProviderError ? "border-rose-400" : ""}`}
                    style={{ minHeight: "48px", maxHeight: "200px" }}
                    disabled={isStreaming}
                    rows={1}
                  />
                  
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute right-3 top-3 p-1 text-pink-400 hover:text-pink-600 hover:bg-pink-100 rounded-full transition-all duration-200"
                    disabled={isStreaming}
                  >
                    <Paperclip size={20} />
                  </button>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/png,image/jpeg,image/jpg,image/webp,application/pdf,text/plain,text/markdown,text/csv"
                    onChange={handleFileInputChange}
                    className="hidden"
                  />
                </div>
                
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowSettings(!showSettings)}
                    className={`${showSettings ? 'btn-consistent-primary' : 'btn-consistent-secondary'} ${
                      showSettings
                        ? theme === 'pink' ? "btn-pink-primary" : "btn-primary-themed"
                        : theme === 'pink' ? "btn-pink-secondary" : "btn-secondary-themed"
                    }`}
                    disabled={isStreaming}
                  >
                    <Settings size={20} />
                  </button>
                  
                  {isStreaming ? (
                    <button
                      type="button"
                      onClick={onStopGeneration}
                      className="btn-consistent-primary p-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 hover:shadow-xl hover:-translate-y-0.5"                    >
                      <Square size={20} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={(!message.trim() && attachedFiles.length === 0) || isProviderError || uploadError !== null}
                     className={`btn-consistent-primary ${
                      theme === 'pink' 
                        ? 'btn-pink-primary' 
                        : 'btn-primary-themed'
                    } disabled:bg-pink-200 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none`}
                    >
                      <Send size={20} />
                    </button>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-2 flex flex-wrap justify-between items-center">
              <div className={`text-xs ${
                theme === 'pink' ? 'text-pink-600' : 'text-muted-foreground'
              }`}>
                {isProviderError ? (
                  <span className="text-rose-600 font-medium">
                    Invalid model selected. Please choose a valid model.
                  </span>
                ) : (
                  <span>
                    Using {LLM_PROVIDERS[selectedProvider as keyof typeof LLM_PROVIDERS]?.name || "Unknown"} - {selectedModel}
                    {attachedFiles.length > 0 && (
                      <span className="ml-2">
                        • {attachedFiles.length} file{attachedFiles.length !== 1 ? 's' : ''} attached
                      </span>
                    )}
                  </span>
                )}
              </div>
              
              <div className="flex items-center">
                <span className="text-xs text-pink-600 mr-2">Status:</span>
                <span
                  className={`h-2 w-2 rounded-full ${
                    isStreaming ? "bg-pink-500 animate-pulse shadow-lg" : "bg-pink-300"
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}