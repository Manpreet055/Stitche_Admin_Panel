import { useState, useEffect } from "react";
import Dropdown from "../Sidebar/Dropdown";
import { Sun, Moon, MonitorCog } from "lucide-react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("themepreference") || "dark"
  );
  useEffect(() => {
    document.body.classList.remove("dark", "default-theme", "light");
    document.body.classList.add(theme);
    localStorage.setItem("themepreference", theme);
  }, [theme]);

  return (
    <div className="w-full flex justify-center">
      <Dropdown buttonName="Set Dark/Light Mode" textSize="text-xl font-medium">
       <div className="flex flex-col justify-evenly w-full h-48 rounded-2xl px-4 text-xl">
         <button className="flex gap-4" onClick={() => setTheme("default-theme")}>
          <MonitorCog />
          System Preference
        </button>

        <button className="flex gap-4" onClick={() => setTheme("dark")}>
          <Moon />
          Dark
        </button>

        <button className="flex gap-4" onClick={() => setTheme("light")}>
          <Sun />
          Light
        </button>
       </div>
      </Dropdown>
    </div>
  );
};

export default DarkMode;
