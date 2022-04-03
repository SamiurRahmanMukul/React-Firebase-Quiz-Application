import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context-api/AuthContext";
import Style from "./Account.module.css";

export default function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={Style.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span className="material-icons-outlined" title="Logout" onClick={logout}>
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/singup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
