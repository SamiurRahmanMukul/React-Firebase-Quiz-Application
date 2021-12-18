import React from "react";
import Style from "./Illustration.module.css";

export default function Illustration({ image }) {
  return (
    <div className={Style.illustration}>
      <img src={image} alt="illustration" />
    </div>
  );
}
