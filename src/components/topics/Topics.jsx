import React from "react";
import Topic from "./topic/Topic";
import Style from "./Topics.module.css";

export default function Topics() {
  return (
    <div className={Style.topics}>
      <Topic />
    </div>
  );
}
