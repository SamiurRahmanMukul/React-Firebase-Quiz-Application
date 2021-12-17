import React from "react";
import Navbar from "../navbar/Navbar";
import Style from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      {/* navbar component */}
      <Navbar />

      <main className={Style.main}>
        <div className={Style.container}>{children}</div>
      </main>
    </>
  );
}
