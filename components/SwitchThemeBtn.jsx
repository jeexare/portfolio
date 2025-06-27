import { IoSunny, IoMoon } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function SwitchThemeBtn() {
    const [theme, setTheme] = useState(() => {

    if (typeof window !== "undefined") {
        return localStorage.getItem("theme") || "dark";
    }
    return "dark";
});

 useEffect(() => {
    document.body.classList.toggle("light-theme", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

    return (
    <button onClick={toggleTheme} aria-label="Switch Theme">
      {theme === "dark" ? <IoSunny /> : <IoMoon />}
    </button>
    )
}