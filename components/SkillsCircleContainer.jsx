export default function SkillsCircleContainer({ children, size }) {
    return (
      <div
      className="
        relative
        rounded-full
        overflow-visible
        mx-auto
        box-content"
        style={{
          width: size,
          height: size,
          animation: "rotate 30s linear infinite",
          transformOrigin: "50% 50%",
        }}
      >
        <style>{`
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
        {children}
      </div>
    );
  }
  