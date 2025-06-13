import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const chatRouter = createTRPCRouter({
  // Get all chats for the current user
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.chat.findMany({
      where: { userId: ctx.session.user.id },
      orderBy: { updatedAt: "desc" },
      include: {
        messages: {
          take: 1,
          orderBy: { createdAt: "desc" },
        },
      },
    });
  }),

  // Get a specific chat with all messages
  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.chat.findFirst({
        where: {
          id: input.id,
          userId: ctx.session.user.id,
        },
        include: {
          messages: {
            orderBy: { createdAt: "asc" },
            include: {
              attachments: true,
            },
          },
        },
      });
    }),

  // Create a new chat
  create: protectedProcedure
    .input(z.object({ title: z.string().min(1) }))
    .mutation(({ ctx, input }) => {
      return ctx.db.chat.create({
        data: {
          title: input.title,
          userId: ctx.session.user.id,
        },
      });
    }),

  // Update chat title
  updateTitle: protectedProcedure
    .input(z.object({ id: z.string(), title: z.string().min(1) }))
    .mutation(({ ctx, input }) => {
      return ctx.db.chat.update({
        where: {
          id: input.id,
          userId: ctx.session.user.id,
        },
        data: {
          title: input.title,
        },
      });
    }),

  // Delete a chat
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.chat.delete({
        where: {
          id: input.id,
          userId: ctx.session.user.id,
        },
      });
    }),

  // Add a message to a chat
  addMessage: protectedProcedure
    .input(
      z.object({
        chatId: z.string(),
        content: z.string().min(1),
        role: z.enum(["USER", "ASSISTANT", "SYSTEM"]),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.message.create({
        data: {
          content: input.content,
          role: input.role,
          chatId: input.chatId,
          userId: ctx.session.user.id,
        },
        include: {
          attachments: true,
        },
      });
    }),

  // Get messages for a chat
  getMessages: protectedProcedure
    .input(z.object({ chatId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.message.findMany({
        where: {
          chatId: input.chatId,
          chat: {
            userId: ctx.session.user.id,
          },
        },
        orderBy: { createdAt: "asc" },
        include: {
          attachments: true,
        },
      });
    }),
});