import React, { useEffect, useState } from "react";

const ToggleTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      if (localStorage.theme === "light") return "light";
      if (localStorage.theme === "dark") return "dark";
      return "system";
    }
    return "system";
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(isDark ? "dark" : "light");
      localStorage.removeItem("theme");
    } else {
      root.classList.add(theme);
      localStorage.theme = theme;
    }
  }, [theme]);

  return (
    <div className="px-20">
      <button className="flex items-center gap-4 py-1 px-5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white shadow-md">
        {/* System */}
        <svg onClick={() => setTheme("system")} xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 cursor-pointer transition-opacity ${theme === "system" ? "opacity-100" : "opacity-40"}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 4h18v12H3V4zm0 14h18v2H3v-2z" />
        </svg>

        {/* Light */}
        <svg
          onClick={() => setTheme("light")}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 cursor-pointer transition-opacity ${theme === "light" ? "opacity-100" : "opacity-40"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 
              6.364l-1.414-1.414M6.05 6.05L4.636 
              4.636m12.728 0l-1.414 1.414M6.05 
              17.95l-1.414 1.414M12 7a5 5 0 
              100 10 5 5 0 000-10z"
          />
        </svg>

        {/* Dark */}
        <svg
          onClick={() => setTheme("dark")}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 cursor-pointer transition-opacity ${theme === "dark" ? "opacity-100" : "opacity-40"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      </button>
    </div>
  );
};

export default ToggleTheme;
