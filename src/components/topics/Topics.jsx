import React from "react";
import { Link } from "react-router-dom";
import Topic from "./topic/Topic";
import Style from "./Topics.module.css";

export default function Topics() {
  return (
    <div className={Style.topics}>
      <Link to="/quiz">
        <Topic />
      </Link>
      <Link to="/quiz">
        <Topic />
      </Link>
      <Link to="/quiz">
        <Topic />
      </Link>
      <Link to="/quiz">
        <Topic />
      </Link>
      <Link to="/quiz">
        <Topic />
      </Link>
      <Link to="/quiz">
        <Topic />
      </Link>
    </div>
  );
}
