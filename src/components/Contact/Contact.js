import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import confetti from "canvas-confetti";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import "./Contact.css";

function Contact({ personalInfo }) {
  // 🎉 Confetti Effect Functions
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ffffff", "#f0f0f0", "#e0e0e0"],
    });
  };

  // 📞 Enhanced Contact Click Handlers
  const handleEmailClick = () => {
    window.open(
      `mailto:${personalInfo.email}?subject=Hello from your Portfolio!&body=Hi Mohan Ram,%0D%0A%0D%0AI found your portfolio and would like to connect!`,
      "_blank"
    );

    // Epic email burst effect
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#ff6b6b", "#ff8e8e", "#ffb3b3"],
      shapes: ["square"],
      scalar: 1.2,
    });

    // Secondary wave
    setTimeout(() => {
      confetti({
        particleCount: 30,
        spread: 100,
        origin: { y: 0.7 },
        colors: ["#ff4757", "#ff6b7a"],
        shapes: ["circle"],
        scalar: 0.8,
      });
    }, 150);
  };

  const handlePhoneClick = () => {
    window.open(`tel:${personalInfo.phone}`, "_self");

    // Cool phone ring effect
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 },
      colors: ["#4ecdc4", "#45b7d1", "#96ceb4"],
      shapes: ["circle"],
      scalar: 1.1,
    });

    // Ripple effect
    setTimeout(() => {
      confetti({
        particleCount: 25,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#74b9ff", "#0984e3"],
        shapes: ["square"],
        scalar: 0.9,
      });
    }, 100);
  };

  const handleLocationClick = () => {
    // Google Maps link to Chennai
    window.open(
      "https://www.google.com/maps/place/Chennai,+Tamil+Nadu,+India/",
      "_blank"
    );

    // Location pin drop effect
    confetti({
      particleCount: 50,
      spread: 45,
      origin: { y: 0.6 },
      colors: ["#45b7d1", "#74b9ff", "#0984e3"],
      shapes: ["circle"],
      scalar: 1.3,
    });

    // Map markers effect
    setTimeout(() => {
      confetti({
        particleCount: 20,
        spread: 70,
        origin: { y: 0.4 },
        colors: ["#e17055", "#fdcb6e"],
        shapes: ["square"],
        scalar: 0.7,
      });
    }, 200);
  };

  const handleRelocateClick = () => {
    // No action - just visual button
  };

  const handleSocialClick = () => {
    triggerConfetti();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const socialVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    }),
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants}>Contact Me</motion.h2>
      <div className="contact-content">
        <motion.p className="contact-intro" variants={itemVariants}>
          Feel free to reach out for collaborations or just a friendly chat!
        </motion.p>
        <motion.div className="contact-info" variants={itemVariants}>
          {/* 📧 Email Contact */}
          <Tilt
            options={{ max: 15, scale: 1.05, glare: true, "max-glare": 0.2 }}
          >
            <motion.div
              className="contact-item clickable"
              whileHover={{ x: 10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={handleEmailClick}
            >
              <FaEnvelope className="contact-icon email-icon" />
              <div className="contact-details">
                <strong>Email</strong>
                <span className="contact-value">{personalInfo.email}</span>
              </div>
              <FaExternalLinkAlt className="external-link-icon" />
            </motion.div>
          </Tilt>

          {/* 📞 Phone Contact */}
          <Tilt
            options={{ max: 15, scale: 1.05, glare: true, "max-glare": 0.2 }}
          >
            <motion.div
              className="contact-item clickable"
              whileHover={{ x: 10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={handlePhoneClick}
            >
              <FaPhone className="contact-icon phone-icon" />
              <div className="contact-details">
                <strong>Phone</strong>
                <span className="contact-value">{personalInfo.phone}</span>
              </div>
              <FaExternalLinkAlt className="external-link-icon" />
            </motion.div>
          </Tilt>

          {/* 📍 Location */}
          <Tilt
            options={{ max: 15, scale: 1.05, glare: true, "max-glare": 0.2 }}
          >
            <motion.div
              className="contact-item clickable"
              whileHover={{ x: 10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={handleLocationClick}
            >
              <FaMapMarkerAlt className="contact-icon location-icon" />
              <div className="contact-details">
                <strong>Location</strong>
                <span className="contact-value">{personalInfo.location}</span>
              </div>
              <FaExternalLinkAlt className="external-link-icon" />
            </motion.div>
          </Tilt>
        </motion.div>

        {/* 🌍 Standalone Relocate Button */}
        {personalInfo.openToRelocate && (
          <motion.div className="relocate-section" variants={itemVariants}>
            <motion.button
              className="relocate-button"
              onClick={handleRelocateClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Rotating_earth_animated.gif"
                alt="Rotating Earth"
                className="relocate-gif"
              />
              <span className="relocate-text">Open to Relocate</span>
            </motion.button>
          </motion.div>
        )}

        <motion.div className="social-links" variants={containerVariants}>
          {personalInfo.social.github && (
            <Tilt
              options={{ max: 25, scale: 1.1, glare: true, "max-glare": 0.5 }}
            >
              <motion.a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github"
                custom={0}
                variants={socialVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSocialClick}
              >
                <FaGithub className="social-icon" />
                <span>GitHub</span>
                <div className="social-glow"></div>
              </motion.a>
            </Tilt>
          )}
          {personalInfo.social.linkedin && (
            <Tilt
              options={{ max: 25, scale: 1.1, glare: true, "max-glare": 0.5 }}
            >
              <motion.a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
                custom={1}
                variants={socialVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSocialClick}
              >
                <FaLinkedin className="social-icon" />
                <span>LinkedIn</span>
                <div className="social-glow"></div>
              </motion.a>
            </Tilt>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
