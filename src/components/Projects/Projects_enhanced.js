import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPlay,
  FaCode,
  FaTrophy,
  FaRocket,
  FaFilter,
} from "react-icons/fa";
import { getTechIcon, getTechColor } from "../../utils/iconMapping";
import "./Projects.css";

function Projects({ projects }) {
  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  // Get unique categories
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  // Filter projects
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  // 🎨 Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const techVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 400,
        damping: 15,
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
      className="projects-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Section Header */}
      <motion.div className="projects-header" variants={titleVariants}>
        <motion.h2
          className="projects-title"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p className="projects-subtitle">
          A showcase of my technical projects spanning full-stack development,
          AI/ML, and innovative solutions that demonstrate my expertise and
          passion for technology.
        </motion.p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        className="projects-filter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="filter-buttons">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`filter-btn ${filter === category ? "active" : ""}`}
              onClick={() => setFilter(category)}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4 + index * 0.1,
                type: "spring",
                stiffness: 300,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFilter className="filter-icon" />
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div className="projects-grid" variants={containerVariants}>
        {filteredProjects.map((project, index) => (
          <Tilt
            key={project.id}
            options={{
              max: 15,
              scale: 1.02,
              glare: true,
              "max-glare": 0.2,
              speed: 1000,
            }}
          >
            <motion.div
              className="project-card"
              variants={cardVariants}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
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
                        whileHover={{ scale: 1.1, y: -2 }}
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

                {/* Project Links */}
                <motion.div
                  className="project-links"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                      whileHover={{ scale: 1.05, x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="link-icon" />
                      <span>GitHub</span>
                    </motion.a>
                  )}

                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                      whileHover={{ scale: 1.05, x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaPlay className="link-icon" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}

                  {!project.link && !project.demo && (
                    <motion.div
                      className="project-link private-link"
                      whileHover={{ scale: 1.02 }}
                    >
                      <FaCode className="link-icon" />
                      <span>Private Project</span>
                    </motion.div>
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
          </Tilt>
        ))}
      </motion.div>

      {/* Projects Count */}
      <motion.div
        className="projects-count"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <span className="count-text">
          Showing {filteredProjects.length} of {projects.length} projects
        </span>
      </motion.div>
    </motion.section>
  );
}

export default Projects;
