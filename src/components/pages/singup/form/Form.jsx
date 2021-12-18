import React from "react";
import Style from "./Form.module.css";

export default function Form({ children, className, ...rest }) {
  return (
    <form className={`${className} ${Style.form}`} action="#" {...rest}>
      {children}
    </form>
  );
}
