import React from "react";
import { motion } from "framer-motion";
import { getTechIcon, getTechColor } from "../../utils/iconMapping";
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

  // Enhanced skills data with proficiency levels and categories
  const skillsData = {
    "Frontend Development": {
      experience: "5+ Years XP",
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
      experience: "4+ Years XP",
      color: "#68d391",
      skills: [
        { name: "NodeJS", proficiency: 90 },
        { name: "ExpressJS", proficiency: 88 },
        { name: "Python", proficiency: 85 },
      ],
    },
    "Database & Storage": {
      experience: "4+ Years XP",
      color: "#f093fb",
      skills: [
        { name: "MySQL", proficiency: 90 },
        { name: "MongoDB", proficiency: 85 },
        { name: "Redis", proficiency: 80 },
      ],
    },
    "Cloud & DevOps": {
      experience: "3+ Years XP",
      color: "#feca57",
      skills: [
        { name: "AWS", proficiency: 85 },
        { name: "Azure", proficiency: 80 },
        { name: "Docker", proficiency: 85 },
        { name: "Git/GitHub", proficiency: 95 },
        { name: "GitLab", proficiency: 88 },
      ],
    },
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

      {/* Enhanced Skills Section - aksh-ai.com Inspired */}
      <motion.div className="skills-showcase" variants={itemVariants}>
        <h3>My Technical & Professional Skills</h3>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, data], catIndex) => (
            <motion.div
              key={category}
              className="skill-category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
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
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
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
                            delay: catIndex * 0.1 + skillIndex * 0.05 + 0.3,
                            duration: 1.2,
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
          <h3>Certifications</h3>
          <motion.div className="certifications-scroll">
            {about.certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="certification-card"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4>{cert.name}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-date">{cert.date}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* Education Timeline */}
      {about.education && about.education.length > 0 && (
        <motion.div className="education-timeline" variants={itemVariants}>
          <h3>Education Journey</h3>
          <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)">
            {about.education.map((edu, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--education"
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "saturate(180%) blur(20px)",
                  WebkitBackdropFilter: "saturate(180%) blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  color: "#fff",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgba(255, 255, 255, 0.1)",
                }}
                date={edu.period}
                dateClassName="timeline-date"
                iconStyle={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "#fff",
                  boxShadow: "0 0 20px rgba(102, 126, 234, 0.3)",
                }}
                icon={
                  <span className="timeline-icon">
                    {index === 0
                      ? "🎓"
                      : index === 1
                      ? "🏛️"
                      : index === 2
                      ? "🏫"
                      : "📖"}
                  </span>
                }
              >
                <h3 className="vertical-timeline-element-title">
                  {edu.degree}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {edu.institution}
                </h4>
                {edu.gpa && <p className="education-gpa">GPA: {edu.gpa}</p>}
                {edu.description && (
                  <p className="education-description">{edu.description}</p>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      )}
    </motion.section>
  );
}

export default About;
