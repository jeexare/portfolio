import { motion } from "framer-motion";

export default function SwitchToggle({ title, toggle, main, leftText, rightText, mainStart, mainSwitch }) {
    return (
         <label
          htmlFor={title}
          className="relative items-center cursor-pointer select-none"
          style={{ userSelect: "none" }}
        >
          <input
            type="checkbox"
            id={title}
            className="sr-only"
            checked={main === `${mainStart}`}
            onChange={toggle}
          />
          <div
            className={`xl:w-8 w-40 h-8 rounded-full relative
              bg-[var(--accent2)] transition-colors duration-300 xl:justify-center xl:items-center`}
          >
            {/* Text on left */}
            <span
              className={`absolute left-2 top-1/2 transform -translate-y-1/2
                text-sm font-semibold select-none 
                 xl:w-full xl:h-full xl:left-0 xl:top-0 xl:translate-y-0 flex
                justify-center items-center
                xl:text-xs
                ${main === `${mainStart}` ? "text-[var(--accent2)]" : "text-[var(--accent)]"}
                `}
            >
              {leftText}
            </span>
    
            {/* Text on right */}
            <span
              className={`absolute right-2 top-1/2 transform -translate-y-1/2
                text-sm font-semibold select-none xl:w-full xl:h-full xl:right-0 xl:top-0 xl:translate-y-0 flex
                justify-center items-center
                xl:text-xs
                ${main === `${mainSwitch}` ? "text-[var(--accent2)] xl:hidden" : "text-[var(--accent)]"}`}
            >
              {rightText}
            </span>
    
            {/* Toggle knob with Framer Motion */}
            <motion.div
              className="xl:w-0 absolute top-1 left-1 w-10 h-6 bg-[var(--accent)] rounded-full shadow-md"
              animate={{ x: main ===  `${mainSwitch}` ? 110 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </label>
    );
}