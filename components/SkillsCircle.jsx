import { useEffect, useState } from "react";
import { skills } from "/data/skills";
import SkillBubble from "./SkillBubble";
import SkillsCircleContainer from "./SkillsCircleContainer";

export default function SkillsCircle() {
  const [radius, setRadius] = useState(getRadiusFromVW());
  const [size, setSize] = useState(getSizeFromVW());

  function getRadiusFromVW() {
    const vw = window.innerWidth;
    return vw * .25; // for example, 15% of viewport width
  }

  function getSizeFromVW() {
    const vw = window.innerWidth;
    return Math.max(24, Math.min(80, vw * 0.03)); // for example, 15% of viewport width
  }

  useEffect(() => {
    const handleResize = () => {
      setRadius(getRadiusFromVW());
      setSize(getSizeFromVW());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

console.log(radius);
  const center = radius;
  const bubbleSize = 50;
  const padding = bubbleSize / 2;
  const containerSize = radius * 2 + padding * 2;

  return (
    <SkillsCircleContainer size={containerSize}>
      {skills.map(({ skill, level, icon, color }, i) => {
        const angle = (2 * Math.PI * i) / skills.length;
        const x = padding + center + radius * Math.cos(angle) - bubbleSize / 2;
        const y = padding + center + radius * Math.sin(angle) - bubbleSize / 2;

        return (
          <SkillBubble
            key={skill}
            x={x}
            y={y}
            angle={angle}
            icon={icon}
            color={color}
            skill={skill}
            size={size}
          />
        );
      })}
    </SkillsCircleContainer>
  );
}
