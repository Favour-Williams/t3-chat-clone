import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();

  if (session?.user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to T3 Chat
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Hello, {session.user.name}! Ready to start chatting?
            </p>
            <Link
              href="/chat"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Go to Chat
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            T3 Chat Application
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern, real-time chat application built with Next.js 14, tRPC, Prisma, and NextAuth.js. 
            Features multiple LLM providers, file uploads, and streaming responses.
          </p>
          <div className="space-y-4">
            <Link
              href="/api/auth/signin"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Sign In to Get Started
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Multiple LLM Providers
              </h3>
              <p className="text-gray-600">
                Support for OpenRouter, Groq, and Hugging Face APIs with streaming responses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Real-time Chat
              </h3>
              <p className="text-gray-600">
                Instant messaging with typing indicators and message persistence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                File Uploads
              </h3>
              <p className="text-gray-600">
                Share files and attachments seamlessly within your conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}