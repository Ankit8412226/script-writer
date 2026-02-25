# SambaScript - AI Video Script Generator

A modern, production-ready AI video script generator built with React, Node.js, and SambaNova's SambaCloud API.

## Features

- **Modern UI**: Clean, responsive design with glassmorphism and smooth animations (Framer Motion).
- **AI Powered**: Leverages `Meta-Llama-3.3-70B-Instruct` via SambaNova for high-quality scripts.
- **Tone Selection**: Choose from various styles like Dark Comedy, Cinematic, Motivational, etc.
- **Duration Control**: Options for 30s, 60s, and 2-minute scripts.
- **Persistence**: User data and script requests are stored in MongoDB.
- **Rate Limiting**: Integrated backend rate limiting for production safety.

## Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Lucide Icons, Framer Motion.
- **Backend**: Node.js, Express, Mongoose.
- **AI Provider**: [SambaNova SambaCloud](https://cloud.sambanova.ai/).
- **Database**: MongoDB.

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (Running locally or on Atlas)
- SambaNova API Key

### Backend Setup

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file from the provided values:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/script_writer
   SAMBANOVA_API_KEY=your_api_key_here
   SAMBANOVA_BASE_URL=https://api.sambanova.ai/v1
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

## Deployment to Vercel

This project is configured for a seamless deployment to Vercel.

### Prerequisites

1.  **MongoDB Atlas**: Since the local MongoDB won't be accessible from Vercel, you must use a hosted database like [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database).
2.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com).

### Deployment Steps

1.  **Install Vercel CLI** (Optional but recommended):
    ```bash
    npm i -g vercel
    ```
2.  **Push to GitHub/GitLab/Bitbucket**: Connect your repository to Vercel for automatic deployments.
3.  **Environment Variables**: In the Vercel Dashboard, go to your Project Settings and add the following:
    - `MONGODB_URI`: Your production MongoDB connection string.
    - `SAMBANOVA_API_KEY`: Your SambaNova Cloud API key.
    - `SAMBANOVA_BASE_URL`: `https://api.sambanova.ai/v1`
4.  **Build Settings**:
    - **Framework Preset**: Vite (or Other)
    - **Root Directory**: Select the root of your project.
    - The included `vercel.json` will automatically route your traffic and build both the frontend and backend.

## Environment Variables

| Variable | Description |
| :--- | :--- |
| `PORT` | Backend port (Default: 5000) |
| `MONGODB_URI` | MongoDB Connection String |
| `SAMBANOVA_API_KEY` | API Key from SambaNova |
| `SAMBANOVA_BASE_URL` | SambaNova API Base URL |

## Folder Structure

```
.
├── client/              # React Frontend
│   ├── src/
│   │   ├── components/  # UI Components
│   │   ├── App.jsx      # Main Logic
│   │   └── index.css    # Tailwind & Custom Styles
│   └── vite.config.js
└── server/              # Node.js Backend
    ├── controllers/     # Route Handlers
    ├── models/          # Mongoose Schemas
    ├── routes/          # API Route Definitions
    ├── services/        # AI Service Integration
    └── index.js         # Entry Point
```

## License

MIT
