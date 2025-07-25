# TypeFast ⚡

A modern, real-time typing speed test application that brings competitive typing to the next level. Built with Next.js and TypeScript, TypeFast offers an immersive multiplayer experience where you can race against friends, climb global leaderboards, and track your typing progress with detailed analytics.

![TypeFast Preview](preview.png)

## ✨ Features

### 🏃‍♂️ **Real-time Multiplayer Racing**
- **Live Typing Races**: Compete with friends and strangers in real-time typing competitions
- **Room System**: Create private rooms or join public races with custom settings
- **Live Chat**: Communicate with other players during races
- **Real-time Leaderboards**: See live rankings as you type

### 📊 **Comprehensive Analytics**
- **Detailed Statistics**: Track WPM, accuracy, and consistency over time
- **Performance Charts**: Visualize your typing progress with interactive graphs
- **Best Scores**: Keep track of your personal records across different modes
- **Recent Performance**: Monitor your latest typing sessions and improvements

### 🏆 **Competitive Features**
- **Global Leaderboard**: Compete with typists worldwide
- **Daily Rankings**: Fresh competition every day with daily leaderboards
- **User Profiles**: Showcase your typing achievements and statistics
- **Achievement System**: Unlock badges and milestones as you improve

### ⚙️ **Customization & Modes**
- **Multiple Typing Modes**: Time-based, word-based, and custom challenges
- **Difficulty Levels**: Choose from easy, medium, and hard text passages
- **Custom Settings**: Adjust race duration, word count, and other parameters
- **Theme Options**: Dark and light modes for comfortable typing

### 🎨 **User Experience**
- **Minimalist Design**: Distraction-free interface that enhances focus
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations**: Fluid transitions powered by Framer Motion
- **Real-time Feedback**: Instant visual feedback on typing speed and accuracy

## 🛠️ Tech Stack

### **Frontend**
- **[Next.js 14](https://nextjs.org/)** – React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** – Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** – Beautiful, accessible UI components
- **[Framer Motion](https://motion.dev/)** – Smooth animations and transitions
- **[Zustand](https://zustand-demo.pmnd.rs/)** – Lightweight state management

### **Backend & Database**
- **[Prisma](https://www.prisma.io/)** – Modern database ORM
- **[PostgreSQL](https://neon.tech/)** – Robust relational database
- **[Redis](https://redis.io/)** – In-memory data store for real-time features
- **[Auth.js](https://authjs.dev/)** – Complete authentication solution

### **Real-time & Communication**
- **[WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)** – Real-time multiplayer communication
- **[Socket.io](https://socket.io/)** – WebSocket library for real-time events
- **[Resend](https://resend.com/)** – Email delivery service

### **Deployment & DevOps**
- **[Docker](https://www.docker.com/)** – Containerization
- **[Docker Compose](https://docs.docker.com/compose/)** – Multi-container orchestration
- **[Vercel](https://vercel.com/)** – Frontend deployment platform

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn or npm
- PostgreSQL database
- Redis server

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/just-surviving/TypeFast.git
   cd TypeFast
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp ./apps/web/.env.example ./apps/web/.env
   cp ./apps/web/DB_prisma/.env.example ./apps/web/DB_prisma/.env
   ```

4. **Configure your environment**
   Edit the `.env` files with your database and Redis credentials:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/typefast"
   
   # Redis
   REDIS_URL="redis://localhost:6379"
   
   # Auth
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Email (optional)
   RESEND_API_KEY="your-resend-api-key"
   ```

5. **Set up the database**
   ```bash
   yarn db:setup
   # or
   npm run db:setup
   ```

6. **Start the development server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### 🐳 Docker Setup (Alternative)

If you prefer using Docker:

```bash
# Start all services with Docker Compose
docker-compose up -d

# The application will be available at http://localhost:3000
```

## 📁 Project Structure

```
TypeFast/
├── apps/
│   └── web/                    # Next.js application
│       ├── app/               # App Router pages
│       ├── components/        # React components
│       ├── lib/              # Utility functions
│       ├── hooks/            # Custom React hooks
│       ├── store/            # Zustand state management
│       ├── DB_prisma/        # Database schema and migrations
│       └── ui/               # Shadcn/ui components
├── docker/                   # Docker configurations
├── docker-compose.yml        # Multi-container setup
└── package.json             # Root package configuration
```

## 🎮 How to Play

1. **Solo Practice**: Start with individual typing tests to improve your speed and accuracy
2. **Create a Room**: Set up a private room and invite friends to join
3. **Join Public Races**: Participate in open races with other players
4. **Track Progress**: Monitor your performance through detailed statistics and charts
5. **Climb Rankings**: Compete on global and daily leaderboards

## 🔧 Available Scripts

```bash
# Development
yarn dev              # Start development server
yarn build            # Build for production
yarn start            # Start production server

# Database
yarn db:setup         # Set up database and run migrations
yarn db:reset         # Reset database
yarn db:seed          # Seed database with sample data

# Linting & Formatting
yarn lint             # Run ESLint
yarn lint:fix         # Fix ESLint issues
yarn format           # Format code with Prettier

# Testing
yarn test             # Run tests
yarn test:watch       # Run tests in watch mode
```

## 🌐 API Endpoints

- `GET /api/leaderboard` - Global leaderboard data
- `GET /api/stats` - Application statistics
- `POST /api/room` - Create a new room
- `GET /api/room/[code]` - Get room details
- `POST /api/auth/[...nextauth]` - Authentication endpoints

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `REDIS_URL` | Redis connection string | Yes |
| `NEXTAUTH_SECRET` | Secret for JWT signing | Yes |
| `NEXTAUTH_URL` | Application URL | Yes |
| `RESEND_API_KEY` | Email service API key | No |

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Docker
```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build individual containers
docker build -f docker/Dockerfile.web -t typefast-web .
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Framer Motion](https://motion.dev/) for smooth animations

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Join our community discussions

---

**Happy Typing! ⚡**
