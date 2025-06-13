// app/layout.tsx
import "~/app/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "T3 Chat App",
  description: "A modern chat application built with T3 Stack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Providers session={session} cookies={cookies().toString()}>
          {children}
        </Providers>
      </body>
    </html>
  );
}