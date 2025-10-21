import React, { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
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
  // Auto-trigger confetti on page load for 5 seconds
  useEffect(() => {
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    // Full spectrum rainbow colors for a vibrant celebration
    const colors = [
      "#FF0000", // Pure Red
      "#FFFFFF", // White
      "#0000FF", // Pure Blue
      "#00FF00", // Pure Green
      "#FF69B4", // Hot Pink
      "#800080", // Purple
      "#FFA500", // Orange
      "#FFFF00", // Pure Yellow
      "#00FFFF", // Cyan
      "#FF1493", // Deep Pink
      "#32CD32", // Lime Green
      "#1E90FF", // Dodger Blue
      "#FFB6C1", // Light Pink
      "#98FB98", // Pale Green
      "#87CEEB", // Sky Blue
      "#DDA0DD", // Plum
      "#F0E68C", // Khaki
      "#40E0D0", // Turquoise
    ];

    (function frame() {
      // Get random subset of colors for left side
      const leftColors = colors
        .slice()
        .sort(() => 0.5 - Math.random())
        .slice(0, 6);
      // Get different random subset for right side
      const rightColors = colors
        .slice()
        .sort(() => 0.5 - Math.random())
        .slice(0, 6);

      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: leftColors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: rightColors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);
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
