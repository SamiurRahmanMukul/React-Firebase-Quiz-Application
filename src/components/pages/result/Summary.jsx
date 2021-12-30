import React from "react";
import SuccessImage from "../../../assets/images/success.png";
import Style from "./Summary.module.css";

export default function Summary() {
  return (
    <div className={Style.summary}>
      <div className={Style.point}>
        <p className={Style.score}>
          Your score is <br /> 5 out of 10
        </p>
      </div>

      <div className={Style.badge}>
        <img src={SuccessImage} alt="success" />
      </div>
    </div>
  );
}
