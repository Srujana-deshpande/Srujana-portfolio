"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative p-2.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:border-red-600 dark:hover:border-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/50"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex items-center justify-center"
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4 text-amber-400 hover:text-amber-300" />
        ) : (
          <Moon className="w-4 h-4 text-neutral-700 hover:text-red-600" />
        )}
      </motion.div>
    </button>
  );
}
