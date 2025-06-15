import { skills } from "/data/skills";
import SkillBubble from "./SkillBubble";
import SkillsCircleContainer from "./SkillsCircleContainer";

export default function SkillsCircle() {
  const radius = 120;
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
            level={level}
          />
        );
      })}
    </SkillsCircleContainer>
  );
}
