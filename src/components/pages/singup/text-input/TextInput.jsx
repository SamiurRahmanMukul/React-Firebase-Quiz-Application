import React from "react";
import Style from "./TextInput.module.css";

export default function TextInput({ icon, ...rest }) {
  return (
    <div className={Style.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined">{icon}</span>
    </div>
  );
}
