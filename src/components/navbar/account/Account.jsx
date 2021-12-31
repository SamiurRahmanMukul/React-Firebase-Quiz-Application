import React from "react";
import { Link } from "react-router-dom";
import Style from "./Account.module.css";

export default function Account() {
  return (
    <div className={Style.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>

      <Link to="/login">Login</Link>
      <Link to="/singup">Singup</Link>

      {/* <span className="material-icons-outlined" title="Logout">
        Logout
      </span> */}
    </div>
  );
}
