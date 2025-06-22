import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const text = [
  { content: "I’m", className: "" },
  { content: "a", className: "" },
  { content: "Utah-based", className: "" },
  { content: "software", className: "pop-grad font-semibold font-space" },
  { content: "developer", className: "pop-grad font-semibold font-space" },
  { content: "and", className: "" },
  { content: "designer", className: "cool-grad font-semibold font-cookie text-8xl md:text-7xl" },
  { content: "who", className: "" },
  { content: "builds", className: "" },
  { content: "interactive", className: "" },
  { content: "web", className: "" },
  { content: "experiences.", className: "" },
  { content: "I", className: "" },
  { content: "love", className: "" },
  { content: "working", className: "" },
  { content: "on", className: "" },
  { content: "projects", className: "" },
  { content: "that", className: "" },
  { content: "challenge", className: "" },
  { content: "and", className: "" },
  { content: "inspire", className: "" },
  { content: "me.", className: "" },
];

export default function About() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
        else controls.start("hidden");
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="about"
      ref={ref}
      className="font-sans min-h-screen box-border p-[40px_40px_40px_40px] md:p-[150px_80px_150px_40px] flex items-center text-5xl md:text-6xl font-space break-words flex-wrap"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {text.map(({ content, className }, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className={className}
            style={{
              whiteSpace: "nowrap",
              display: "inline-flex",
              marginRight: "0.25em",
            }}
          >
            {[...content].map((char, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
