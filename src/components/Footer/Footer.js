import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

function Footer({ personalInfo }) {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.p
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        &copy; {currentYear} {personalInfo.name}. All rights reserved.
      </motion.p>
    </motion.footer>
  );
}

export default Footer;
