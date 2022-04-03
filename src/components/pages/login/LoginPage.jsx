import React, { useEffect } from "react";
import LoginImage from "../../../assets/images/login.svg";
import { useAuth } from "../../../context-api/AuthContext";
import Illustration from "../singup/illustration/Illustration";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      window.location.href = "/";
    }
  }, [currentUser]);

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
