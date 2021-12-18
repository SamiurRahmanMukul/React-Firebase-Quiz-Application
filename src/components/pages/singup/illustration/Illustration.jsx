import React from "react";
import SingupImage from "../../../../assets/images/singup.svg";
import Style from "./Illustration.module.css";

export default function Illustration() {
  return (
    <div className={Style.illustration}>
      <img src={SingupImage} alt="singup" />
    </div>
  );
}
