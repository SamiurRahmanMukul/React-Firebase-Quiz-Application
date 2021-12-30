import React from "react";
import Answer from "../quiz/answer/Answer";
import Style from "./Question.module.css";

export default function Question() {
  return (
    <div className={Style.question}>
      <div className={Style.qTitle}>
        <span className="material-icons-outlined">help_outline</span>
        Here goes the question from specific topics?
      </div>

      <Answer />
    </div>
  );
}
