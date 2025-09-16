"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../components/ThemeContext";
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl button-bg hover:button-bg-hover transition-all ease-in-out duration-75"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-gray-800" />
      )}
    </button>
  );
}