import React from "react";
import { Link } from "react-router-dom";
import LoginImage from "../../../assets/images/login.svg";
import Button from "../singup/button/Button";
import Form from "../singup/form/Form";
import Illustration from "../singup/illustration/Illustration";
import TextInput from "../singup/text-input/TextInput";
import Style from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration image={LoginImage} />

        <Form className={Style.login}>
          <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <Button>Login Now</Button>

          <div className="info">
            Don't have an account? <Link to="/singup">Singup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
