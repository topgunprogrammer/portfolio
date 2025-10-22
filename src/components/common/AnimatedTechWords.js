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
  "Java",
  "C++",
  "GraphQL",
  "Redis",
  "Azure",
  "GCP",
  "PostgreSQL",
  "HTML5",
  "CSS3",
  "Sass",
  "Jest",
  "Express",
  "Flask",
  "TensorFlow",
  "PyTorch",
  "Spring",
  "GoLang",
  "Rust",
];

const colorPalette = [
  "#FF1744", // Red
  "#F50057", // Pink
  "#D500F9", // Purple
  "#651FFF", // Deep Purple
  "#2979FF", // Blue
  "#00E5FF", // Cyan
  "#1DE9B6", // Teal
  "#00E676", // Green
  "#FFEA00", // Yellow
  "#FFC400", // Amber
  "#FF9100", // Orange
  "#FF3D00", // Deep Orange
  "#FF80AB", // Light Pink
  "#B388FF", // Light Purple
  "#8C9EFF", // Light Blue
  "#80D8FF", // Light Cyan
  "#A7FFEB", // Light Teal
  "#CCFF90", // Light Green
  "#FFFF8D", // Light Yellow
  "#FFD180", // Light Orange
];

function getRandomizedWords(count, inward = false) {
  return Array.from({ length: count }).map((_, i) => {
    const angle = Math.random() * 2 * Math.PI;
    const distance = 40 + Math.random() * 60; // percent of viewport
    const endX = 50 + Math.cos(angle) * distance;
    const endY = 50 + Math.sin(angle) * distance;
    const rotate = Math.random() * 60 - 30;
    const delay = Math.random() * 3;
    const duration = 4 + Math.random() * 3;
    const word = techWords[Math.floor(Math.random() * techWords.length)];
    // Use a vibrant color from the palette, cycling by index
    const color = colorPalette[i % colorPalette.length];
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
      inward,
    };
  });
}

const AnimatedTechWords = ({ count = 18, inward = false, zIndex = 0 }) => {
  const animatedWords = useMemo(
    () => getRandomizedWords(count, inward),
    [count, inward]
  );
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
      {animatedWords.map(
        (
          {
            endX,
            endY,
            rotate,
            delay,
            duration,
            word,
            key,
            color,
            Icon,
            inward,
          },
          idx
        ) => (
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
              animation: `${inward ? "in-out" : "out-in"}-word-${idx} ${
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
            @keyframes out-in-word-${idx} {
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
            @keyframes in-out-word-${idx} {
              0% { opacity: 0; filter: blur(8px); transform: translate(calc(${
                endX - 50
              }vw),calc(${endY - 50}vh)) scale(1.1) rotate(${rotate}deg); }
              10% { opacity: 0.22; filter: blur(2.5px); }
              40% { opacity: 0.22; filter: blur(2.5px); transform: translate(-50%,-50%) scale(0.7) rotate(${rotate}deg); }
              50% { opacity: 0.22; filter: blur(2.5px); transform: translate(-50%,-50%) scale(0.7) rotate(${rotate}deg); }
              90% { opacity: 0.22; filter: blur(2.5px); transform: translate(calc(${
                endX - 50
              }vw),calc(${endY - 50}vh)) scale(1.1) rotate(${rotate}deg); }
              100% { opacity: 0; filter: blur(8px); transform: translate(calc(${
                endX - 50
              }vw),calc(${endY - 50}vh)) scale(1.1) rotate(${rotate}deg); }
            }
          `}</style>
          </span>
        )
      )}
    </div>
  );
};

export default AnimatedTechWords;
