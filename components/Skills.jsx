import SkillsCircle from "./SkillsCircle";

export default function Skills() {
  return (
    <div
      id="skills"
      className="
        bg-black
        flex
        justify-center
        items-center"
      style={{
        height: `calc(100vh - 100px)`,
      }}
    >
      <SkillsCircle />
    </div>
  );
}
