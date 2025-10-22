import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionList from "../components/common/QuestionList";

function TechStackPage() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    import("../data/techstack.json").then((mod) => setData(mod));
  }, []);

  if (!data) return <div>Loading...</div>;

  // Mapping functions for QuestionList
  const getTopicTitle = (topic) => topic.title;
  const getTopicDescription = (topic) => topic.description;
  const getQuestions = (topic) => topic.questions;
  const getQuestionTitle = (q) => q.title;
  const getQuestionDescription = (q) => q.description;
  const getQuestionDifficulty = (q) => q.difficulty;
  const getQuestionTags = (q) => q.tags || [];
  const getQuestionCompanies = (q) => q.companies || [];
  const onQuestionClick = (topicIdx, qIdx, question) => {
    navigate(`/techstack/${question.routeName}`);
  };

  return (
    <div className="page-container">
      <main className="App-main">
        <QuestionList
          data={data.techStackTopics}
          getTopicTitle={getTopicTitle}
          getTopicDescription={getTopicDescription}
          getQuestions={getQuestions}
          getQuestionTitle={getQuestionTitle}
          getQuestionDescription={getQuestionDescription}
          getQuestionDifficulty={getQuestionDifficulty}
          getQuestionTags={getQuestionTags}
          getQuestionCompanies={getQuestionCompanies}
          onQuestionClick={onQuestionClick}
          sectionTitle="SDE Tech Stack"
          sectionSubtitle="Frontend (React) and Backend (Node.js) interview questions and concepts."
        />
      </main>
    </div>
  );
}

export default TechStackPage;
