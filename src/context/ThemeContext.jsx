import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);

function getInitialTheme() {
  if (typeof window === "undefined") return false;
  try {
    const saved = window.localStorage.getItem("ties-theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
  } catch {
    // Storage may be disabled; use the browser preference below.
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    try {
      window.localStorage.setItem("ties-theme", dark ? "dark" : "light");
    } catch {
      // Theme still works for this session when storage is unavailable.
    }
  }, [dark]);

  const value = useMemo(
    () => ({
      dark,
      theme: dark ? "dark" : "light",
      setDark,
      toggleTheme: () => setDark((current) => !current),
    }),
    [dark]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }
  return context;
}

export default ThemeContext;
