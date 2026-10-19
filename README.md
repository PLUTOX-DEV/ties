# TIES DAO — refreshed edition

A refreshed, responsive version of the TIES DAO community website, based on the existing [TIES-DAO/Tiesdao-website](https://github.com/TIES-DAO/Tiesdao-website) codebase.

## Stack

- **Frontend:** React 18, Vite, React Router, Tailwind CSS, Framer Motion and Lucide icons.
- **Backend:** Node.js, Express and Mongoose/MongoDB.
- **Features:** public landing page, education and events, account registration/login, password recovery, protected dashboard, quizzes, referral tracking, leaderboards, feedback/contact endpoints and admin dashboard.

## Requirements

- Node.js 20 or newer
- npm
- MongoDB connection string for backend-backed features

## Run locally

### 1. Frontend

From the repository root:

```bash
npm ci
npm run dev
```

Vite serves the frontend at `http://localhost:5173` by default.

### 2. Backend

In a second terminal:

**Windows CMD**
```bat
cd server
copy .env.example .env
npm ci
npm start
```

**macOS/Linux**
```bash
cd server
cp .env.example .env
npm ci
npm start
```

Edit `server/.env` and set a real `MONGO_URI`, a long random `JWT_SECRET`, and email credentials if email features are enabled. The sample values are placeholders. The backend defaults to port 5000; the frontend API URL defaults to `http://localhost:5000` during development.

## Environment variables

- `MONGO_URI` — MongoDB connection string.
- `JWT_SECRET` — private signing secret for login tokens.
- `PORT` — backend port (defaults to 5000).
- `FRONTEND_URL` — exact deployed frontend origin used for CORS.
- `EMAIL_USER`, `EMAIL_PASS`, `RECEIVE_EMAIL` — mail settings for contact/password flows.
- `VITE_API_URL` — optional frontend API base URL; configure it in the frontend environment when deploying.

Never commit `.env` files or production secrets. Configure environment variables in the hosting provider instead.

## Build and checks

```bash
npm ci
npm run build
cd server
npm ci
node --check api/index.js
```

A GitHub Actions workflow also builds the frontend and syntax-checks backend JavaScript on pushes and pull requests.

## Deployment notes

- Deploy the frontend as a Vite static site; publish the `dist` directory.
- Deploy the backend as a Node.js service or use the included Vercel API entry point.
- Set `VITE_API_URL` to the deployed backend URL and set `FRONTEND_URL` to the exact frontend origin.
- Configure MongoDB network access and credentials securely before enabling production traffic.

## Branch

The refresh is being developed on `tiesdao-full-overhaul`. It intentionally keeps the existing React/Express/MongoDB architecture rather than replacing the backend with an unrelated stack.
