import React from "react";
import SingupImage from "../../../assets/images/singup.svg";
import Illustration from "./illustration/Illustration";
import SingupForm from "./SingupForm";

export default function SingupPage() {
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
