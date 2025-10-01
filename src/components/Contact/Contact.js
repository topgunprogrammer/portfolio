import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Contact.css";

function Contact({ personalInfo }) {
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
          <motion.div
            className="contact-item"
            whileHover={{ x: 10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaEnvelope className="contact-icon" />
            <strong>Email:</strong>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </motion.div>
          <motion.div
            className="contact-item"
            whileHover={{ x: 10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaPhone className="contact-icon" />
            <strong>Phone:</strong>
            <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
          </motion.div>
          <motion.div
            className="contact-item"
            whileHover={{ x: 10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaMapMarkerAlt className="contact-icon" />
            <strong>Location:</strong>
            <span>{personalInfo.location}</span>
          </motion.div>
          {personalInfo.openToRelocate && (
            <motion.div
              className="contact-item relocate"
              whileHover={{ x: 10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <strong>Status:</strong>
              <motion.span
                className="relocate-badge"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Open to Relocate
              </motion.span>
            </motion.div>
          )}
        </motion.div>
        <motion.div className="social-links" variants={containerVariants}>
          {personalInfo.social.github && (
            <motion.a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github"
              custom={0}
              variants={socialVariants}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="social-icon" />
              <span>GitHub</span>
            </motion.a>
          )}
          {personalInfo.social.linkedin && (
            <motion.a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
              custom={1}
              variants={socialVariants}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="social-icon" />
              <span>LinkedIn</span>
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
