import React from "react";
import Answer from "./answer/Answer";
import ProgressBar from "./progress-bar/ProgressBar";
import "./QuizPage.module.css";

export default function QuizPage() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Films</h1>
      <h4>Question can have multiple answer</h4>

      <Answer />
      <ProgressBar />
    </>
  );
}
