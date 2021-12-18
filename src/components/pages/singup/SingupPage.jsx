import React from "react";
import Button from "./button/Button";
import Checkbox from "./check-box/CheckBox";
import Form from "./form/Form";
import Illustration from "./illustration/Illustration";
import Style from "./SingupPage.module.css";
import TextInput from "./text-input/TextInput";

export default function SingupPage() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration />
        <Form className={Style.singup}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />

          <Checkbox text="I agree to the terms and conditions" />

          <Button>Create account</Button>

          <div className="info">
            Already have an account? <a href="/">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
