"use client";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import Navigation from "./Navigation";

export default function HamburgerMenu({ onClose, theme, setTheme, language, setLanguage }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="
      bg-[var(--base)]
        fixed top-0 right-0 h-screen
        w-[calc(100vw-100px)]
        flex flex-col justify-start items-end
        box-border
        p-[30px_50px_50px_10px]
        gap-5
        text-2xl
        md:text-5xl
        md:gap-10
        font-sans
        z-[999]
     
      "
    >
      <button
        onClick={onClose}
        className="
          self-start
          bg-transparent border-none
          text-3xl
          cursor-pointer
          text-[var(--cool-gray)]
        "
        aria-label="Close menu"
      >
        <AiOutlineClose />
      </button>

     <Navigation theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} />

    </motion.div>
  );
}
