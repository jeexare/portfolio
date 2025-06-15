import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = ["about", "projects", "skills", "contact"];

export default function Navigation() {
    const [activeSection, setActiveSection] = useState("");

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
          {sections.map((section) => (
        <motion.a
          key={section}
          href={`#${section}`}
        animate={{
            paddingRight: activeSection === section ? "100px" : "20px",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="no-underline w-full border-r border-solid text-right          "
          style={{
            color: activeSection === section ? "#B9FAF8" : "white",
            borderRightColor: activeSection === section ? "white" : "#B9FAF8",
          }}
          whileHover={{ scale: 1.03 }}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </motion.a>
      ))}

      <button>Toggle Dark/Light</button>
      <button>Toggle English/Spanish</button>
          </>
    );
}