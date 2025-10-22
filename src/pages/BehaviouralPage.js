import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionList from "../components/common/QuestionList";

function BehaviouralPage() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    import("../data/behavioural.json").then((mod) => setData(mod));
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
    navigate(`/behavioural/${question.routeName}`);
  };

  return (
    <div className="page-container">
      <main className="App-main">
        <QuestionList
          data={data.behaviouralTopics}
          getTopicTitle={getTopicTitle}
          getTopicDescription={getTopicDescription}
          getQuestions={getQuestions}
          getQuestionTitle={getQuestionTitle}
          getQuestionDescription={getQuestionDescription}
          getQuestionDifficulty={getQuestionDifficulty}
          getQuestionTags={getQuestionTags}
          getQuestionCompanies={getQuestionCompanies}
          onQuestionClick={onQuestionClick}
          sectionTitle="Behavioural Interview Questions"
          sectionSubtitle="A curated set of behavioural and HR questions to help you prepare for the non-technical side of interviews."
        />
      </main>
    </div>
  );
}

export default BehaviouralPage;
