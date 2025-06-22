import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Project from "./Project";
import projectsData from "../data/projects.json";

function AnimatedProject({ project }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          setVisible(true);
        } else {
          controls.start("hidden");
          setVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="w-full"
    >
      <Project
        href={project.href}
        image={project.image}
        title={project.title}
        desc={project.desc}
      />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div
      id="projects"
      className="
        h-auto
        box-border 
        p-2.5 
        gap-3
        w-full
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        xl:px-30
        "
    >
      {projectsData.map((project, i) => (
        <AnimatedProject key={i} project={project} />
      ))}
    </div>
  );
}
