import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-bg.png";
import Account from "./account/Account";
import Style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={Style.nav}>
      <ul>
        <li>
          <Link to="/" className={Style.brand}>
            <img src={Logo} alt="logo" />
            <h3>Quiz App</h3>
          </Link>
        </li>
      </ul>

      {/* account component */}
      <Account />
    </nav>
  );
}
