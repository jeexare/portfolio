import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoSunny, IoLanguageSharp } from "react-icons/io5";

const sections = ["about", "projects", "skills", "contact"];

export default function Navigation({ scrolled }) {

    const [activeSection, setActiveSection] = useState("");
    const isSmallScreen = window.innerWidth < 1280;

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

    return (
      <>
        <div className="xl:flex-1 xl:flex xl:justify-center xl:h-full xl:items-center">
          <div className={`xl:flex xl:gap-2 text-right xl:h-4/5 xl:items-center xl:px-10 xl:rounded-3xl
          ${scrolled ? 'xl:bg-[rgb(0,0,0,.3)] xl:shadow-[0_0_5px_2px_rgba(0,0,0,0.5)] xl:backdrop-blur-5xl'
          : ''}`}
          style={{
            backdropFilter: scrolled && !isSmallScreen ? 'blur(100px)' : 'none',
          }}>

{sections.map((section) => (
            <div key={section} className="xl:relative">
              {!isSmallScreen && activeSection === section && (
                <motion.div
                  layoutId="bubble"
                  className="absolute inset-0 bg-white/20 rounded-full z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <motion.a
                href={`#${section}`}
                animate={{
                  paddingRight: isSmallScreen && activeSection === section ? "100px" : "20px",
                }}
                className={`
                  xl:relative xl:z-10 no-underline w-full text-right 
                  xl:text-xl xl:px-5 xl:py-2 xl:rounded-full xl:text-[var(--text)]
                  border-r border-solid xl:border-r-0
                  font-space
                  ${isSmallScreen && activeSection === section ?"text-[var(--text)] border-r-[var(--text)]" : "text-[var(--cool-gray)] border-r-[var(--cool-gray)]"}
                `}
                whileHover={{ scale: 1.03 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            </div>
          ))}

      </div></div>

      <div className="">
      <button><IoSunny /></button>
      <button><IoLanguageSharp /></button>
      </div>
      </>  
    );
}