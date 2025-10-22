import React, { useEffect, useState } from "react";
import QuestionView from "../components/commonQuestionView/QuestionView";
import { useParams, useNavigate } from "react-router-dom";

function MLTechStackQuestionPage() {
  const { routeName } = useParams();
  // const [data, setData] = useState(null);
  const [topics, setTopics] = useState([]);
  const [expandedTopics, setExpandedTopics] = useState(new Set());
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    import("../data/mltechstack.json").then((mod) => {
      // Add topicTitle and topicId to each question for sidebar display
      const topicsWithMeta = (mod.mlTechStackTopics || []).map((topic) => ({
        ...topic,
        questions: (topic.questions || []).map((q) => ({
          ...q,
          topicTitle: topic.title,
          topicId: topic.id,
        })),
      }));
      setTopics(topicsWithMeta);

      // Find selected question and expand its topic
      let found = null;
      let foundTopicId = null;
      for (const topic of topicsWithMeta) {
        const question = topic.questions.find((q) => q.routeName === routeName);
        if (question) {
          found = question;
          foundTopicId = topic.id;
          break;
        }
      }
      setSelectedQuestion(found);
      if (foundTopicId) {
        setExpandedTopics(new Set([foundTopicId]));
      } else if (topicsWithMeta.length > 0) {
        setExpandedTopics(new Set([topicsWithMeta[0].id]));
      }
    });
  }, [routeName]);

  const handleQuestionClick = (question) => {
    navigate(`/mltechstack/${question.routeName}`);
    if (window.innerWidth <= 768) setSidebarVisible(false);
  };

  const handleBackToMain = () => {
    navigate("/mltechstack");
  };

  const toggleTopic = (topicId) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(topicId)) {
      newExpanded.delete(topicId);
    } else {
      newExpanded.add(topicId);
    }
    setExpandedTopics(newExpanded);
  };

  const getTotalQuestions = () =>
    topics.reduce((total, topic) => total + (topic.questions || []).length, 0);

  const getDifficultyColor = (difficulty) => {
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
  };

  // Mapping functions for QuestionView
  const getTopicTitle = (topic) => topic.title;
  const getTopicDescription = (topic) => topic.description;
  const getQuestions = (topic) => topic.questions;
  const getQuestionTitle = (q) => q.title;
  const getQuestionDescription = (q) => q.detailedDescription || q.description;
  const getQuestionDifficulty = (q) => q.difficulty;
  // const getQuestionTags = (q) => q.tags || [];
  // const getQuestionCompanies = (q) => q.companies || [];
  const getQuestionApproach = (q) => q.approach;
  const getQuestionSolution = (q) => q.solution;
  const getQuestionTimeComplexity = (q) => q.timeComplexity;
  const getQuestionSpaceComplexity = (q) => q.spaceComplexity;
  const getQuestionKeyInsights = (q) => q.keyInsights;
  const getQuestionCode = (q) => q.code;
  const getQuestionTopicTitle = (q) => q.topicTitle;
  const getQuestionRouteName = (q) => q.routeName;
  const getQuestionId = (q) => q.id;
  const getTopicId = (t) => t.id;

  if (!selectedQuestion) return <div>Question not found.</div>;

  return (
    <div className="page-container">
      <main className="App-main">
        <QuestionView
          sidebarVisible={sidebarVisible}
          onSidebarToggle={() => setSidebarVisible((v) => !v)}
          onBack={handleBackToMain}
          topics={topics}
          expandedTopics={expandedTopics}
          selectedQuestion={selectedQuestion}
          onQuestionClick={handleQuestionClick}
          toggleTopic={toggleTopic}
          getDifficultyColor={getDifficultyColor}
          getQuestionTitle={getQuestionTitle}
          getQuestionDifficulty={getQuestionDifficulty}
          getQuestionDescription={getQuestionDescription}
          getQuestionApproach={getQuestionApproach}
          getQuestionSolution={getQuestionSolution}
          getQuestionTimeComplexity={getQuestionTimeComplexity}
          getQuestionSpaceComplexity={getQuestionSpaceComplexity}
          getQuestionKeyInsights={getQuestionKeyInsights}
          getQuestionCode={getQuestionCode}
          getQuestionTopicTitle={getQuestionTopicTitle}
          getQuestionRouteName={getQuestionRouteName}
          getQuestionId={getQuestionId}
          getTopicId={getTopicId}
          getTopicTitle={getTopicTitle}
          getTopicDescription={getTopicDescription}
          getQuestions={getQuestions}
          getTotalQuestions={getTotalQuestions}
        />
      </main>
    </div>
  );
}

export default MLTechStackQuestionPage;
