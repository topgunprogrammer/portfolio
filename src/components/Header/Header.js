import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { routes, navigationItems } from "../../router/AppRoutes";
// ...existing code...
import "./Header.css";

function Header({ personalInfo }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Removed isMobile and setIsMobile as they are unused

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      // setIsMobile(window.innerWidth <= 768); // removed unused
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // 🔝 Scroll to top function for all navigation
  const handleNavigationClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false); // Close menu on navigation
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
        <Link
          to={routes.home}
          className="header-link"
          onClick={handleNavigationClick}
        >
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

        {/* Desktop Navigation */}
        <motion.nav className="nav desktop-nav" variants={navVariants}>
          {navigationItems.map((item, index) => (
            <motion.div key={item.path} variants={navItemVariants}>
              <Link
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onClick={handleNavigationClick}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
          ></span>
          <span
            className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
          ></span>
          <span
            className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={toggleMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="mobile-nav-content">
              <div className="mobile-nav-header">
                <h3>Navigation</h3>
                <button
                  className="mobile-close-button"
                  onClick={toggleMobileMenu}
                  aria-label="Close mobile menu"
                >
                  ×
                </button>
              </div>
              <div className="mobile-nav-links">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`mobile-nav-link ${
                        location.pathname === item.path ? "active" : ""
                      }`}
                      onClick={handleNavigationClick}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
