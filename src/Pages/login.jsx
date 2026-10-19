import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API_BASE from "../config/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Invalid credentials");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError("Server error. Try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07130d] text-white">
      {/* Background gradients - optimized for mobile */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.28),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(132,204,22,0.2),_transparent_28%)]" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-3 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-10">
        <div className="grid w-full overflow-hidden rounded-[24px] border border-emerald-400/20 bg-white/5 shadow-[0_25px_80px_rgba(16,185,129,0.15)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:rounded-[32px]">
          
          {/* Left Panel - Hidden on small screens, visible on larger */}
          <div className="relative hidden flex-col justify-between bg-gradient-to-br from-emerald-900 via-emerald-800 to-lime-700 p-5 sm:p-7 lg:flex lg:p-12">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/25">
                  <ShieldCheck className="h-6 w-6 text-emerald-100" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-100/80">TIE DAO</p>
                  <p className="text-lg font-semibold text-white">Member portal</p>
                </div>
              </div>

              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-100">
                  <Sparkles className="h-3.5 w-3.5" /> secure login
                </span>

                <h1 className="max-w-md text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Welcome back to the TIE DAO network.
                </h1>

                <p className="max-w-md text-sm text-emerald-50/80 sm:text-base">
                  Access your dashboard, referral rewards, leaderboards, quizzes, and community tools in one secure place.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-3 sm:mt-10">
              {[
                { icon: ShieldCheck, text: "Protected member access" },
                { icon: Users, text: "Community and referral tracking" },
                { icon: Sparkles, text: "Rewards, quizzes and dashboards" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 px-3 py-2.5 text-sm text-white/90 sm:px-4 sm:py-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-300/15 text-emerald-100">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Login Form */}
          <div className="flex items-center justify-center bg-slate-950/90 p-4 sm:p-6 lg:p-10">
            <div className="w-full max-w-md">
              {/* Mobile Header - Only visible on small screens */}
              <div className="mb-6 flex flex-col items-center text-center lg:hidden">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 ring-1 ring-emerald-500/30">
                    <ShieldCheck className="h-5 w-5 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-emerald-300/80">TIE DAO</p>
                    <p className="text-xs font-semibold text-white">Member portal</p>
                  </div>
                </div>
                <h2 className="text-xl font-black text-white sm:text-2xl">Welcome Back</h2>
                <p className="mt-1 text-xs text-emerald-300/70">Sign in to continue</p>
              </div>

              {/* Desktop Header */}
              <div className="mb-6 hidden text-center sm:mb-8 lg:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-300">member login</p>
                <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">Sign in</h2>
              </div>

              <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
                    <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-300" />
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 sm:left-4 top-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl sm:rounded-2xl border border-slate-700 bg-slate-900/80 py-2.5 sm:py-3 pl-9 sm:pl-11 pr-3 sm:pr-4 text-sm sm:text-base text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
                    <Lock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-300" />
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 sm:left-4 top-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl sm:rounded-2xl border border-slate-700 bg-slate-900/80 py-2.5 sm:py-3 pl-9 sm:pl-11 pr-10 sm:pr-12 text-sm sm:text-base text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-100"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" /> : <Eye className="h-4 w-4 sm:h-5 sm:w-5" />}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="rounded-xl sm:rounded-2xl border border-red-500/40 bg-red-500/10 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-red-100">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 px-4 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-slate-950 shadow-[0_20px_40px_rgba(74,222,128,0.35)] transition hover:translate-y-[-1px] hover:shadow-[0_25px_50px_rgba(74,222,128,0.4)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" /> : "Sign in"}
                  {!loading && <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
                </button>
              </form>

              <div className="mt-5 sm:mt-6 space-y-2 sm:space-y-3 text-center text-xs sm:text-sm text-slate-300">
                <p>
                  Need an account?{" "}
                  <Link to="/register" className="font-semibold text-emerald-300 transition hover:text-emerald-200">
                    Create one
                  </Link>
                </p>
                <p>
                  <Link to="/forgot-password" className="font-semibold text-emerald-300 transition hover:text-emerald-200">
                    Forgot password?
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}