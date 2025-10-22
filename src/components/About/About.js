import React from "react";
import { motion } from "framer-motion";
import { getTechIcon, getTechColor } from "../../data/iconMapping";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./About.css";

function About({ about }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2 to 0.1
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }, // Reduced from 0.5 to 0.3
    },
  };

  // Enhanced skills data with proficiency levels and categories
  const skillsData = {
    "Frontend Development": {
      experience: "7+ Years XP",
      color: "#61dafb",
      skills: [
        { name: "ReactJS", proficiency: 95 },
        { name: "Redux", proficiency: 90 },
        { name: "JavaScript", proficiency: 95 },
        { name: "HTML5", proficiency: 98 },
        { name: "CSS", proficiency: 95 },
        { name: "SASS", proficiency: 85 },
        { name: "Bootstrap", proficiency: 90 },
      ],
    },
    "Backend Development": {
      experience: "6+ Years XP",
      color: "#68d391",
      skills: [
        { name: "NodeJS", proficiency: 90 },
        { name: "ExpressJS", proficiency: 88 },
        { name: "Python", proficiency: 85 },
      ],
    },
    "Database & Storage": {
      experience: "6+ Years XP",
      color: "#f093fb",
      skills: [
        { name: "MySQL", proficiency: 90 },
        { name: "MongoDB", proficiency: 85 },
        { name: "Redis", proficiency: 80 },
      ],
    },
    "Cloud & DevOps": {
      experience: "5+ Years XP",
      color: "#feca57",
      skills: [
        { name: "AWS", proficiency: 85 },
        { name: "Azure", proficiency: 80 },
        { name: "Docker", proficiency: 85 },
        { name: "Git/GitHub", proficiency: 95 },
        { name: "GitLab", proficiency: 88 },
      ],
    },
    "Data Science & ML Engineering": {
      experience: "3+ Years XP",
      color: "#ff6b6b",
      skills: [
        { name: "Python", proficiency: 90 },
        { name: "TensorFlow", proficiency: 85 },
        { name: "PyTorch", proficiency: 80 },
        { name: "Pandas", proficiency: 90 },
        { name: "NumPy", proficiency: 88 },
        { name: "Tableau", proficiency: 75 },
        { name: "ChatGPT", proficiency: 85 },
        { name: "ML", proficiency: 82 },
      ],
    },
  };

  return (
    <motion.section
      id="about"
      className="portfolio-section about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Reduced from 0.2 to 0.1 for earlier trigger
      variants={containerVariants}
    >
      <div className="section-container">
        <div className="section-header">
          <motion.h2 className="section-title" variants={itemVariants}>
            {about.title}
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            {about.description}
          </motion.p>
        </div>

        {/* Enhanced Skills Section - aksh-ai.com Inspired */}
        <motion.div className="skills-showcase" variants={itemVariants}>
          <div className="section-header">
            <h3 className="section-title">
              My Technical & Professional Skills
            </h3>
          </div>
          <div className="skills-grid">
            {Object.entries(skillsData).map(([category, data], catIndex) => (
              <motion.div
                key={category}
                className="skill-category-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.05, duration: 0.4 }} // Reduced delays
              >
                <div className="category-header">
                  <h4 className="category-title">{category}</h4>
                  <span
                    className="experience-badge"
                    style={{
                      background: `linear-gradient(135deg, ${data.color}40, ${data.color}60)`,
                    }}
                  >
                    {data.experience}
                  </span>
                </div>

                <div className="skills-progress-list">
                  {data.skills.map((skill, skillIndex) => {
                    const IconComponent = getTechIcon(skill.name);
                    const iconColor = getTechColor(skill.name);

                    return (
                      <motion.div
                        key={skill.name}
                        className="skill-progress-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: catIndex * 0.05 + skillIndex * 0.02, // Reduced delays
                        }}
                      >
                        <div className="skill-info">
                          <div className="skill-name-wrapper">
                            <IconComponent
                              className="skill-icon"
                              style={{ color: iconColor || data.color }}
                            />
                            <span className="skill-name">{skill.name}</span>
                          </div>
                          <span className="skill-percentage">
                            {skill.proficiency}%
                          </span>
                        </div>

                        <div className="skill-progress-bar">
                          <motion.div
                            className="skill-progress-fill"
                            style={{
                              background: `linear-gradient(90deg, ${
                                data.color
                              }, ${iconColor || data.color})`,
                            }}
                            initial={{ width: "0%" }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{
                              delay: catIndex * 0.05 + skillIndex * 0.02 + 0.1, // Reduced delays
                              duration: 0.8, // Reduced from 1.2 to 0.8
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications - Horizontal Scroll */}
        {about.certifications && about.certifications.length > 0 && (
          <motion.div className="certifications" variants={itemVariants}>
            <div className="section-header">
              <h3 className="section-title">Certifications</h3>
            </div>
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
                      transition={{ delay: index * 0.05, duration: 0.4 }} // Reduced delays
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
            <div className="section-header">
              <h3 className="section-title">Education</h3>
            </div>
            <VerticalTimeline lineColor="#ffffff">
              {about.education.map((edu, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--education"
                  contentArrowStyle={{
                    borderRight: "12px solid rgba(26, 26, 26, 0.95)",
                  }}
                  date={edu.duration}
                  dateClassName="timeline-date"
                  icon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                        color: "#1a1a1a",
                        textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                      }}
                    >
                      {index === 0
                        ? "🎓"
                        : index === 1
                        ? "🏛️"
                        : index === 2
                        ? "🏫"
                        : "📖"}
                    </div>
                  }
                >
                  <h3 className="vertical-timeline-element-title">
                    {edu.degree}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {edu.institution}
                  </h4>
                  <div className="education-timeline-details">
                    {edu.gpa && <span className="gpa">GPA: {edu.gpa}</span>}
                    {edu.status && <span className="status">{edu.status}</span>}
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

export default About;
