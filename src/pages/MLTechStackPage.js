import React, { useEffect, useState } from "react";
import QuestionList from "../components/common/QuestionList";
import { useNavigate } from "react-router-dom";

function MLTechStackPage() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    import("../data/mltechstack.json").then((mod) => setData(mod));
  }, []);

  const sectionTitle = "ML / AI Tech Stack";
  if (!data) return <div>Loading {sectionTitle}...</div>;

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
    navigate(`/mltechstack/${question.routeName}`);
  };

  return (
    <div className="page-container">
      <main className="App-main">
        <QuestionList
          data={data.mlTechStackTopics}
          getTopicTitle={getTopicTitle}
          getTopicDescription={getTopicDescription}
          getQuestions={getQuestions}
          getQuestionTitle={getQuestionTitle}
          getQuestionDescription={getQuestionDescription}
          getQuestionDifficulty={getQuestionDifficulty}
          getQuestionTags={getQuestionTags}
          getQuestionCompanies={getQuestionCompanies}
          onQuestionClick={onQuestionClick}
          sectionTitle={sectionTitle}
          sectionSubtitle="A curated set of questions and topics on machine learning and AI technologies, frameworks, and concepts."
        />
      </main>
    </div>
  );
}

export default MLTechStackPage;
