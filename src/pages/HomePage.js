import React, { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import "../App.css";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import personalInfoData from "../data/sections/personalInfo.json";
import aboutData from "../data/sections/about.json";
import projectsData from "../data/sections/projects.json";
import experienceData from "../data/sections/experience.json";

function HomePage() {
  // Auto-trigger confetti on page load for 5 seconds
  useEffect(() => {
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    // School colors - blue and white for a professional look
    const colors = ["#007bff", "#ffffff"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
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
