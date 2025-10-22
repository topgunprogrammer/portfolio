import React, { useState } from "react";
import { motion } from "framer-motion";
import { getTechIcon, getTechColor } from "../../data/iconMapping";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./About.css";

function About({ about }) {
  const [activeCategory, setActiveCategory] = useState(0);

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

  const skillsDataArray = Object.entries(skillsData);

  // Handle category switching
  const handleCategoryClick = (index) => {
    setActiveCategory(index);
  };

  // Auto-cycle removed - user controls navigation manually

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

        {/* 🚀 REVOLUTIONARY SPLIT-SCREEN SKILLS SHOWCASE */}
        <motion.div
          className="skills-showcase-revolutionary"
          variants={itemVariants}
        >
          <div className="section-header">
            <h3 className="section-title">
              My Technical & Professional Skills
            </h3>
            <p className="section-subtitle">
              Explore my expertise across different technology domains
            </p>
          </div>

          <div className="skills-split-container">
            {/* Left Side - Category Navigation */}
            <motion.div
              className="skills-categories-panel"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="categories-header">
                <h4>Technology Domains</h4>
                <div className="categories-divider"></div>
              </div>

              <div className="categories-list">
                {skillsDataArray.map(([category, data], index) => (
                  <motion.div
                    key={category}
                    className={`category-item ${
                      index === activeCategory ? "active" : ""
                    }`}
                    data-category={category}
                    onClick={() => handleCategoryClick(index)}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 8 }}
                  >
                    <div
                      className="category-indicator"
                      style={{ backgroundColor: data.color }}
                    ></div>
                    <div className="category-content">
                      <h5 className="category-name">{category}</h5>
                      <span
                        className="category-experience"
                        style={{ color: data.color }}
                      >
                        {data.experience}
                      </span>
                      <div className="category-skills-count">
                        {data.skills.length} Skills
                      </div>
                    </div>
                    <div className="category-arrow">→</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Skills Progress Display */}
            <motion.div
              className="skills-display-panel"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {skillsDataArray.map(([category, data], catIndex) => (
                <div
                  key={category}
                  className={`skills-content-section ${
                    catIndex === activeCategory ? "active" : ""
                  }`}
                  data-category={category}
                >
                  <div className="skills-content-header">
                    <h4 className="content-category-title">{category}</h4>
                    <div
                      className="content-experience-badge"
                      style={{
                        background: `linear-gradient(135deg, ${data.color}20, ${data.color}40)`,
                        border: `1px solid ${data.color}60`,
                      }}
                    >
                      {data.experience}
                    </div>
                  </div>

                  <div className="skills-progress-grid">
                    {data.skills.map((skill, skillIndex) => {
                      const IconComponent = getTechIcon(skill.name);
                      const iconColor = getTechColor(skill.name);

                      return (
                        <motion.div
                          key={skill.name}
                          className="skill-progress-row"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: catIndex === activeCategory ? 1 : 0,
                            y: catIndex === activeCategory ? 0 : 20,
                          }}
                          transition={{
                            delay:
                              catIndex === activeCategory
                                ? skillIndex * 0.05
                                : 0,
                            duration: 0.4,
                          }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="skill-identity">
                            <div className="skill-icon-wrapper">
                              <IconComponent
                                className="skill-icon-new"
                                style={{ color: iconColor || data.color }}
                              />
                            </div>
                            <div className="skill-details">
                              <span className="skill-name-new">
                                {skill.name}
                              </span>
                              <div className="skill-proficiency-level">
                                {skill.proficiency >= 90
                                  ? "Expert"
                                  : skill.proficiency >= 80
                                  ? "Advanced"
                                  : skill.proficiency >= 70
                                  ? "Intermediate"
                                  : "Beginner"}
                              </div>
                            </div>
                          </div>

                          <div className="skill-progress-section">
                            <div className="skill-percentage-display">
                              {skill.proficiency}%
                            </div>
                            <div className="skill-progress-track">
                              <motion.div
                                className="skill-progress-bar-new"
                                style={{
                                  background: `linear-gradient(90deg, ${
                                    data.color
                                  }, ${iconColor || data.color})`,
                                  boxShadow: `0 0 20px ${data.color}40`,
                                }}
                                initial={{ width: "0%" }}
                                animate={{
                                  width:
                                    catIndex === activeCategory
                                      ? `${skill.proficiency}%`
                                      : "0%",
                                }}
                                transition={{
                                  delay:
                                    catIndex === activeCategory
                                      ? skillIndex * 0.05 + 0.2
                                      : 0,
                                  duration: 1.2,
                                  ease: "easeOut",
                                }}
                              />
                              <div className="progress-shimmer"></div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* 🎓 REVOLUTIONARY CERTIFICATIONS SHOWCASE */}
        {about.certifications && about.certifications.length > 0 && (
          <motion.div
            className="certifications-revolutionary"
            variants={itemVariants}
          >
            <div className="section-header">
              <h3 className="section-title">Professional Certifications</h3>
              <p className="section-subtitle">
                Industry-recognized credentials validating my expertise
              </p>
            </div>

            <motion.div
              className="certifications-grid-container"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="certifications-grid">
                {about.certifications.map((cert, index) => {
                  // Create PDF filename from cert name (temporarily disabled)
                  // const pdfFileName =
                  //   cert.name
                  //     .toLowerCase()
                  //     .replace(/[^a-z0-9]+/g, "-")
                  //     .replace(/(^-|-$)/g, "") + ".pdf";
                  // const pdfPath = `${process.env.PUBLIC_URL}/certifications/${pdfFileName}`;

                  // Determine certification type for different icons/colors
                  const getCertType = (name) => {
                    if (name.toLowerCase().includes("aws"))
                      return { icon: "☁️", color: "#FF9900" };
                    if (name.toLowerCase().includes("azure"))
                      return { icon: "🔷", color: "#0078D4" };
                    if (name.toLowerCase().includes("google"))
                      return { icon: "🎯", color: "#4285F4" };
                    if (name.toLowerCase().includes("microsoft"))
                      return { icon: "🏢", color: "#00BCF2" };
                    if (name.toLowerCase().includes("oracle"))
                      return { icon: "🔴", color: "#F80000" };
                    if (name.toLowerCase().includes("cisco"))
                      return { icon: "🌐", color: "#1BA0D7" };
                    if (name.toLowerCase().includes("comptia"))
                      return { icon: "🛡️", color: "#C8102E" };
                    if (name.toLowerCase().includes("project"))
                      return { icon: "📊", color: "#2E8B57" };
                    if (
                      name.toLowerCase().includes("agile") ||
                      name.toLowerCase().includes("scrum")
                    )
                      return { icon: "🔄", color: "#FF6B35" };
                    return { icon: "🎓", color: "#6366F1" };
                  };

                  const certType = getCertType(cert.name);

                  return (
                    <motion.div
                      key={index}
                      className="certification-card-modern"
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="cert-card-inner">
                        <div className="cert-header">
                          <div className="cert-icon-container">
                            <span
                              className="cert-icon-modern"
                              style={{
                                background: `linear-gradient(135deg, ${certType.color}20, ${certType.color}40)`,
                                border: `2px solid ${certType.color}60`,
                              }}
                            >
                              {certType.icon}
                            </span>
                            <div className="cert-status-indicator"></div>
                          </div>

                          <div className="cert-metadata">
                            <div className="cert-date-badge">� {cert.date}</div>
                          </div>
                        </div>

                        <div className="cert-content">
                          <h4 className="cert-title-modern">{cert.name}</h4>
                          <p className="cert-issuer-modern">
                            <span className="issuer-label">Issued by</span>
                            <span className="issuer-name">{cert.issuer}</span>
                          </p>

                          <div className="cert-skills-preview">
                            <div className="skill-tags">
                              {/* Add relevant skill tags based on certification */}
                              {cert.name.toLowerCase().includes("aws") && (
                                <>
                                  <span className="skill-tag-cert">
                                    Cloud Computing
                                  </span>
                                  <span className="skill-tag-cert">
                                    AWS Services
                                  </span>
                                </>
                              )}
                              {cert.name.toLowerCase().includes("react") && (
                                <>
                                  <span className="skill-tag-cert">
                                    Frontend
                                  </span>
                                  <span className="skill-tag-cert">
                                    JavaScript
                                  </span>
                                </>
                              )}
                              {cert.name.toLowerCase().includes("data") && (
                                <>
                                  <span className="skill-tag-cert">
                                    Analytics
                                  </span>
                                  <span className="skill-tag-cert">
                                    Big Data
                                  </span>
                                </>
                              )}
                              {!cert.name.toLowerCase().includes("aws") &&
                                !cert.name.toLowerCase().includes("react") &&
                                !cert.name.toLowerCase().includes("data") && (
                                  <>
                                    <span className="skill-tag-cert">
                                      Professional
                                    </span>
                                    <span className="skill-tag-cert">
                                      Certified
                                    </span>
                                  </>
                                )}
                            </div>
                          </div>
                        </div>

                        {/* Hide View Certificate button temporarily */}
                        {/* <div className="cert-actions">
                          <a
                            href={pdfPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-view-button"
                          >
                            <span className="button-icon">📜</span>
                            <span className="button-text">
                              View Certificate
                            </span>
                            <span className="button-arrow">→</span>
                          </a>
                        </div> */}

                        {/* Decorative elements */}
                        <div className="cert-decoration">
                          <div className="decoration-line-1"></div>
                          <div className="decoration-line-2"></div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Stats Summary */}
              <motion.div
                className="certifications-stats"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="stats-card">
                  <div className="stat-item">
                    <span className="stat-number">
                      {about.certifications.length}
                    </span>
                    <span className="stat-label">Certifications</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-number">
                      {
                        new Set(about.certifications.map((cert) => cert.issuer))
                          .size
                      }
                    </span>
                    <span className="stat-label">Providers</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
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
