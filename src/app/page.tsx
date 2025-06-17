import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();

  if (session?.user) {
    return (
      <div className="min-h-screen pink-gradient-soft">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="floating-element mb-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full pink-gradient-primary flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-pink-800 mb-4 bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
              Welcome to T3 Chat
            </h1>
            <p className="text-xl text-pink-700 mb-8 font-medium">
              Hello, <span className="font-bold text-pink-800">{session.user.name}</span>! Ready to start chatting?
            </p>
            
            <Link
              href="/chat"
              className="btn-pink-primary inline-flex items-center gap-2 text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Go to Chat
            </Link>
          </div>
          
          {/* User Dashboard Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="card-pink text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full pink-gradient-secondary flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pink-800 mb-2">Recent Chats</h3>
              <p className="text-pink-600 text-sm">Continue your conversations</p>
            </div>
            
            <div className="card-pink text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full pink-gradient-secondary flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pink-800 mb-2">AI Settings</h3>
              <p className="text-pink-600 text-sm">Configure your AI preferences</p>
            </div>
            
            <div className="card-pink text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full pink-gradient-secondary flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pink-800 mb-2">File History</h3>
              <p className="text-pink-600 text-sm">View your shared files</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pink-gradient-soft">
      {/* Header */}
      <div className="header-pink">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full pink-gradient-primary flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-pink-800">T3 Chat</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          {/* Hero Section */}
          <div className="floating-element mb-12">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full glass-pink flex items-center justify-center shadow-2xl">
              <svg className="w-16 h-16 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-pink-800 mb-6 bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 bg-clip-text text-transparent">
            T3 Chat Application
          </h1>
          <p className="text-xl text-pink-700 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            A modern, real-time chat application built with Next.js 14, tRPC, Prisma, and NextAuth.js. 
            Features multiple LLM providers, file uploads, and streaming responses.
          </p>
          
          <div className="space-y-4 mb-16">
            <Link
              href="/api/auth/signin"
              className="btn-pink-primary inline-flex items-center gap-3 text-lg px-10 py-4"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Sign In to Get Started
            </Link>
            <p className="text-sm text-pink-600">No account needed - sign in with your preferred provider</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card-pink group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl pink-gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-pink-800 mb-3">
                Multiple LLM Providers
              </h3>
              <p className="text-pink-600 leading-relaxed">
                Support for OpenRouter, Groq, and Hugging Face APIs with streaming responses for the best AI experience.
              </p>
            </div>
            
            <div className="card-pink group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl pink-gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-pink-800 mb-3">
                Real-time Chat
              </h3>
              <p className="text-pink-600 leading-relaxed">
                Instant messaging with typing indicators, message persistence, and lightning-fast responses.
              </p>
            </div>
            
            <div className="card-pink group md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl pink-gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-pink-800 mb-3">
                File Uploads
              </h3>
              <p className="text-pink-600 leading-relaxed">
                Share files and attachments seamlessly within your conversations with secure cloud storage.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-pink-800 mb-8">Built with Modern Technologies</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                "Next.js 14", "TypeScript", "tRPC", "Prisma", "NextAuth.js", 
                "Tailwind CSS", "PostgreSQL", "Vercel"
              ].map((tech) => (
                <span 
                  key={tech}
                  className="px-6 py-3 glass-pink rounded-full text-pink-700 font-semibold text-sm hover:scale-105 transition-transform duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
