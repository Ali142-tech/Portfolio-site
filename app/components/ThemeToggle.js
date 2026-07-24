"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

function getPreferredTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch (_) {}
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
}

export function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (_) {}
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const next = getPreferredTheme();
    applyTheme(next);
    setTheme(next);
    setReady(true);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      suppressHydrationWarning
    >
      {ready && theme === "dark" ? (
        <i className="fas fa-sun" aria-hidden />
      ) : (
        <i className="fas fa-moon" aria-hidden />
      )}
    </button>
  );
}
