import React, { useEffect } from "react";
import SingupImage from "../../../assets/images/singup.svg";
import { useAuth } from "../../../context-api/AuthContext";
import Illustration from "./illustration/Illustration";
import SingupForm from "./SingupForm";

export default function SingupPage() {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      window.location.href = "/";
    }
  }, [currentUser]);

  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration image={SingupImage} />
        <SingupForm />
      </div>
    </>
  );
}
