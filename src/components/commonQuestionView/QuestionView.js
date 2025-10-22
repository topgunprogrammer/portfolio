import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const QuestionView = ({
  sidebarVisible,
  onSidebarToggle,
  onBack,
  topics = [],
  expandedTopics = new Set(),
  selectedQuestion,
  onQuestionClick,
  toggleTopic,
  getDifficultyColor = (difficulty) => {
    switch ((difficulty || "").toLowerCase()) {
      case "easy":
        return "#4CAF50";
      case "medium":
        return "#FF9800";
      case "hard":
        return "#F44336";
      default:
        return "#667eea";
    }
  },
  getQuestionTitle = (q) => q.title,
  getQuestionDifficulty = (q) => q.difficulty,
  getQuestionDescription = (q) => q.detailedDescription || q.description,
  getQuestionApproach = (q) => q.approach,
  getQuestionSolution = (q) => q.solution,
  getQuestionTimeComplexity = (q) => q.timeComplexity,
  getQuestionSpaceComplexity = (q) => q.spaceComplexity,
  getQuestionKeyInsights = (q) => q.keyInsights,
  getQuestionCode = (q) => q.code,
  getQuestionTopicTitle = (q) => q.topicTitle,
  getQuestionRouteName = (q) => q.routeName,
  getQuestionId = (q) => q.id,
  getTopicId = (t) => t.id,
  getTopicTitle = (t) => t.title,
  getQuestions = (t) => t.questions,
  getTotalQuestions = () =>
    topics.reduce((total, topic) => total + getQuestions(topic).length, 0),
  questionName,
}) => {
  // Carbon copy sidebar/overlay logic from DSAQuestionView.js
  return (
    <div className="dsa-question-view">
      {/* Desktop Toggle Button - for when sidebar is hidden on desktop */}
      {!sidebarVisible && (
        <button
          className="desktop-sidebar-toggle-btn"
          onClick={onSidebarToggle}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
      )}

      {/* Mobile Overlay */}
      {sidebarVisible && (
        <div
          className="mobile-sidebar-overlay"
          onClick={() => onSidebarToggle()}
        />
      )}

      {/* Fixed Left Panel - Questions List */}
      <div className={`questions-sidebar ${sidebarVisible ? "visible" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-header-top">
            <button className="back-btn" onClick={onBack}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 12H5m6-7l-7 7 7 7" />
              </svg>
              Back
            </button>
            <button className="sidebar-close-btn" onClick={onSidebarToggle}>
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
          <div className="questions-count">{getTotalQuestions()} problems</div>
        </div>

        <div className="questions-list">
          {topics.map((topic) => (
            <div key={getTopicId(topic)} className="topic-accordion">
              {/* Topic Header */}
              <div
                className="topic-header"
                onClick={() => toggleTopic(getTopicId(topic))}
              >
                <div className="topic-header-content">
                  <h4 className="topic-title">{getTopicTitle(topic)}</h4>
                  <span className="topic-count">
                    {getQuestions(topic).length} problems
                  </span>
                </div>
                <motion.div
                  className="topic-toggle"
                  animate={{
                    rotate: expandedTopics.has(getTopicId(topic)) ? 180 : 0,
                  }}
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
                {expandedTopics.has(getTopicId(topic)) && (
                  <motion.div
                    className="topic-questions"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {getQuestions(topic).map((question) => (
                      <motion.div
                        key={getQuestionId(question)}
                        className={`question-item ${
                          selectedQuestion?.id === getQuestionId(question)
                            ? "active"
                            : ""
                        }`}
                        onClick={() => onQuestionClick(question)}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="question-item-header">
                          <h5 className="question-item-title">
                            {getQuestionTitle(question)}
                          </h5>
                          <span
                            className="question-item-difficulty"
                            style={{
                              color: getDifficultyColor(
                                getQuestionDifficulty(question)
                              ),
                            }}
                          >
                            {getQuestionDifficulty(question)}
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
                <h1 className="question-title">
                  {getQuestionTitle(selectedQuestion)}
                </h1>
                <div className="question-meta">
                  <span
                    className="difficulty-badge"
                    style={{
                      backgroundColor: getDifficultyColor(
                        getQuestionDifficulty(selectedQuestion)
                      ),
                    }}
                  >
                    {getQuestionDifficulty(selectedQuestion)}
                  </span>
                  <span className="topic-badge">
                    {getQuestionTopicTitle(selectedQuestion)}
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
                      {getQuestionDescription(selectedQuestion)}
                    </div>
                  </div>

                  {getQuestionApproach(selectedQuestion) && (
                    <div className="problem-section">
                      <h3>🧠 Approach & Strategy</h3>
                      <div className="problem-text">
                        {getQuestionApproach(selectedQuestion)}
                      </div>
                    </div>
                  )}

                  {getQuestionSolution(selectedQuestion) && (
                    <div className="problem-section">
                      <h3>� Solution Explanation</h3>
                      <div className="problem-text">
                        {getQuestionSolution(selectedQuestion)}
                      </div>
                    </div>
                  )}

                  {(getQuestionTimeComplexity(selectedQuestion) ||
                    getQuestionSpaceComplexity(selectedQuestion)) && (
                    <div className="problem-section">
                      <h3>⚡ Time & Space Complexity</h3>
                      {getQuestionTimeComplexity(selectedQuestion) && (
                        <div className="complexity-item">
                          <h4>⏱️ Time Complexity</h4>
                          <div className="complexity-text">
                            {getQuestionTimeComplexity(selectedQuestion)}
                          </div>
                        </div>
                      )}
                      {getQuestionSpaceComplexity(selectedQuestion) && (
                        <div className="complexity-item">
                          <h4>💾 Space Complexity</h4>
                          <div className="complexity-text">
                            {getQuestionSpaceComplexity(selectedQuestion)}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {getQuestionKeyInsights(selectedQuestion) && (
                    <div className="problem-section">
                      <h3>🔑 Key Insights</h3>
                      <div className="problem-text">
                        {getQuestionKeyInsights(selectedQuestion)}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Panel - Code Implementation */}
                {getQuestionCode(selectedQuestion) && (
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
                          {getQuestionCode(selectedQuestion)}
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
            <button className="back-btn" onClick={onBack}>
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

QuestionView.propTypes = {
  sidebarVisible: PropTypes.bool.isRequired,
  onSidebarToggle: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  topics: PropTypes.array.isRequired,
  expandedTopics: PropTypes.object.isRequired,
  selectedQuestion: PropTypes.object,
  onQuestionClick: PropTypes.func.isRequired,
  toggleTopic: PropTypes.func.isRequired,
  getDifficultyColor: PropTypes.func,
  getQuestionTitle: PropTypes.func,
  getQuestionDifficulty: PropTypes.func,
  getQuestionDescription: PropTypes.func,
  getQuestionApproach: PropTypes.func,
  getQuestionSolution: PropTypes.func,
  getQuestionTimeComplexity: PropTypes.func,
  getQuestionSpaceComplexity: PropTypes.func,
  getQuestionKeyInsights: PropTypes.func,
  getQuestionCode: PropTypes.func,
  getQuestionTopicTitle: PropTypes.func,
  getQuestionRouteName: PropTypes.func,
  getQuestionId: PropTypes.func,
  getTopicId: PropTypes.func,
  getTopicTitle: PropTypes.func,
  getQuestions: PropTypes.func,
  getTotalQuestions: PropTypes.func,
  questionName: PropTypes.string,
};

export default QuestionView;
