import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

function readStoredUser() {
  if (typeof window === "undefined") return null;
  try {
    if (!window.localStorage.getItem("token")) return null;
    const raw = window.localStorage.getItem("ties-user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser);
  const [loading] = useState(false);

  useEffect(() => {
    try {
      if (user && window.localStorage.getItem("token")) {
        window.localStorage.setItem("ties-user", JSON.stringify(user));
      } else {
        window.localStorage.removeItem("ties-user");
      }
    } catch {
      // Authentication state remains usable for the current page session.
    }
  }, [user]);

  useEffect(() => {
    const syncFromStorage = () => setUser(readStoredUser());
    window.addEventListener("storage", syncFromStorage);
    return () => window.removeEventListener("storage", syncFromStorage);
  }, []);

  const value = useMemo(() => ({ user, setUser, loading }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside an AuthProvider");
  return context;
}

export default AuthContext;
