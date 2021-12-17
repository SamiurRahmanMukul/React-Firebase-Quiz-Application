import React from "react";
import ReactBanner from "../../../assets/images/react-banner.png";
import Style from "./Topic.module.css";

export default function Topic() {
  return (
    <a href="/">
      <div className={Style.topic}>
        <img src={ReactBanner} alt="TopicImage" />
        <p>React.Js is JavaScript library building for user interfaces</p>

        <div className={Style.qMeta}>
          <p>10 Questions</p>
          <p>Sore: Not taken yet</p>
        </div>
      </div>
    </a>
  );
}
