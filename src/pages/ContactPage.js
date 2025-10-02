import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import Contact from "../components/Contact/Contact";
import personalInfoData from "../data/sections/personalInfo.json";

function ContactPage() {
  const pageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="page-container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <main className="App-main">
        <Contact personalInfo={personalInfoData} />
      </main>
    </motion.div>
  );
}

export default ContactPage;
