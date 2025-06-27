import { IoLanguageSharp } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function SwitchLanguageBtn() {
    const [language, setLanguage] = useState(() => {

    if (typeof window !== "undefined") {
        return localStorage.getItem("language") || "eng";
    }
    return "eng";
});

 useEffect(() => {
    document.documentElement.className = language;
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "eng" ? "spa" : "eng"));
  };

    return (
    <button onClick={toggleLanguage} aria-label="Switch Language">
      <IoLanguageSharp />
    </button>
    )
}