// API Base URL configuration
// Uses environment variable in production, defaults to the live backend in prod and localhost in dev

const API_BASE =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD ? "https://tiesdao-websitexr.vercel.app" : "http://localhost:5000");

export default API_BASE;
