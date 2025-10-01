import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import Experience from "../components/Experience/Experience";
import experienceData from "../data/sections/experience.json";

function ExperiencePage() {
  const pageVariants = {
    initial: { opacity: 0, rotateY: -90 },
    animate: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      rotateY: 90,
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
        <Experience experience={experienceData} />
      </main>
    </motion.div>
  );
}

export default ExperiencePage;
