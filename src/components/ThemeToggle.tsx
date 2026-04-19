"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-6 left-6 w-12 h-12 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 animate-pulse" />
    );
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="fixed top-6 left-6 z-[60] w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg hover:scale-110 transition-all duration-200 group"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 text-yellow-500 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 text-blue-400 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
