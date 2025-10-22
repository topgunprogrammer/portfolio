import React, { useState } from "react";
import { FaTrophy, FaRocket, FaCode } from "react-icons/fa";
import { getTechIcon, getTechColor } from "../../data/iconMapping";
import "./Projects.css";

function Projects({ projects }) {
  const [hoveredProject, setHoveredProject] = useState(null);

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
    <section id="projects" className="portfolio-section projects-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my technical projects spanning full-stack development,
            AI/ML, and innovative solutions that demonstrate my expertise and
            passion for technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid grid-3 projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-card project-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Category Badge */}
              <div
                className="category-badge"
                style={{
                  background: `linear-gradient(135deg, ${getCategoryColor(
                    project.category
                  )}40, ${getCategoryColor(project.category)}60)`,
                }}
              >
                {getCategoryIcon(project.category)}
                <span>{project.category}</span>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                {/* Tech Stack */}
                <div className="tech-stack">
                  {project.technologies.slice(0, 6).map((tech, techIndex) => {
                    const IconComponent = getTechIcon(tech);
                    const iconColor = getTechColor(tech);

                    return (
                      <span
                        key={tech}
                        className="tech-tag"
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
                      </span>
                    );
                  })}
                  {project.technologies.length > 6 && (
                    <span className="tech-tag more-tech">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div
                className="card-overlay"
                style={{
                  opacity: hoveredProject === project.id ? 1 : 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
