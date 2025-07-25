// src/app/auth/signin/page.tsx
"use client";

import { getProviders, signIn, getSession, type LiteralUnion, type ClientSafeProvider } from "next-auth/react";
import { type BuiltInProviderType } from "next-auth/providers/index";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Providers = Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;

export default function SignIn() {
  const [providers, setProviders] = useState<Providers>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
      setLoading(false);
    };
    fetchProviders();
  }, []);

  const handleSignIn = async (providerId: string) => {
    await signIn(providerId, { callbackUrl });
  };

  if (loading) {
    return (
      <div className="min-h-screen pink-gradient-soft flex items-center justify-center">
        <div className="text-center">
          <div className="typing-indicator mx-auto mb-4">
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
          </div>
          <p className="text-pink-700 font-medium">Loading sign-in options...</p>
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
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full pink-gradient-primary flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-pink-800">T3 Chat</span>
            </Link>
            <Link 
              href="/"
              className="text-pink-700 hover:text-pink-800 font-medium transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          {/* Main Sign-in Card */}
          <div className="glass-pink rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="floating-element">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl pink-gradient-primary flex items-center justify-center shadow-xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-pink-800 mb-2">Welcome Back!</h1>
              <p className="text-pink-600">Sign in to continue your chat experience</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-red-700 text-sm font-medium">
                    {error === "OAuthSignin" && "Error occurred during sign-in. Please try again."}
                    {error === "OAuthCallback" && "Error occurred during authentication. Please try again."}
                    {error === "OAuthCreateAccount" && "Could not create account. Please try again."}
                    {error === "EmailCreateAccount" && "Could not create account. Please try again."}
                    {error === "Callback" && "Error occurred during sign-in. Please try again."}
                    {error === "OAuthAccountNotLinked" && "Account already exists with different provider."}
                    {error === "EmailSignin" && "Check your email for sign-in link."}
                    {error === "CredentialsSignin" && "Invalid credentials. Please try again."}
                    {error === "SessionRequired" && "Please sign in to access this page."}
                    {!["OAuthSignin", "OAuthCallback", "OAuthCreateAccount", "EmailCreateAccount", "Callback", "OAuthAccountNotLinked", "EmailSignin", "CredentialsSignin", "SessionRequired"].includes(error) && "An error occurred. Please try again."}
                  </p>
                </div>
              </div>
            )}

            {/* Provider Buttons */}
            <div className="space-y-4">
              {providers && Object.values(providers).map((provider) => {
                if (provider.name === "Email") return null; 
                
                return (
                  <button
                    key={provider.name}
                    onClick={() => handleSignIn(provider.id)}
                    className="w-full flex items-center justify-center gap-3 p-4 border-2 border-pink-200 rounded-xl bg-white/80 hover:bg-white hover:border-pink-300 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  >
                    {/* Provider Icons */}
                    {provider.name === "Google" && (
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    )}
                    
                    {provider.name === "GitHub" && (
                      <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    )}
                    
                    <span className="font-semibold text-gray-700 group-hover:text-gray-900">
                      Continue with {provider.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 h-px bg-pink-200"></div>
              <span className="px-4 text-sm text-pink-600 font-medium">Or</span>
              <div className="flex-1 h-px bg-pink-200"></div>
            </div>

            {/* Guest Option */}
        
            <Link
              href="/chat?guest=true"
              className="w-full btn-pink-secondary flex items-center justify-center gap-2 py-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Continue as Guest (10 messages)
            </Link>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-pink-600">
              By signing in, you agree to our{" "}
              <Link href="/terms" className="text-pink-700 hover:text-pink-800 font-medium underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-pink-700 hover:text-pink-800 font-medium underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}