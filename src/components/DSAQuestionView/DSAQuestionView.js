import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import dsaData from "../../data/dsa.json";
import "./DSAQuestionView.css";

function DSAQuestionView() {
  const navigate = useNavigate();
  const { questionName } = useParams();
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [dsaTopics, setDsaTopics] = useState([]);
  const [expandedTopics, setExpandedTopics] = useState(new Set());
  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    // Set DSA topics with enhanced question data
    const topics = dsaData.dsaTopics.map((topic) => ({
      ...topic,
      questions: topic.questions.map((question) => ({
        ...question,
        topicTitle: topic.title,
        topicId: topic.id,
      })),
    }));

    setDsaTopics(topics);

    // Find the selected question and auto-expand its topic
    if (questionName) {
      let foundQuestion = null;
      let foundTopicId = null;

      for (const topic of topics) {
        const question = topic.questions.find(
          (q) => q.routeName === questionName
        );
        if (question) {
          foundQuestion = question;
          foundTopicId = topic.id;
          break;
        }
      }

      setSelectedQuestion(foundQuestion);

      // Auto-expand the topic containing the selected question
      if (foundTopicId) {
        setExpandedTopics(new Set([foundTopicId]));
      }
    } else {
      // Expand first topic by default when no question is selected
      if (topics.length > 0) {
        setExpandedTopics(new Set([topics[0].id]));
      }
    }
  }, [questionName]);

  const handleQuestionClick = (question) => {
    navigate(`/dsa/${question.routeName}`);
  };

  const handleBackToMain = () => {
    navigate("/dsa");
  };

  const toggleTopic = (topicId) => {
    const newExpandedTopics = new Set(expandedTopics);
    if (newExpandedTopics.has(topicId)) {
      newExpandedTopics.delete(topicId);
    } else {
      newExpandedTopics.add(topicId);
    }
    setExpandedTopics(newExpandedTopics);
  };

  const getTotalQuestions = () => {
    return dsaTopics.reduce(
      (total, topic) => total + topic.questions.length,
      0
    );
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
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

  return (
    <div className="dsa-question-view">
      {/* Toggle Button for when sidebar is hidden */}
      {!sidebarVisible && (
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
      )}

      {/* Fixed Left Panel - Questions List */}
      {sidebarVisible && (
        <div className="questions-sidebar">
          <div className="sidebar-header">
            <div className="sidebar-header-top">
              <button className="back-btn" onClick={handleBackToMain}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 12H5m6-7l-7 7 7 7" />
                </svg>
                Back to DSA
              </button>
              <button className="sidebar-close-btn" onClick={toggleSidebar}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <h3>All Questions</h3>
            <div className="questions-count">
              {getTotalQuestions()} problems
            </div>
          </div>

          <div className="questions-list">
            {dsaTopics.map((topic) => (
              <div key={topic.id} className="topic-accordion">
                {/* Topic Header */}
                <div
                  className="topic-header"
                  onClick={() => toggleTopic(topic.id)}
                >
                  <div className="topic-header-content">
                    <h4 className="topic-title">{topic.title}</h4>
                    <span className="topic-count">
                      {topic.questions.length} problems
                    </span>
                  </div>
                  <motion.div
                    className="topic-toggle"
                    animate={{ rotate: expandedTopics.has(topic.id) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Topic Questions */}
                <AnimatePresence>
                  {expandedTopics.has(topic.id) && (
                    <motion.div
                      className="topic-questions"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {topic.questions.map((question) => (
                        <motion.div
                          key={question.id}
                          className={`question-item ${
                            selectedQuestion?.id === question.id ? "active" : ""
                          }`}
                          onClick={() => handleQuestionClick(question)}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="question-item-header">
                            <h5 className="question-item-title">
                              {question.title}
                            </h5>
                            <span
                              className="question-item-difficulty"
                              style={{
                                color: getDifficultyColor(question.difficulty),
                              }}
                            >
                              {question.difficulty}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Right Content Area */}
      <div
        className={`question-content ${
          !sidebarVisible ? "sidebar-hidden" : ""
        }`}
      >
        {selectedQuestion ? (
          <motion.div
            className="question-details"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Question Header */}
            <div className="question-header">
              <div className="question-title-section">
                <h1 className="question-title">{selectedQuestion.title}</h1>
                <div className="question-meta">
                  <span
                    className="difficulty-badge"
                    style={{
                      backgroundColor: getDifficultyColor(
                        selectedQuestion.difficulty
                      ),
                    }}
                  >
                    {selectedQuestion.difficulty}
                  </span>
                  <span className="topic-badge">
                    {selectedQuestion.topicTitle}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Container - Manages height of both panels */}
            <div className="content-container">
              {/* Split Panel Content */}
              <div className="split-content">
                {/* Left Panel - Problem Details */}
                <div className="content-left-panel">
                  <div className="problem-section">
                    <h3>📋 Problem Description</h3>
                    <div className="problem-text">
                      {selectedQuestion.detailedDescription ||
                        selectedQuestion.description}
                    </div>
                  </div>

                  {selectedQuestion.approach && (
                    <div className="problem-section">
                      <h3>🧠 Approach & Strategy</h3>
                      <div className="problem-text">
                        {selectedQuestion.approach}
                      </div>
                    </div>
                  )}

                  {selectedQuestion.solution && (
                    <div className="problem-section">
                      <h3>� Solution Explanation</h3>
                      <div className="problem-text">
                        {selectedQuestion.solution}
                      </div>
                    </div>
                  )}

                  {(selectedQuestion.timeComplexity ||
                    selectedQuestion.spaceComplexity) && (
                    <div className="problem-section">
                      <h3>⚡ Time & Space Complexity</h3>
                      {selectedQuestion.timeComplexity && (
                        <div className="complexity-item">
                          <h4>⏱️ Time Complexity</h4>
                          <div className="complexity-text">
                            {selectedQuestion.timeComplexity}
                          </div>
                        </div>
                      )}
                      {selectedQuestion.spaceComplexity && (
                        <div className="complexity-item">
                          <h4>💾 Space Complexity</h4>
                          <div className="complexity-text">
                            {selectedQuestion.spaceComplexity}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {selectedQuestion.keyInsights && (
                    <div className="problem-section">
                      <h3>🔑 Key Insights</h3>
                      <div className="problem-text">
                        {selectedQuestion.keyInsights}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Panel - Code Implementation */}
                {selectedQuestion.code && (
                  <div className="content-right-panel">
                    <div className="code-section">
                      <div className="code-header">
                        <div className="language-badge">Python</div>
                      </div>
                      <div className="code-container">
                        <SyntaxHighlighter
                          language="python"
                          style={atomDark}
                          customStyle={{
                            margin: 0,
                            padding: "2rem",
                            background: "rgba(0, 0, 0, 0.6)",
                            borderRadius: "0 0 12px 12px",
                            fontSize: "1rem",
                            lineHeight: "1.8",
                          }}
                          showLineNumbers={true}
                          lineNumberStyle={{
                            color: "rgba(255, 255, 255, 0.3)",
                            paddingRight: "1.5rem",
                            minWidth: "3rem",
                            fontSize: "0.9rem",
                          }}
                        >
                          {selectedQuestion.code}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="no-question">
            <h2>Question not found</h2>
            <p>The question "{questionName}" could not be found.</p>
            <button className="back-btn" onClick={handleBackToMain}>
              Back to DSA
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DSAQuestionView;
