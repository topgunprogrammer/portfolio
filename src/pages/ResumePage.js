import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import Resume from "../components/Resume/Resume";

function ResumePage() {
  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -50,
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
        <Resume />
      </main>
    </motion.div>
  );
}

export default ResumePage;
