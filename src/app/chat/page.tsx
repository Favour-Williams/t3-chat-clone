import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";
import ChatInterface from "~/components/ChatInterface";

export default async function ChatPage() {
  const session = await getServerAuthSession();

  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  return <ChatInterface />;
}