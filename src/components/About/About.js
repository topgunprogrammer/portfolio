import React from "react";
import { motion } from "framer-motion";
import { getTechIcon, getTechColor } from "../../utils/iconMapping";
import "./About.css";

function About({ about }) {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: custom * 0.05, type: "spring", stiffness: 300 },
    }),
  };

  return (
    <motion.section
      id="about"
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants}>{about.title}</motion.h2>
      <motion.p className="about-description" variants={itemVariants}>
        {about.description}
      </motion.p>

      {/* Core Competencies */}
      {about.coreCompetencies && (
        <motion.div className="core-competencies" variants={itemVariants}>
          <h3>Technical Skills & Core Competencies</h3>
          {Object.entries(about.coreCompetencies).map(
            ([category, skills], catIndex) => (
              <motion.div
                key={category}
                className="competency-category"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h4>{category}</h4>
                <div className="skills-list">
                  {skills.map((skill, index) => {
                    const IconComponent = getTechIcon(skill);
                    const iconColor = getTechColor(skill);
                    return (
                      <motion.span
                        key={index}
                        className="skill-tag"
                        custom={index}
                        variants={skillVariants}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent
                          className="tech-icon"
                          style={{ color: iconColor }}
                        />
                        {skill}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      )}

      {/* Certifications - Horizontal Scroll */}
      {about.certifications && about.certifications.length > 0 && (
        <motion.div className="certifications" variants={itemVariants}>
          <h3>Certifications</h3>
          <motion.div
            className="certifications-scroll-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="certifications-scroll">
              {about.certifications.map((cert, index) => {
                // Create PDF filename from cert name
                const pdfFileName =
                  cert.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "") + ".pdf";
                const pdfPath = `${process.env.PUBLIC_URL}/certifications/${pdfFileName}`;

                return (
                  <motion.a
                    key={index}
                    href={pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-card"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="cert-badge">📜</div>
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-date">{cert.date}</p>
                    <div className="cert-view">View Certificate →</div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
          <p className="scroll-hint">← Scroll to explore →</p>
        </motion.div>
      )}

      {/* Education */}
      {about.education && about.education.length > 0 && (
        <motion.div className="education" variants={itemVariants}>
          <h3>Education</h3>
          <div className="education-list">
            {about.education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  x: 10,
                  boxShadow: "0 8px 20px rgba(102, 126, 234, 0.3)",
                  transition: { duration: 0.3 },
                }}
              >
                <h4>{edu.degree}</h4>
                <p className="institution">{edu.institution}</p>
                <div className="education-details">
                  <span className="duration">{edu.duration}</span>
                  {edu.gpa && <span className="gpa">GPA: {edu.gpa}</span>}
                  {edu.status && <span className="status">{edu.status}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.section>
  );
}

export default About;
