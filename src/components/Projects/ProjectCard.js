import React from "react";
import { motion } from "framer-motion";
import { getTechIcon, getTechColor } from "../../utils/iconMapping";
import "./ProjectCard.css";

function ProjectCard({ project, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const techVariants = {
    hidden: { scale: 0 },
    visible: (i) => ({
      scale: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 300,
      },
    }),
  };

  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        {project.title}
      </motion.h3>
      <motion.p
        className="project-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        {project.description}
      </motion.p>
      <motion.div className="technologies" initial="hidden" animate="visible">
        {project.technologies.map((tech, i) => {
          const IconComponent = getTechIcon(tech);
          const iconColor = getTechColor(tech);
          return (
            <motion.span
              key={i}
              className="tech-tag"
              custom={i}
              variants={techVariants}
            >
              <IconComponent
                className="tech-icon"
                style={{ color: iconColor }}
              />
              {tech}
            </motion.span>
          );
        })}
      </motion.div>
      <motion.div
        className="project-links"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.5 }}
      >
        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
        )}
        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
