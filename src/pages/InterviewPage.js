import React from "react";
import "../components/Projects/Projects.css";
import { useNavigate } from "react-router-dom";
import { routes } from "../router/AppRoutes";
import { motion } from "framer-motion";
import { getInterviewIcon } from "../data/interviewIconMapping";
import AnimatedTechWords from "../components/common/AnimatedTechWords";

const interviewSections = [
  {
    label: "DSA",
    path: routes.dsa,
    description:
      "Sharpen your Data Structures & Algorithms skills with curated questions and solutions.",
    color: "#667eea",
    bg: "linear-gradient(135deg, #667eea33, #667eea11)",
  },
  {
    label: "Design",
    path: routes.systemDesign,
    description:
      "Practice System Design interviews with real-world scenarios and diagrams.",
    color: "#4ecdc4",
    bg: "linear-gradient(135deg, #4ecdc433, #4ecdc411)",
  },
  {
    label: "Behavioural",
    path: routes.behavioural,
    description:
      "Prepare for Behavioural interviews with top questions and sample answers.",
    color: "#feca57",
    bg: "linear-gradient(135deg, #feca5733, #feca5711)",
  },
  {
    label: "SDE",
    path: routes.techstack,
    description:
      "Review SDE Tech Stack topics and concepts for technical interviews.",
    color: "#764ba2",
    bg: "linear-gradient(135deg, #764ba233, #764ba211)",
  },
  {
    label: "ML/AI",
    path: routes.mltechstack,
    description:
      "Master ML/AI interview questions and frameworks for data science roles.",
    color: "#ff6b6b",
    bg: "linear-gradient(135deg, #ff6b6b33, #ff6b6b11)",
  },
];

const InterviewPage = () => {
  const navigate = useNavigate();
  // Memoize so the random positions don't change on every render

  return (
    <section
      className="portfolio-section projects-section"
      style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}
    >
      {/* Handwriting animated tech words background */}
      <AnimatedTechWords count={18} inward={false} zIndex={0} />
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Interview Preparation
          </h2>
        </div>
        <div
          className="portfolio-grid grid-3 projects-grid"
          style={{
            display: "flex",
            gap: "2rem",
            marginTop: "3rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {interviewSections.map((section, idx) => {
            const Icon = getInterviewIcon(section.label);
            return (
              <motion.div
                key={section.path}
                className="portfolio-card project-card"
                style={{
                  width: 400,
                  cursor: "pointer",
                  background: section.bg,
                  borderColor: section.color,
                  position: "relative",
                  overflow: "hidden",
                }}
                onClick={() => navigate(section.path)}
                whileHover={{
                  scale: 1.045,
                  boxShadow: `0 8px 32px 0 ${section.color}44, 0 1.5px 8px 0 #0006`,
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.08,
                  ease: "easeOut",
                }}
              >
                {/* Icon only, no tag at top */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 18,
                  }}
                >
                  <Icon
                    style={{
                      fontSize: 32,
                      color: section.color,
                      filter: "drop-shadow(0 2px 8px #0006)",
                    }}
                  />
                </div>
                <div className="project-content">
                  <h3
                    className="project-title"
                    style={{ color: section.color }}
                  >
                    {section.label}
                  </h3>
                  <p className="project-description">{section.description}</p>
                  <motion.div
                    style={{
                      height: 3,
                      width: "60%",
                      margin: "18px auto 0",
                      borderRadius: 2,
                      background: section.color,
                      opacity: 0.18,
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      delay: 0.2 + idx * 0.08,
                      duration: 0.5,
                      type: "spring",
                    }}
                  />
                </div>
                <motion.div
                  style={{
                    position: "absolute",
                    right: -30,
                    bottom: -30,
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: section.color,
                    opacity: 0.08,
                    zIndex: 0,
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.3 + idx * 0.08,
                    duration: 0.5,
                    type: "spring",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InterviewPage;
