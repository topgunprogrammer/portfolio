import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { routes, navigationItems } from "../../router";
import "./Header.css";

function Header({ personalInfo }) {
  const location = useLocation();

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.1, duration: 0.5 },
    }),
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const navItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <motion.header
      className="header"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="header-container">
        <Link to={routes.home} className="header-link">
          <div className="profile-section">
            <motion.div
              className="profile-image-container"
              variants={imageVariants}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/profile.png`}
                alt={personalInfo.name}
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </motion.div>
            <div className="header-content">
              <motion.h1 variants={textVariants} custom={3}>
                {personalInfo.name}
              </motion.h1>
              <motion.h2 variants={textVariants} custom={4}>
                {personalInfo.title}
              </motion.h2>
            </div>
          </div>
        </Link>
        <motion.nav className="nav" variants={navVariants}>
          {navigationItems.map((item, index) => (
            <motion.div key={item.path} variants={navItemVariants}>
              <Link
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </motion.header>
  );
}

export default Header;
