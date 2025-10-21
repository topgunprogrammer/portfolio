import React from "react";
import { useParams } from "react-router-dom";
import DSAQuestionView from "../components/DSAQuestionView/DSAQuestionView";

function DSAQuestionPage() {
  const { questionId } = useParams();

  return (
    <div className="page-container">
      <main className="App-main">
        <DSAQuestionView questionId={questionId} />
      </main>
    </div>
  );
}

export default DSAQuestionPage;
