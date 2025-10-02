import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaRocket, FaCode } from "react-icons/fa";
import { getTechIcon, getTechColor } from "../../utils/iconMapping";
import "./Projects.css";

function Projects({ projects }) {
  const [hoveredProject, setHoveredProject] = useState(null);

  // 🎨 Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  // 🏷️ Category Icons
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Production":
        return <FaRocket />;
      case "Hackathon Winner":
        return <FaTrophy />;
      default:
        return <FaCode />;
    }
  };

  // 🎨 Category Colors
  const getCategoryColor = (category) => {
    switch (category) {
      case "Production":
        return "#4ecdc4";
      case "Hackathon Winner":
        return "#feca57";
      default:
        return "#667eea";
    }
  };

  return (
    <motion.section
      id="projects"
      className="portfolio-section projects-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="section-container">
        {/* Section Header */}
        <motion.div className="section-header" variants={titleVariants}>
          <motion.h2 className="section-title">Featured Projects</motion.h2>
          <motion.p className="section-subtitle">
            A showcase of my technical projects spanning full-stack development,
            AI/ML, and innovative solutions that demonstrate my expertise and
            passion for technology.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="portfolio-grid grid-3 projects-grid"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-card project-card"
              variants={cardVariants}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              whileTap={{ scale: 0.98 }}
            >
              {/* Category Badge */}
              <motion.div
                className="category-badge"
                style={{
                  background: `linear-gradient(135deg, ${getCategoryColor(
                    project.category
                  )}40, ${getCategoryColor(project.category)}60)`,
                }}
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
              >
                {getCategoryIcon(project.category)}
                <span>{project.category}</span>
              </motion.div>

              {/* Project Content */}
              <div className="project-content">
                <motion.h3
                  className="project-title"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="project-description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  className="tech-stack"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {project.technologies.slice(0, 6).map((tech, techIndex) => {
                    const IconComponent = getTechIcon(tech);
                    const iconColor = getTechColor(tech);

                    return (
                      <motion.span
                        key={tech}
                        className="tech-tag"
                        custom={techIndex}
                        variants={techVariants}
                        style={{
                          borderColor:
                            iconColor || getCategoryColor(project.category),
                        }}
                      >
                        <IconComponent
                          className="tech-icon"
                          style={{
                            color:
                              iconColor || getCategoryColor(project.category),
                          }}
                        />
                        {tech}
                      </motion.span>
                    );
                  })}
                  {project.technologies.length > 6 && (
                    <span className="tech-tag more-tech">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </motion.div>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="card-overlay"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredProject === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
