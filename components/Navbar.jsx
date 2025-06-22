import Navigation from "./Navigation";
import { TbMenuDeep } from "react-icons/tb";
import { motion } from "framer-motion";

export default function Navbar({ onToggle, scrolled }) {


  return (
    <nav
      className="w-full h-full flex justify-end items-center gap-[5px] font-sans text-[12px] xl:justify-center"
    >
      <div className="hidden
      xl:flex
        xl:items-center
        xl:w-full
        xl:justify-between
        xl:h-full">
        <Navigation scrolled={scrolled}/>
      </div>

      <div className="block xl:hidden">
        <motion.button
          onClick={onToggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-full border-0 flex items-center justify-center w-[50px] h-[50px] text-[15px]"
          style={{
            background: scrolled ? `transparent` : `var(--accent2)`,
            backdropFilter: scrolled ? `none` : `blur(10px)`,
          }}
        >
          <TbMenuDeep />
        </motion.button>
      </div>
    </nav>
  );
}
