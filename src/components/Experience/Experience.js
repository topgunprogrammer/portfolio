import React from "react";
import { motion } from "framer-motion";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      id="experience"
      className="portfolio-section experience-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="section-container">
        {/* Section Header */}
        <motion.div className="section-header" variants={cardVariants}>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey through various roles in software
            development, AI/ML, and technical leadership positions.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
            "& .MuiTimelineItem-root": {
              "&:before": {
                display: "none", // Remove left spacing
              },
            },
            "& .MuiTimelineDot-root": {
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              boxShadow: "0 0 20px rgba(102, 126, 234, 0.4)",
              border: "none",
              width: "16px",
              height: "16px",
            },
            "& .MuiTimelineConnector-root": {
              background: "rgba(102, 126, 234, 0.3)",
              width: "2px",
            },
          }}
        >
          {experience.map((exp, index) => (
            <TimelineItem key={exp.id}>
              <TimelineSeparator>
                <TimelineDot />
                {index < experience.length - 1 && <TimelineConnector />}
              </TimelineSeparator>

              <TimelineContent>
                <motion.div
                  className="experience-card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "16px",
                    color: "#fff",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                    padding: "24px",
                    marginBottom: "16px",
                    marginLeft: "16px",
                  }}
                >
                  {/* Experience Header */}
                  <motion.div
                    className="experience-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="experience-header-content">
                      {/* Company Logo */}
                      {exp.logo && (
                        <div className="company-logo-container">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="company-logo"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        </div>
                      )}

                      <div className="experience-text-content">
                        <h3 className="experience-title">{exp.position}</h3>
                        <h4 className="experience-company">{exp.company}</h4>
                      </div>
                    </div>
                    <div className="experience-meta">
                      <span className="experience-duration">
                        {exp.duration}
                      </span>
                      <span className="experience-type">{exp.type}</span>
                      <span className="experience-location">
                        {exp.location}
                      </span>
                    </div>
                  </motion.div>

                  {/* Experience Description */}
                  <motion.div
                    className="experience-description"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <p>{exp.description}</p>
                  </motion.div>

                  {/* Key Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <motion.div
                      className="experience-achievements"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <ul className="achievements-list">
                        {exp.achievements
                          .slice(0, 3)
                          .map((achievement, achIndex) => (
                            <li key={achIndex} className="achievement-item">
                              {achievement}
                            </li>
                          ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Skills Tags */}
                  {exp.skills && exp.skills.length > 0 && (
                    <motion.div
                      className="experience-skills"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      <div className="skills-tags">
                        {exp.skills.slice(0, 8).map((skill, skillIndex) => (
                          <span key={skill} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                        {exp.skills.length > 8 && (
                          <span className="skill-tag more-skills">
                            +{exp.skills.length - 8} more
                          </span>
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </motion.section>
  );
}

export default Experience;
