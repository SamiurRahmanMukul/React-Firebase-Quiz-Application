import React from "react";
import Style from "./Analysis.module.css";
import Question from "./Question";

export default function Analysis() {
  return (
    <div className={Style.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answered 5 out of 10 questions correctly</h4>

      <Question />
    </div>
  );
}
