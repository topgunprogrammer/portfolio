import React, { useMemo } from "react";
import { getTechIcon, getTechColor } from "../../data/iconMapping";

const techWords = [
  "React",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "Kubernetes",
  "MongoDB",
  "TypeScript",
  "JavaScript",
  "Java",
  "C++",
  "GraphQL",
  "Redis",
  "Azure",
  "GCP",
  "PostgreSQL",
  "HTML5",
  "CSS3",
  "SASS",
  "Jest",
  "Express",
  "Flask",
  "TensorFlow",
  "PyTorch",
  "Spring",
  "GoLang",
  "Rust",
];

function getRandomizedIcons(count) {
  return Array.from({ length: count }).map((_, i) => {
    const angle = Math.random() * 2 * Math.PI;
    const distance = 40 + Math.random() * 60; // percent of viewport
    const endX = 50 + Math.cos(angle) * distance;
    const endY = 50 + Math.sin(angle) * distance;
    const rotate = Math.random() * 60 - 30;
    const delay = Math.random() * 3;
    const duration = 4 + Math.random() * 3;
    const word = techWords[Math.floor(Math.random() * techWords.length)];
    const color = getTechColor(word);
    const Icon = getTechIcon(word);
    return {
      endX,
      endY,
      rotate,
      delay,
      duration,
      word,
      color,
      Icon,
      key: `${word}-${i}`,
    };
  });
}

const AnimatedTechIcons = ({ count = 18, zIndex = 0 }) => {
  const animatedIcons = useMemo(() => getRandomizedIcons(count), [count]);
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex,
        overflow: "hidden",
      }}
    >
      {animatedIcons.map(
        ({ endX, endY, rotate, delay, duration, key, color, Icon }, idx) => (
          <span
            key={key}
            style={{
              position: "absolute",
              left: "50vw",
              top: "50vh",
              transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              fontSize: "2.5rem",
              color: color,
              opacity: 0,
              userSelect: "none",
              pointerEvents: "none",
              filter: `blur(2.5px) drop-shadow(0 2px 6px ${color}55)`,
              animation: `out-in-icon-${idx} ${
                duration * 2
              }s linear ${delay}s infinite`,
              transition: "filter 0.3s, opacity 0.3s",
            }}
          >
            {Icon && (
              <Icon
                style={{
                  fontSize: "1.5em",
                  verticalAlign: "middle",
                  filter: `blur(1.5px) drop-shadow(0 2px 6px ${color}33)`,
                }}
              />
            )}
            <style>{`
            @keyframes out-in-icon-${idx} {
              0% { opacity: 0; filter: blur(8px); transform: translate(-50%,-50%) scale(0.7) rotate(${rotate}deg); }
              10% { opacity: 0.22; filter: blur(2.5px); }
              40% { opacity: 0.22; filter: blur(2.5px); transform: translate(calc(${
                endX - 50
              }vw),calc(${endY - 50}vh)) scale(1.1) rotate(${rotate}deg); }
              50% { opacity: 0.22; filter: blur(2.5px); transform: translate(calc(${
                endX - 50
              }vw),calc(${endY - 50}vh)) scale(1.1) rotate(${rotate}deg); }
              90% { opacity: 0.22; filter: blur(2.5px); transform: translate(-50%,-50%) scale(0.7) rotate(${rotate}deg); }
              100% { opacity: 0; filter: blur(8px); transform: translate(-50%,-50%) scale(0.7) rotate(${rotate}deg); }
            }
          `}</style>
          </span>
        )
      )}
    </div>
  );
};

export default AnimatedTechIcons;
