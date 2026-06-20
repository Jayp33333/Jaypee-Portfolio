import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="fixed right-4 top-4 z-50 flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white/80 text-gray-600 shadow-sm backdrop-blur transition-colors hover:bg-gray-50 sm:right-6 dark:border-white/10 dark:bg-white/[0.06] dark:text-gray-200 dark:hover:bg-white/[0.1]"
    >
      {theme === "dark" ? <FaSun size={15} /> : <FaMoon size={14} />}
    </button>
  );
}
