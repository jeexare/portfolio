import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";

export default function CTAButton() {
  return (
    <motion.a
    href="#about"
     aria-label="Go down"
      className="w-12 h-12 block mx-auto relative cursor-pointer ext-gray-500 bg-[var(--accent)] text-[var(--base)]  rounded-full flex items-center justify-center -top-20 md:top-1 xl:-top-10"
      animate={{
        y: [0, -10, 0], // move up 10px and back down
        rotate: [0, 5, 0, -5, 0], // slight rotation to wobble side to side
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.1, // grow a bit on hover
        rotate: 0, // stop wobble rotation on hover
        y: -5, // hold slightly up on hover
        transition: { duration: 0.3 },
      }}
      whileTap={{
        scale: 0.95, // shrink slightly on tap
        rotate: 0, // no rotation while tapping
        y: 0, // reset vertical position on tap
        transition: { duration: 0.1 },
      }}
    >
      <FaAngleDown />
    </motion.a>
  );
}
