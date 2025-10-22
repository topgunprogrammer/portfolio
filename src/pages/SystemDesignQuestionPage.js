import React from "react";
import { useParams } from "react-router-dom";
import SystemDesignQuestionView from "../components/SystemDesignQuestionView/SystemDesignQuestionView";

function SystemDesignQuestionPage() {
  const { questionId } = useParams();

  return (
    <div className="page-container">
      <main className="App-main">
        <SystemDesignQuestionView questionId={questionId} />
      </main>
    </div>
  );
}
export default SystemDesignQuestionPage;
