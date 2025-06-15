import Navigation from "./Navigation";
import { TbMenuDeep } from "react-icons/tb";
import { motion } from "framer-motion";

export default function Navbar({ onToggle, scrolled }) {
  console.log("Navbar received scrolled:", scrolled);

  return (
    <nav
      className="w-full h-full flex justify-end items-center gap-[5px] font-sans uppercase text-[12px]"
    >
      <div className="hidden">
        <Navigation />
      </div>

      <div className="block">
        <motion.button
          onClick={onToggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-full border-0 flex items-center justify-center w-[50px] h-[50px] text-[15px] text-black"
          style={{
            background: scrolled ? `transparent` : `rgb(255,255,255,.3)`,
            backdropFilter: scrolled ? `none` : `blur(10px)`,
          }}
        >
          <TbMenuDeep />
        </motion.button>
      </div>
    </nav>
  );
}
