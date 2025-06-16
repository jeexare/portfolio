import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoSunny, IoLanguageSharp } from "react-icons/io5";

const sections = ["about", "projects", "skills", "contact"];

export default function Navigation() {
    const [activeSection, setActiveSection] = useState("");
    const isSmallScreen = window.innerWidth < 1280;

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // section must be 60% visible to trigger
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
        <div className="xl:flex-1 xl:flex xl:justify-center">
          <div className="xl:flex xl:gap-2 text-right">
          {/* {sections.map((section) => (
        <motion.a
          key={section}
          href={`#${section}`}
        animate={{
            paddingRight: isSmallScreen && activeSection === section ? "100px" : "20px",
            paddingRight: !isSmallScreen === section ? "20px" : "",
            backgroundColor: !isSmallScreen && activeSection === section ? "rgb(255,255,255,.2)" : "transparent",
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className={`
              no-underline 
              w-full 
              border-r border-solid text-right xl:text-xl xl:border-r-0
              xl:px-5
              xl:py-2
              xl:rounded-full
              xl:text-black
              ${isSmallScreen && activeSection === section ?"text-[#B9FAF8] border-r-white" : "text-white border-r-[#B9FAF8]"}
              ${activeSection === section ? "xl:bg-[rgb(255,255,255,.2)]" : ""}
              `}
          whileHover={{ scale: 1.03 }}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </motion.a>
      ))} */}

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
                  xl:text-xl xl:px-5 xl:py-2 xl:rounded-full xl:text-black
                  border-r border-solid xl:border-r-0
                  ${isSmallScreen && activeSection === section ?"text-[#B9FAF8] border-r-white" : "text-white border-r-[#B9FAF8]"}
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