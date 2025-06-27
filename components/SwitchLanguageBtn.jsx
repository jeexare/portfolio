import SwitchToggle from "./SwitchToggle";

export default function SwitchLanguageBtn({ language, setLanguage }) {
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "eng" ? "spa" : "eng"));
  };

    return (     
        <SwitchToggle title="languageToggle" toggle={toggleLanguage} main={language} leftText="Eng" rightText="Spa" mainStart="eng" mainSwitch="spa" />
    )
}