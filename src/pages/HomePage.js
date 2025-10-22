import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import personalInfoData from "../data/personalInfo.json";
import aboutData from "../data/about.json";
import projectsData from "../data/projects.json";
import experienceData from "../data/experience.json";

function HomePage() {
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
      className="page-container home-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero personalInfo={personalInfoData} />
      <main className="App-main">
        <About about={aboutData} />
        <Projects projects={projectsData} />
        <Experience experience={experienceData} />
        <Contact personalInfo={personalInfoData} />
      </main>
    </motion.div>
  );
}

export default HomePage;
