import { useState } from "react";

export default function SkillBubble({ x, y, angle, icon: IconComponent, color, skill, size }) {
  const [hovered, setHovered] = useState(false);

 const handleMouseEnter = (e) => {
      e.currentTarget.style.transform = `rotate(${-angle}rad) scale(1.5)`;
      e.currentTarget.style.zIndex = 10;
       setHovered(true);
    };
  
    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = `rotate(${-angle}rad) scale(1)`;
      e.currentTarget.style.zIndex = 1;
      setHovered(false);
    };
  
    return (
      <div
        key={skill}
        title={`${skill}`}
        className={`
          absolute
          rounded-full   
          flex
          justify-center
          items-center
          cursor-default
          transition-transform
          duration-300
          ease-in-out
          text-lg
          pointer-events-auto
          z-10
          w-12
          h-12
          md:w-15
          md:h-15
          ${hovered ? "bg-[var(--base)]" : "bg-[var(--soft-white)]"}
          `}
        style={{
      top: y,
      left: x,
      transform: `rotate(${-angle}rad)`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* <IconComponent size={size} color={color} /> */}
        <IconComponent size={size} color={hovered ? color : "var(--base)"} />
      </div>
    );
  }
  