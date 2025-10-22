import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuestionView from "../components/commonQuestionView/QuestionView";

function TechStackQuestionPage() {
  const { questionName } = useParams();
  const [data, setData] = useState(null);
  const [topics, setTopics] = useState([]);
  const [expandedTopics, setExpandedTopics] = useState(new Set());
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const navigate = useNavigate();

  // Responsive sidebar visibility
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setSidebarVisible(!mobile);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Load data and set topics
  useEffect(() => {
    import("../data/techstack.json").then((mod) => {
      const loadedTopics = (mod.techStackTopics || []).map((topic) => ({
        ...topic,
        questions: (topic.questions || []).map((question) => ({
          ...question,
          topicTitle: topic.title,
          topicId: topic.id,
        })),
      }));
      setData(mod);
      setTopics(loadedTopics);

      // Find selected question and expand its topic
      let foundQuestion = null;
      let foundTopicId = null;
      for (const topic of loadedTopics) {
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
      if (foundTopicId) {
        setExpandedTopics(new Set([foundTopicId]));
      } else if (loadedTopics.length > 0) {
        setExpandedTopics(new Set([loadedTopics[0].id]));
      }
      if (!foundQuestion) navigate("/techstack");
    });
  }, [questionName, navigate]);

  // Sidebar toggle
  const onSidebarToggle = useCallback(() => {
    setSidebarVisible((v) => !v);
  }, []);

  // Back button
  const onBack = useCallback(() => {
    navigate("/techstack");
  }, [navigate]);

  // Topic accordion toggle
  const toggleTopic = useCallback((topicId) => {
    setExpandedTopics((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(topicId)) {
        newSet.delete(topicId);
      } else {
        newSet.add(topicId);
      }
      return newSet;
    });
  }, []);

  // Question click
  const onQuestionClick = useCallback(
    (question) => {
      navigate(`/techstack/${question.routeName}`);
      // Hide sidebar on mobile after selecting a question
      if (window.innerWidth <= 768) {
        setSidebarVisible(false);
      }
    },
    [navigate]
  );

  // Field mappers for generic QuestionView
  const getQuestionTitle = (q) => q.title;
  const getQuestionDifficulty = (q) => q.difficulty;
  const getQuestionDescription = (q) => q.detailedDescription || q.description;
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
  const getTopicTitle = (t) => t.title;
  const getQuestions = (t) => t.questions;
  const getTotalQuestions = () =>
    topics.reduce((total, topic) => total + getQuestions(topic).length, 0);

  if (!data || !selectedQuestion) return <div>Loading...</div>;

  return (
    <QuestionView
      sidebarVisible={sidebarVisible}
      onSidebarToggle={onSidebarToggle}
      onBack={onBack}
      topics={topics}
      expandedTopics={expandedTopics}
      selectedQuestion={selectedQuestion}
      onQuestionClick={onQuestionClick}
      toggleTopic={toggleTopic}
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
      getQuestions={getQuestions}
      getTotalQuestions={getTotalQuestions}
      questionName={questionName}
    />
  );
}

export default TechStackQuestionPage;
