import { postRouter } from "~/server/api/routers/post";
import { chatRouter } from "~/server/api/routers/chat";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  chat: chatRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;