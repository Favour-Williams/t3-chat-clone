# T3 Chat Clone - AI-Powered Chat Application 🚀

## Overview ✨

T3 Chat is a feature-rich chat application that allows users to interact with various large language models (LLMs). Users can sign in with Google, GitHub, or as a guest (with limited functionality), customize their theme, and chat with AI assistants.

Key features include:
- 🔑 Multiple authentication options (Google, GitHub, Guest)
- 🎨 Theme customization (Pink, White, Black, Grey)
- 🤖 Support for multiple LLM providers (OpenRouter, Groq)
- ⚡ Real-time streaming responses
- 📎 File attachments
- 📚 Chat history management

## Prerequisites ⚙️

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher) 🟢
- [npm](https://www.npmjs.com/) (v9 or higher) 📦
- [PostgreSQL](https://www.postgresql.org/) (or other Prisma-supported database) 🐘
- [Git](https://git-scm.com/) 🗂️

## Getting Started 🚀

### 1. Clone the repository

```bash
git clone https://github.com/your-username/t3-chat-clone.git
cd t3-chat-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables 🔒

Create a `.env` file or use the one given in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/t3chat?schema=public"

# Authentication
NEXTAUTH_SECRET="your-very-secure-secret"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# GitHub OAuth
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# LLM API
OPENROUTER_API_KEY="your-openrouter-api-key"
GROQ_API_KEY="your-groq-api-key"
```

### 4. Set up Prisma 🛠️

Initialize your database schema:

```bash
npx prisma generate
npm run db:push
npx prisma migrate dev --name init
```

### 5. Run the development server 💻

```bash
npm run dev
```

The application will be available at http://localhost:3000.

## Authentication 🔐

T3 Chat supports three authentication methods:

### 🔵 Google Authentication
1. Visit the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project and configure OAuth consent screen
3. Create credentials for a Web application
4. Add `http://localhost:3000/api/auth/callback/google` to authorized redirect URIs
5. Copy the Client ID and Client Secret to your `.env` file

### 🐙 GitHub Authentication
1. Visit [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set callback URL to `http://localhost:3000/api/auth/callback/github`
4. Copy the Client ID and Client Secret to your `.env` file

### 👤 Guest Authentication
No setup required. Guests can sign in with limited functionality (10 messages max).

## Features 🌟

### 💬 Chat Interface
- ✉️ Send messages to various LLMs
- ⚡ View real-time streaming responses
- ⏹️ Stop generation mid-response
- 📜 View chat history

### 🎨 Theme Customization
Choose from four themes:
1. **Pink** (default): Vibrant pink gradient theme 💖
2. **White**: Clean light theme ⚪
3. **Black**: Dark mode for comfortable night use ⚫
4. **Grey**: Professional grey theme 🌫️

### 🤖 Model Selection
Switch between different LLMs:
- OpenRouter models: Mistral-7B, DeepSeek-R1, Llama-4-Scout
- Groq models: Llama3-8B, Llama3-70B, Gemma2-9B

## Deployment 🚢

### ☁️ Vercel Deployment
1. Push your code to a GitHub repository
2. Create a new project on [Vercel](https://vercel.com/)
3. Import your GitHub repository
4. Add all environment variables from your `.env` file
5. Deploy!

### 🗃️ Database Setup
For production, use a managed PostgreSQL database:
- [Neon](https://neon.tech/) ✨

## Built With 🛠️

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Static typing
- [Prisma](https://www.prisma.io/) - ORM for database access
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [tRPC](https://trpc.io/) - End-to-end typesafe APIs
- [Lucide Icons](https://lucide.dev/) - Beautiful icons
- [OpenRouter](https://openrouter.ai/) - LLM API
- [Groq](https://groq.com/) - Fast LLM inference

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. Fork the repository 🍴
2. Create a new branch (`git checkout -b feature/your-feature`) 🌿
3. Commit your changes (`git commit -am 'Add some feature'`) 💾
4. Push to the branch (`git push origin feature/your-feature`) 🚀
5. Open a pull request 📬

## Support ❤️

For support or questions, please open an issue on GitHub.

---
MIT License

---
**Happy chatting!** 💬✨🤖
