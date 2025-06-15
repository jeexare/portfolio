'use client';

import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from '/components/Navbar.jsx';
import HamburgerMenu from '/components/HamburgerMenu.jsx';

export default function Header({ menuOpen, setMenuOpen, showLogo }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 500);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div
        className={`
          fixed flex justify-center items-center px-2 box-border overflow-hidden z-[98]
          transition-all duration-600 ease-in-out
          ${scrolled ? 'bg-white bg-opacity-50 shadow-[0_0_5px_2px_rgba(0,0,0,0.5)] backdrop-blur-lg top-[10px] left-[10px] w-[calc(100vw-20px)] h-[50px] rounded-[40px]'
                    : 'bg-[#6F2DBD] top-0 left-0 w-screen h-[80px] rounded-none'}
          text-white
        `}
        style={{
          // fallback for backdrop-filter in some browsers
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}
      >
        <motion.div
          layoutId="logo-name"
          className="flex justify-center items-center whitespace-nowrap text-[10px] lowercase font-sans font-bold h-full"
          style={{
            width: 'fit-content',
            transform: showLogo
              ? 'scale(1)'
              : 'scale(1.4) translateY(80px) translateX(10px)',
            transition: 'all 0.8s ease',
            pointerEvents: 'none',
          }}
        >
          Gabriela Rubio
        </motion.div>

        {/* <Logo /> */}
        <Navbar onToggle={() => setMenuOpen(!menuOpen)} scrolled={scrolled} />
      </div>

      <AnimatePresence>
        {menuOpen && <HamburgerMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
