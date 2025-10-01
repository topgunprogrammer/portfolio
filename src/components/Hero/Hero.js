import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero({ personalInfo }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <motion.section
      className="hero-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>

      <div className="hero-content">
        <motion.div className="hero-text" variants={itemVariants}>
          <motion.h1 className="hero-title" variants={itemVariants}>
            {personalInfo.name}
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={itemVariants}>
            {personalInfo.title}
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            Crafting innovative solutions with 7+ years of experience in
            full-stack development. Specialized in building scalable
            applications with modern technologies.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <Link to="/projects" className="cta-button primary">
              View My Work
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Get In Touch
            </Link>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <div className="stat-number">7+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">7+</div>
              <div className="stat-label">Major Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">7</div>
              <div className="stat-label">Certifications</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="hero-image-container" variants={imageVariants}>
          <div className="image-wrapper">
            <motion.div
              className="image-glow"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={`${process.env.PUBLIC_URL}/images/profile.png`}
              alt={personalInfo.name}
              className="hero-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
