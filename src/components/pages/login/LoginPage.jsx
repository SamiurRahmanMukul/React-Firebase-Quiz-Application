import React from "react";
import LoginImage from "../../../assets/images/login.svg";
import Illustration from "../singup/illustration/Illustration";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration image={LoginImage} />

        <LoginForm />
      </div>
    </>
  );
}
