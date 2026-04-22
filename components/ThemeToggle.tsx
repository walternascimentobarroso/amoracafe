"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const storageKey = "amoracafe-theme";

function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      applyTheme(savedTheme);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme: Theme = prefersDark ? "dark" : "light";
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold text-zinc-700 shadow-sm backdrop-blur-md transition hover:bg-white/30 dark:border-white/20 dark:bg-zinc-900/40 dark:text-zinc-100 dark:hover:bg-zinc-800/60"
      aria-label="Alternar tema"
    >
      {theme === "light" ? "Dark mode" : "White mode"}
    </button>
  );
}
