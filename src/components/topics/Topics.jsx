import React from "react";
import { Link } from "react-router-dom";
import useTopicsList from "../../hooks/useTopicsList";
import Topic from "./topic/Topic";
import Style from "./Topics.module.css";

export default function Topics() {
  const { loading, error, videos } = useTopicsList();
  console.log(videos);
  console.log(loading);
  console.log(error);

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
