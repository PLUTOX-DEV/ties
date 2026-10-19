# TIES DAO — refreshed edition

A modernized version of the TIES DAO website. Source project: https://github.com/TIES-DAO/Tiesdao-website

The frontend uses React and Vite. The backend lives in `server/` and exposes the existing authentication, dashboard, quiz, referral, feedback and admin APIs.

## Setup

1. Install frontend dependencies with `npm install`.
2. Copy `server/.env.example` to `server/.env` and configure the required secrets and database connection.
3. Install backend dependencies with `cd server && npm install`.
4. Start the backend and frontend using the scripts documented in their respective package files.

Never commit `.env` files or production credentials.