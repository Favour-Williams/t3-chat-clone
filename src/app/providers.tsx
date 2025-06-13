// app/providers.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { TRPCReactProvider } from "~/trpc/react";
import { type Session } from "next-auth";

interface ProvidersProps {
  children: React.ReactNode;
  session?: Session | null;
  cookies: string;
}

export function Providers({ children, session, cookies }: ProvidersProps) {
  return (
    <TRPCReactProvider cookies={cookies}>
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
    </TRPCReactProvider>
  );
}