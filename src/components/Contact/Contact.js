import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { formspreeConfig } from "../../config/emailConfig";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaCommentDots,
} from "react-icons/fa";
import "./Contact.css";

function Contact({ personalInfo }) {
  // 📝 Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // 🎉 Enhanced Confetti Effects
  const triggerSuccessConfetti = () => {
    // Multi-stage celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00d2d3", "#01a3a4", "#ffffff", "#4ecdc4"],
      shapes: ["circle", "square"],
      scalar: 1.2,
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff6b6b", "#4ecdc4", "#45b7d1"],
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#96ceb4", "#feca57", "#ff9ff3"],
      });
    }, 200);
  };

  // 📞 Contact Click Handlers
  const handleEmailClick = () => {
    window.open(
      `mailto:${
        personalInfo.email
      }?subject=Hello from your Portfolio!&body=Hi ${
        personalInfo.name.split(" ")[0]
      },%0D%0A%0D%0AI found your portfolio and would like to connect!`,
      "_blank"
    );

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#ff6b6b", "#ff8e8e", "#ffb3b3"],
      shapes: ["square"],
      scalar: 1.2,
    });
  };

  const handlePhoneClick = () => {
    window.open(`tel:${personalInfo.phone}`, "_self");

    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 },
      colors: ["#4ecdc4", "#45b7d1", "#96ceb4"],
      shapes: ["circle"],
      scalar: 1.1,
    });
  };

  const handleLocationClick = () => {
    window.open(
      "https://www.google.com/maps/place/Chennai,+Tamil+Nadu,+India/",
      "_blank"
    );

    confetti({
      particleCount: 50,
      spread: 45,
      origin: { y: 0.6 },
      colors: ["#45b7d1", "#74b9ff", "#0984e3"],
      shapes: ["circle"],
      scalar: 1.3,
    });
  };

  // 📝 Form Handlers
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    if (!formspreeConfig.actionUrl) {
      console.error("Formspree URL is not defined!");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(formspreeConfig.actionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        triggerSuccessConfetti();
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(""), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 🎨 Animation Variants
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

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      id="contact"
      className="portfolio-section contact-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="section-container">
        {/* Section Header */}
        <motion.div className="section-header" variants={itemVariants}>
          <motion.h2
            className="section-title"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p className="section-subtitle">
            I'm always open to discussing new opportunities, collaborations, or
            just having a conversation about technology and innovation.
          </motion.p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Info & Social Links */}
          <motion.div className="contact-info-section" variants={itemVariants}>
            <div className="contact-info-grid">
              {/* Get in Touch */}
              <div className="contact-info-group">
                <h3 className="info-group-title">Get in Touch</h3>
                <div className="contact-info-items">
                  <motion.div
                    className="contact-info-item"
                    onClick={handleEmailClick}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaEnvelope className="contact-icon email-icon" />
                    <div className="contact-details">
                      <span className="contact-label">Email</span>
                      <span className="contact-value">
                        {personalInfo.email}
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="contact-info-item"
                    onClick={handlePhoneClick}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaPhone className="contact-icon phone-icon" />
                    <div className="contact-details">
                      <span className="contact-label">Phone</span>
                      <span className="contact-value">
                        {personalInfo.phone}
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="contact-info-item"
                    onClick={handleLocationClick}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaMapMarkerAlt className="contact-icon location-icon" />
                    <div className="contact-details">
                      <span className="contact-label">Location</span>
                      <span className="contact-value">
                        {personalInfo.location}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Follow Me */}
              <div className="contact-info-group">
                <h3 className="info-group-title">Follow Me</h3>
                <div className="social-links">
                  <motion.a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link linkedin"
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin className="social-icon" />
                    <span>LinkedIn</span>
                  </motion.a>

                  <motion.a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link github"
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub className="social-icon" />
                    <span>GitHub</span>
                  </motion.a>
                </div>
              </div>

              {/* Relocate Info */}
              {personalInfo.openToRelocate && (
                <div className="contact-info-group">
                  <motion.div
                    className="relocate-info"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Rotating_earth_animated.gif"
                      alt="Rotating Earth"
                      className="earth-gif"
                    />
                    <span className="relocate-text">Open to Relocate</span>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="contact-form-section" variants={formVariants}>
            <div className="form-container">
              <h3 className="form-title">Send a Message</h3>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <div className="input-wrapper">
                    <FaUser className="input-icon" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-wrapper">
                    <FaEnvelope className="input-icon" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-wrapper textarea-wrapper">
                    <FaCommentDots className="input-icon" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="form-textarea"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`form-submit ${isSubmitting ? "submitting" : ""}`}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FaPaperPlane className="submit-icon" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    className="form-status success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    className="form-status error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ❌ Something went wrong. Please try again.
                  </motion.div>
                )}

                {submitStatus === "setup_needed" && (
                  <motion.div
                    className="form-status warning"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ⚠️ Email service not configured yet. Please reach out via
                    email directly: {personalInfo.email}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
