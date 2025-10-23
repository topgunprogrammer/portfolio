import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { getTechIcon, getTechColor } from "../../data/iconMapping";
import confetti from "canvas-confetti";
import "./Hero.css";

function Hero({ personalInfo }) {
  // All the technologies from your comprehensive learning list
  const technologies = [
    // AI & ML Technologies
    "Python",
    "TensorFlow",
    "PyTorch",
    "Pandas",
    "NumPy",
    "Tableau",
    "D3.js",
    "ChatGPT",
    "AI",
    "ML",
    "NLP",
    "DeepLearning",
    "DataAnalysis",
    "DataEngineering",

    // Frontend Development
    "ReactJS",
    "Redux",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Bootstrap",
    "Webpack",
    "Babel",

    // Backend Development
    "NodeJS",
    "ExpressJS",
    "Spring",
    "SpringBoot",
    "GraphQL",

    // Databases
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "DynamoDB",

    // Cloud & DevOps
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Nginx",
    "Kong",
    "Splunk",

    // Tools & Platforms
    "Git",
    "GitHub",
    "GitLab",
    "Swagger",
    "Kafka",
    "WebSockets",

    // Mobile & Additional
    "iOS",
    "Android",
    "Database",
  ];

  // Create a CLEAN array of floating icons (SHOOTING STAR STYLE)
  const createFloatingIcons = () => {
    const icons = [];
    // Use each technology EXACTLY ONCE - no duplicates at all
    technologies.forEach((tech, index) => {
      // Spread out delays so only 10-15 icons are visible at any time
      const delayGroup = Math.floor(index / 12); // Groups of 12 icons
      const delayInGroup = index % 12;

      // Create completely random trajectories in ALL directions
      let startX, startY, endX, endY;

      // Random starting point on screen edges
      const startEdge = Math.floor(Math.random() * 4); // 4 edges: top, right, bottom, left

      switch (startEdge) {
        case 0: // Start from TOP edge
          startX = Math.random() * 100;
          startY = -15;
          break;
        case 1: // Start from RIGHT edge
          startX = 115;
          startY = Math.random() * 100;
          break;
        case 2: // Start from BOTTOM edge
          startX = Math.random() * 100;
          startY = 115;
          break;
        case 3: // Start from LEFT edge
          startX = -15;
          startY = Math.random() * 100;
          break;
        default: // Fallback to top
          startX = Math.random() * 100;
          startY = -15;
          break;
      }

      // Random ending point - anywhere on opposite side or random edge
      const endEdge = Math.floor(Math.random() * 4); // Random destination edge

      switch (endEdge) {
        case 0: // End at TOP edge
          endX = Math.random() * 100;
          endY = -15;
          break;
        case 1: // End at RIGHT edge
          endX = 115;
          endY = Math.random() * 100;
          break;
        case 2: // End at BOTTOM edge
          endX = Math.random() * 100;
          endY = 115;
          break;
        case 3: // End at LEFT edge
          endX = -15;
          endY = Math.random() * 100;
          break;
        default: // Fallback to bottom
          endX = Math.random() * 100;
          endY = 115;
          break;
      }

      icons.push({
        id: tech, // Use tech name as unique ID
        tech: tech,
        Icon: getTechIcon(tech),
        color: getTechColor(tech),
        startX: startX,
        startY: startY,
        endX: endX,
        endY: endY,
        duration: 8 + Math.random() * 6, // Slower movement: 8-14 seconds
        delay: delayGroup * 15 + delayInGroup * 1.2, // Staggered delays
        size: 20 + Math.random() * 16, // 20-36px
        opacity: 0.4 + Math.random() * 0.4, // 0.4-0.8
      });
    });
    return icons;
  };

  const floatingIcons = createFloatingIcons();

  // Floating Icon Component
  const FloatingIcon = ({ iconData }) => {
    const {
      Icon,
      color,
      startX,
      startY,
      endX,
      endY,
      duration,
      delay,
      size,
      opacity,
    } = iconData;

    return (
      <motion.div
        className="floating-icon"
        initial={{
          x: `${startX}vw`,
          y: `${startY}vh`,
          opacity: 0,
          scale: 0.5,
          rotate: 0,
        }}
        animate={{
          x: `${endX}vw`, // Straight line to end position
          y: `${endY}vh`, // Straight line to end position
          opacity: [0, opacity, opacity, 0], // Fade in, stay visible, fade out
          scale: [0.3, 1, 1, 0.3], // Grow at start, shrink at end
          rotate: 360, // Single rotation
        }}
        transition={{
          duration: duration,
          delay: delay,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          color: color,
          fontSize: `${size}px`,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <Icon />
      </motion.div>
    );
  };

  const handleDownloadResume = (event) => {
    // Get button position for confetti origin
    const rect = event.target.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    // ✨ Celebrate with a burst of stars from button! ✨
    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
      origin: { x, y },
    };
    function shoot() {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
      });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);

    // Create download link and trigger download
    const link = document.createElement("a");
    link.href = "/resume/Resume.pdf";
    link.download = "Mohan_Ram_Shanmugam_Resume.pdf";
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      className="hero-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-background">
        <div className="hero-gradient"></div>

        {/* FLOATING ICONS LAYER */}
        <div className="floating-icons-container">
          {floatingIcons.map((iconData) => (
            <FloatingIcon key={iconData.id} iconData={iconData} />
          ))}
        </div>
      </div>

      <div className="hero-content">
        <motion.div className="hero-text" variants={itemVariants}>
          <motion.div className="hero-badge" variants={itemVariants}>
            ✨ Available for new opportunities
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            {personalInfo.name}
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={itemVariants}>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000, // Wait 2s
                "Full Stack Developer | ML & AI Specialist",
                3000, // Wait 3s
                "Full Stack Developer | React Expert",
                2000, // Wait 2s
                "Full Stack Developer | Node.js Developer",
                2000, // Wait 2s
                "Full Stack Developer | Cloud Architect",
                2000, // Wait 2s
                "", // Clear text
                500, // Wait 0.5s
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
              speed={50}
              deletionSpeed={60}
            />
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            Crafting innovative solutions with 7+ years of experience in
            full-stack development. Specialized in building scalable
            applications with modern technologies.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <motion.button
              onClick={handleDownloadResume}
              className="cta-button download"
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              📄 Download Resume
            </motion.button>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <div className="stat-number">7+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">7+</div>
              <div className="stat-label">Major Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">7</div>
              <div className="stat-label">Certifications</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="hero-image-container" variants={imageVariants}>
          <div className="image-wrapper">
            <motion.div
              className="image-glow"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={"/images/profile.png"}
              alt={personalInfo.name}
              className="hero-image"
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
