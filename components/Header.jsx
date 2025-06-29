'use client';

import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from '/components/Navbar.jsx';
import HamburgerMenu from '/components/HamburgerMenu.jsx';

export default function Header({ menuOpen, setMenuOpen, showLogo }) {
  const [scrolled, setScrolled] = useState(false);
  const isSmallScreen = window.innerWidth < 1280;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 500);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [theme, setTheme] = useState(() => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") || "dark";
  }
  return "dark";
});

useEffect(() => {
  document.body.classList.toggle("light-theme", theme === "light");
  localStorage.setItem("theme", theme);
}, [theme]);


    const [language, setLanguage] = useState(() => {

    if (typeof window !== "undefined") {
        return localStorage.getItem("language") || "eng";
    }
    return "eng";
});

 useEffect(() => {
    document.documentElement.className = language;
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <>
      <div
        className={`
          fixed flex justify-center items-center px-2 box-border overflow-hidden z-[98]
          transition-all duration-600 ease-in-out
          ${scrolled ? 'xl:bg-transparent bg-[var(--base-03)] xl:shadow-none shadow-[0_0_5px_2px_rgba(0,0,0,0.5)] xl:backdrop-blur-none backdrop-blur-5xl top-[10px] left-[10px] w-[calc(100vw-20px)] h-[50px] xl:h-[60px] rounded-[40px] xl:top-0 xl:left-0 xl:w-screen xl:rounded-none'
                    : 'top-0 left-0 w-screen h-[80px] rounded-none'}
        `}
        style={{
          // fallback for backdrop-filter in some browsers
          backdropFilter: scrolled && isSmallScreen ? 'blur(100px)' : 'none',
        }}
      >
        <motion.div
          layoutId="logo-name"
          className="flex justify-center items-center whitespace-nowrap text-[10px] lowercase font-space font-bold h-full"
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
        <Navbar onToggle={() => setMenuOpen(!menuOpen)} scrolled={scrolled} theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage}/>
      </div>

    
<AnimatePresence>
  {menuOpen && <HamburgerMenu onClose={() => setMenuOpen(false)} theme={theme} setTheme={setTheme}  language={language} setLanguage={setLanguage}/>}
</AnimatePresence>
    </>
  );
}
