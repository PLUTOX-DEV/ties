import {
  Sun,
  Moon,
  LogIn,
  LayoutDashboard,
  LogOut,
  User,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import LogoImg from "../assets/tdao.jpg";

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "Event", href: "/#event" },
    { label: "Roadmap", href: "/#roadmap" },
    { label: "Community", href: "/#community" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  const shellClasses = dark
    ? "border-white/10 bg-slate-950/75 text-white"
    : "border-emerald-200/80 bg-white/80 text-slate-900";

  const itemClasses = dark
    ? "text-slate-200 hover:text-emerald-300"
    : "text-slate-600 hover:text-emerald-700";

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 z-50 w-full"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`mt-4 flex items-center justify-between rounded-full border px-4 py-3 shadow-[0_18px_45px_rgba(15,118,110,0.15)] backdrop-blur-xl sm:px-5 ${shellClasses}`}>
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              whileHover={{ rotate: 8, scale: 1.05 }}
              src={LogoImg}
              alt="TIES DAO"
              className="h-10 w-10 rounded-full border border-emerald-500/30 object-cover shadow-lg shadow-emerald-500/20"
            />
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-lime-300 bg-clip-text text-lg font-extrabold tracking-[0.12em] text-transparent">
              TIES DAO
            </span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-medium lg:flex">
            {navItems.map((item) =>
              item.href === "/" ? (
                <Link key={item.label} to="/" className={`${itemClasses} transition`}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className={`${itemClasses} transition`}>
                  {item.label}
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={toggleTheme}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${dark ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-emerald-200 bg-emerald-50 hover:bg-emerald-100"}`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-emerald-600" />}
            </motion.button>

            {!user ? (
              <Link to="/login" className="hidden lg:block">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-[0_18px_38px_rgba(16,185,129,0.35)]"
                >
                  <LogIn size={16} />
                  Login
                </motion.button>
              </Link>
            ) : (
              <div className="hidden items-center gap-2 lg:flex">
                <span className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold ${dark ? "border-white/10 bg-white/5 text-white" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`}>
                  <User size={15} className={dark ? "text-emerald-300" : "text-emerald-600"} />
                  {user.username || "Anonymous"}
                </span>

                <Link to="/dashboard">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2.5 text-sm font-bold text-emerald-300"
                  >
                    <LayoutDashboard size={16} />
                    Dashboard
                  </motion.button>
                </Link>

                <motion.button
                  onClick={handleLogout}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-rose-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-500/20"
                >
                  <LogOut size={16} />
                  Logout
                </motion.button>
              </div>
            )}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${dark ? "border-white/10 bg-white/5 text-white" : "border-emerald-200 bg-white text-slate-700"}`}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-4 mt-2 rounded-3xl border border-white/10 bg-slate-950/90 p-5 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.href === "/" ? (
                  <Link
                    key={item.label}
                    to="/"
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-semibold text-slate-100"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-semibold text-slate-200"
                  >
                    {item.label}
                  </a>
                )
              )}

              {user ? (
                <>
                  <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="text-base font-semibold text-emerald-300">
                    Dashboard
                  </Link>
                  <button onClick={handleLogout} className="text-left text-base font-semibold text-red-300">
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" onClick={() => setMobileOpen(false)} className="inline-flex items-center gap-2 text-base font-semibold text-emerald-300">
                  Login
                  <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
