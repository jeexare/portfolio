"use client";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import Navigation from "./Navigation";

export default function HamburgerMenu({ onClose }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="
        fixed top-0 right-0 h-screen
        w-[calc(100vw-100px)]
        bg-[#101010] text-white
        flex flex-col justify-start items-end
        box-border
        p-[30px_50px_50px_10px]
        gap-5
        text-2xl
        md:text-5xl
        md:gap-10
        font-sans
        z-[999]
        shadow-[0_0_10px_1px_black]
      "
    >
      <button
        onClick={onClose}
        className="
          self-start
          bg-transparent border-none
          text-3xl

          text-white
          cursor-pointer
        "
        aria-label="Close menu"
      >
        <AiOutlineClose />
      </button>

      <Navigation />
    </motion.div>
  );
}
