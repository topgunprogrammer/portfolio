import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

function Experience({ experience }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };

  return (
    <motion.section
      id="experience"
      className="experience-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div className="experience-header-wrapper">
        <motion.h2
          className="experience-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Professional Experience
        </motion.h2>
        <motion.p
          className="experience-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          My journey in the tech industry
        </motion.p>
      </motion.div>

      <motion.div className="experience-timeline" variants={containerVariants}>
        {experience.map((exp, expIndex) => (
          <motion.div
            key={exp.id}
            className="experience-card"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="experience-card-inner">
              {/* Company Logo */}
              <motion.div
                className="company-logo-wrapper"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: expIndex * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="company-logo"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </motion.div>

              {/* Content */}
              <div className="experience-content">
                <motion.div
                  className="experience-header"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: expIndex * 0.1 + 0.2 }}
                >
                  <div className="position-company">
                    <h3 className="position">{exp.position}</h3>
                    <h4 className="company">{exp.company}</h4>
                    <div className="meta-info">
                      <span className="duration">{exp.duration}</span>
                      {exp.type && (
                        <span className="employment-type">{exp.type}</span>
                      )}
                      {exp.location && (
                        <span className="location">{exp.location}</span>
                      )}
                    </div>
                  </div>
                </motion.div>

                <motion.p
                  className="description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: expIndex * 0.1 + 0.4 }}
                >
                  {exp.description}
                </motion.p>

                {/* Skills Tags */}
                {exp.skills && exp.skills.length > 0 && (
                  <motion.div
                    className="skills-tags"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: expIndex * 0.1 + 0.5 }}
                  >
                    {exp.skills.slice(0, 6).map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="skill-tag"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: expIndex * 0.1 + 0.6 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 300,
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                    {exp.skills.length > 6 && (
                      <span className="skill-tag more-skills">
                        +{exp.skills.length - 6} more
                      </span>
                    )}
                  </motion.div>
                )}

                {/* Achievements Section */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <motion.div
                    className="achievements-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: expIndex * 0.1 + 0.7 }}
                  >
                    <h5 className="achievements-title">Key Achievements</h5>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="achievement-item"
                          custom={achIndex}
                          variants={achievementVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Projects Section */}
                {exp.projects && exp.projects.length > 0 && (
                  <motion.div
                    className="projects-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: expIndex * 0.1 + 0.8 }}
                  >
                    <h5 className="projects-title">Notable Projects</h5>
                    <ul className="projects-list">
                      {exp.projects.map((project, projIndex) => (
                        <li key={projIndex} className="project-item">
                          {project}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Experience;
