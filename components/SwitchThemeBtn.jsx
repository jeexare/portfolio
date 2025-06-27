import SwitchToggle from "./SwitchToggle";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function SwitchThemeBtn({ theme, setTheme }) {
 const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (     
          <SwitchToggle title="themeToggle" toggle={toggleTheme} main={theme} leftText={ <IoMoon />} rightText={ <IoSunny /> } mainStart="dark" mainSwitch="light" />
      )
}
