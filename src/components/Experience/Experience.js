import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

function Experience({ experience }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
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
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Professional Experience
      </motion.h2>
      <motion.div className="experience-list" variants={containerVariants}>
        {experience.map((exp, expIndex) => (
          <motion.div
            key={exp.id}
            className="experience-item"
            variants={itemVariants}
            whileHover={{
              x: 15,
              boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="experience-header">
              <motion.div
                className="title-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: expIndex * 0.2 + 0.2 }}
              >
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                {exp.location && <p className="location">{exp.location}</p>}
              </motion.div>
              <motion.span
                className="duration"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: expIndex * 0.2 + 0.3, type: "spring" }}
              >
                {exp.duration}
              </motion.span>
            </div>
            <motion.p
              className="description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: expIndex * 0.2 + 0.4 }}
            >
              {exp.description}
            </motion.p>

            {exp.achievements && exp.achievements.length > 0 && (
              <motion.div
                className="achievements"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: expIndex * 0.2 + 0.5 }}
              >
                <h5>Key Achievements:</h5>
                <ul>
                  {exp.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      custom={index}
                      variants={achievementVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {exp.projects && exp.projects.length > 0 && (
              <motion.div
                className="exp-projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: expIndex * 0.2 + 0.6 }}
              >
                <h5>Projects:</h5>
                <ul className="projects-list">
                  {exp.projects.map((project, index) => (
                    <motion.li
                      key={index}
                      custom={index}
                      variants={achievementVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      {project}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Experience;
