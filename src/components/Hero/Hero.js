import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import confetti from "canvas-confetti";
import "./Hero.css";

function Hero({ personalInfo }) {
  const handleScrollToNext = () => {
    // Scroll to the next section (About section)
    const heroSection = document.querySelector(".hero-section");
    const nextSection = heroSection.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = (event) => {
    // Get button position for confetti origin
    const rect = event.target.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    // ✨ Celebrate with a burst of stars from button! ✨
    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
      origin: { x, y },
    };
    function shoot() {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
      });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);

    // Create download link and trigger download
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/resume/Resume.pdf`;
    link.download = "Mohan_Ram_Shanmugam_Resume.pdf";
    link.click();
  };

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

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000, // Wait 2s
                "Full Stack Developer | ML & AI Specialist",
                3000, // Wait 3s
                "Full Stack Developer | React Expert",
                2000, // Wait 2s
                "Full Stack Developer | Node.js Developer",
                2000, // Wait 2s
                "Full Stack Developer | Cloud Architect",
                2000, // Wait 2s
                "", // Clear text
                500, // Wait 0.5s
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
              speed={50}
              deletionSpeed={60}
            />
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
            <motion.button
              onClick={handleDownloadResume}
              className="cta-button download"
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              📄 Download Resume
            </motion.button>
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
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={handleScrollToNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ cursor: "pointer" }}
      >
        <span>Click to explore</span>
        <div className="scroll-arrow">↓</div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
