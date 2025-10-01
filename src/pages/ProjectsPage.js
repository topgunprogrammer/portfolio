import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import Projects from "../components/Projects/Projects";
import projectsData from "../data/sections/projects.json";

function ProjectsPage() {
  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: 100,
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
        <Projects projects={projectsData} />
      </main>
    </motion.div>
  );
}

export default ProjectsPage;
