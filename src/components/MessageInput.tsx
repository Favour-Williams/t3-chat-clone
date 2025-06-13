"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Square, Paperclip, Settings, X, Upload, FileText, Image, File } from "lucide-react";

interface AttachedFile {
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

  const getFileType = (file: File): AttachedFile['type'] => {
    const mimeType = file.type as keyof typeof SUPPORTED_FILE_TYPES;
    return SUPPORTED_FILE_TYPES[mimeType] || 'other';
  };

  const getFileIcon = (type: AttachedFile['type']) => {
    switch (type) {
      case 'image': return <Image size={16} className="text-blue-500" />;
      case 'pdf': return <FileText size={16} className="text-red-500" />;
      case 'text': return <FileText size={16} className="text-green-500" />;
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
    if (LLM_PROVIDERS[newProvider]?.models.length > 0) {
      setSelectedModel(LLM_PROVIDERS[newProvider].models[0]);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="border-t border-gray-200 bg-white">
      {/* Settings Panel */}
      {showSettings && (
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-medium text-gray-700 mb-3">LLM Settings</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Provider
                </label>
                <select
                  value={selectedProvider}
                  onChange={(e) => handleProviderChange(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {Object.entries(LLM_PROVIDERS).map(([key, provider]) => (
                    <option key={key} value={key}>
                      {provider.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Model
                </label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {attachedFiles.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-2 relative"
                >
                  {file.preview && (
                    <img
                      src={file.preview}
                      alt={file.file.name}
                      className="w-8 h-8 object-cover rounded"
                    />
                  )}
                  {!file.preview && getFileIcon(file.type)}
                  
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-gray-700 truncate max-w-32">
                      {file.file.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatFileSize(file.file.size)}
                    </div>
                  </div>
                  
                  {!file.uploaded && file.uploadProgress !== undefined && (
                    <div className="flex items-center gap-1">
                      <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-indigo-500 transition-all duration-200"
                          style={{ width: `${file.uploadProgress}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 w-8 text-right">
                        {file.uploadProgress}%
                      </span>
                    </div>
                  )}
                  
                  {file.uploaded && (
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                  )}
                  
                  <button
                    onClick={() => removeFile(file.id)}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
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
        <div className="p-3 bg-red-50 border-b border-red-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500 flex-shrink-0" />
              <span className="text-sm text-red-700">{uploadError}</span>
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
            className={`relative ${isDragging ? 'ring-2 ring-indigo-500 ring-offset-2' : ''}`}
          >
            {isDragging && (
              <div className="absolute inset-0 bg-indigo-50 border-2 border-dashed border-indigo-300 rounded-lg flex items-center justify-center z-10">
                <div className="text-center">
                  <Upload className="mx-auto h-8 w-8 text-indigo-500 mb-2" />
                  <p className="text-sm text-indigo-600 font-medium">Drop files here</p>
                  <p className="text-xs text-indigo-500">Images, PDFs, and text files up to 10MB</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div className="flex-1 relative">
                <textarea
                  ref={textareaRef}
                  value={message}
                  onChange={handleTextareaChange}
                  onKeyDown={handleKeyDown}
                  placeholder={attachedFiles.length > 0 ? "Add a message (optional)..." : "Type your message..."}
                  className={`w-full p-3 pr-12 border ${
                    isProviderError ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none`}
                  style={{ minHeight: "48px", maxHeight: "200px" }}
                  disabled={isStreaming}
                  rows={1}
                />
                
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute right-3 top-3 p-1 text-gray-400 hover:text-gray-600 transition-colors"
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
                  className={`p-3 rounded-lg transition-colors ${
                    showSettings
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  disabled={isStreaming}
                >
                  <Settings size={20} />
                </button>
                
                {isStreaming ? (
                  <button
                    type="button"
                    onClick={onStopGeneration}
                    className="p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Square size={20} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={(!message.trim() && attachedFiles.length === 0) || isProviderError || uploadError !== null}
                    className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send size={20} />
                  </button>
                )}
              </div>
            </form>
          </div>
          
          <div className="mt-2 flex flex-wrap justify-between items-center">
            <div className="text-xs text-gray-500">
              {isProviderError ? (
                <span className="text-red-500 font-medium">
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
              <span className="text-xs text-gray-500 mr-2">Status:</span>
              <span
                className={`h-2 w-2 rounded-full ${
                  isStreaming ? "bg-green-500 animate-pulse" : "bg-gray-400"
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}