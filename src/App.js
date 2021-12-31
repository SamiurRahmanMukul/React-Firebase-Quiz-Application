import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/home/HomePage";
import LoginPage from "./components/pages/login/LoginPage";
import QuizPage from "./components/pages/quiz/QuizPage";
import Result from "./components/pages/result/Result";
import SingupPage from "./components/pages/singup/SingupPage";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/singup" component={SingupPage} />
          <Route exact path="/quiz" component={QuizPage} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
