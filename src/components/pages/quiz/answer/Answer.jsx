import React from "react";
import Style from "./Answer.module.css";
import CheckBox from "./CheckBox";

export default function Answer() {
  return (
    <div className={Style.answer}>
      <CheckBox className={Style.answer} text="Test Answer" />
    </div>
  );
}
