export default function SkillBubble({ x, y, angle, icon: IconComponent, color, skill, level }) {
 const handleMouseEnter = (e) => {
      e.currentTarget.style.transform = `rotate(${-angle}rad) scale(1.5)`;
      e.currentTarget.style.zIndex = 10;
    };
  
    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = `rotate(${-angle}rad) scale(1)`;
      e.currentTarget.style.zIndex = 1;
    };
  
    return (
      <div
        key={skill}
        title={`${skill} — ${level}% proficiency`}
        className="
          absolute
          rounded-full
          bg-[#101010]
          flex
          justify-center
          items-center
          cursor-default
          transition-transform
          duration-300
          ease-in-out
          text-white
          text-[36px]
          pointer-events-auto
          z-10
          "
        style={{
      top: y,
      left: x,
      width: 50,
      height: 50,
      transform: `rotate(${-angle}rad)`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <IconComponent size={36} color={color} />
      </div>
    );
  }
  