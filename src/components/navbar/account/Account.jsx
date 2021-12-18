import React from "react";
import Style from "./Account.module.css";

export default function Account() {
  return (
    <div className={Style.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>

      <a href="/">Singup</a>

      {/* <span className="material-icons-outlined" title="Logout">
        Logout
      </span> */}
    </div>
  );
}
