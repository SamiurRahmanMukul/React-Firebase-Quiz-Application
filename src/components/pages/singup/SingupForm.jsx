import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context-api/AuthContext";
import Button from "./button/Button";
import Checkbox from "./check-box/CheckBox";
import Form from "./form/Form";
import Style from "./SingupForm.module.css";
import TextInput from "./text-input/TextInput";

function SingupForm() {
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmedPassword, setConfirmedPassword] = React.useState("");
  const [agree, setAgree] = React.useState("");

  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState();

  const { signup } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmedPassword) {
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(userName, email, password);
      window.location = "/";
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }

  return (
    <Form className={Style.singup} onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}

      <br />

      <TextInput type="text" required placeholder="Enter name" icon="person" value={userName} onChange={(e) => setUserName(e.target.value)} />

      <TextInput type="email" required placeholder="Enter email" icon="alternate_email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <TextInput type="password" required placeholder="Enter password" icon="lock" value={password} onChange={(e) => setPassword(e.target.value)} />

      <TextInput type="password" required placeholder="Confirm password" icon="lock_clock" value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)} />

      <Checkbox text="I agree to the terms and conditions" required value={agree} onChange={(e) => setAgree(e.target.value)} />

      <Button disabled={loading} type="submit">
        <span>Create account</span>
      </Button>

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}

export default SingupForm;
