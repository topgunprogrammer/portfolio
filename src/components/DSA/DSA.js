import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./DSA.css";

// Import the DSA data
import dsaData from "../../data/sections/dsa.json";

function DSA() {
  const navigate = useNavigate();
  const [expandedTopics, setExpandedTopics] = useState(new Set());

  const toggleTopic = (topicId) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(topicId)) {
      newExpanded.delete(topicId);
    } else {
      newExpanded.add(topicId);
    }
    setExpandedTopics(newExpanded);
  };

  const handleQuestionClick = (question) => {
    // Use the routeName field from the JSON data
    navigate(`/dsa/${question.routeName}`);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "#4CAF50";
      case "medium":
        return "#FF9800";
      case "hard":
        return "#F44336";
      default:
        return "#667eea";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const accordionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const questionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <motion.section
      id="dsa"
      className="portfolio-section dsa-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="section-container">
        {/* Section Header */}
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Data Structures & Algorithms</h2>
          <p className="section-subtitle">
            A comprehensive collection of DSA problems organized by topics, with
            company tags and difficulty levels to help you prepare for technical
            interviews.
          </p>
        </motion.div>

        {/* DSA Topics */}
        <motion.div className="dsa-topics" variants={containerVariants}>
          {dsaData.dsaTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              className="dsa-topic-card"
              variants={itemVariants}
              whileHover={{ y: -2 }}
            >
              {/* Topic Header */}
              <motion.div
                className="topic-header"
                onClick={() => toggleTopic(topic.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="topic-info">
                  <h3 className="topic-title">{topic.title}</h3>
                  <p className="topic-description">{topic.description}</p>
                  <div className="topic-stats">
                    <span className="question-count">
                      {topic.questions.length} Questions
                    </span>
                  </div>
                </div>
                <motion.div
                  className="topic-toggle"
                  animate={{
                    rotate: expandedTopics.has(topic.id) ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Topic Questions - Accordion Content */}
              <AnimatePresence>
                {expandedTopics.has(topic.id) && (
                  <motion.div
                    className="topic-questions"
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="questions-grid">
                      {topic.questions.map((question, qIndex) => (
                        <motion.div
                          key={question.id}
                          className="question-card"
                          variants={questionVariants}
                          initial="hidden"
                          animate="visible"
                          custom={qIndex}
                          whileHover={{ y: -2 }}
                          onClick={() => handleQuestionClick(question)}
                          style={{ cursor: "pointer" }}
                        >
                          {/* Question Header */}
                          <div className="question-header">
                            <h4 className="question-title">{question.title}</h4>
                            <div
                              className="difficulty-badge"
                              style={{
                                backgroundColor: getDifficultyColor(
                                  question.difficulty
                                ),
                              }}
                            >
                              {question.difficulty}
                            </div>
                          </div>

                          {/* Question Description */}
                          <p className="question-description">
                            {question.description}
                          </p>

                          {/* Companies */}
                          <div className="question-companies">
                            <span className="companies-label">Companies:</span>
                            <div className="companies-list">
                              {question.companies.map((company) => (
                                <span key={company} className="company-tag">
                                  {company}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="question-tags">
                            {question.tags.map((tag) => (
                              <span key={tag} className="question-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default DSA;
