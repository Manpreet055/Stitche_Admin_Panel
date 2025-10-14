import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme === "dark");

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div
      onClick={() => setTheme((prev) => !prev)}
      className="cursor-pointer flex gap-2 items-center"
    >
      {theme ? (
        <>
          <Sun className="w-4 h-4" /> Light Mode
        </>
      ) : (
        <>
          <Moon className="w-4 h-4" /> Dark Mode
        </>
      )}
    </div>
  );
};

export default ThemeToggle;
