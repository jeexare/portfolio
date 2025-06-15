'use client';
import { motion } from "framer-motion";

export default function Hero({ heroRef, showLogo }) {
  return (
    <div
      ref={heroRef}
      className="bg-[#6F2DBD] text-white font-sans uppercase h-[calc(100vh-100px)] flex flex-col items-center justify-center gap-10 relative z-10"
    >
      <h1>Hello. I'm</h1>

      <div className="w-[200px]">
        <img
          src="https://placehold.co/600x800/333/31343C"
          className="object-cover w-full h-full"
          alt="Hero image"
        />
      </div>

      <motion.h2
        layoutId="logo-name"
        className="absolute w-[calc(100vw-50px)] flex justify-between z-10"
        style={{
          transform: showLogo
            ? 'translateX(-50vw) translateY(-30vh) scale(0.2)'
            : 'translateX(0) translateY(0) scale(1)',
          transition: 'all .8s ease',
        }}
      >
        <span>Gabriela</span> <span>Rubio</span>
      </motion.h2>

      <p>I build digital worlds</p>
    </div>
  );
}
