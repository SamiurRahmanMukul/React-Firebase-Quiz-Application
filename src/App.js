import React from "react";
import Layout from "./components/layout/Layout";
// import HomePage from "./components/pages/home/HomePage";
// import SingupPage from "./components/pages/singup/SingupPage";
import LoginPage from "./components/pages/login/LoginPage";

function App() {
  return (
    <Layout>
      {/* <HomePage /> */}
      {/* <SingupPage /> */}
      <LoginPage />
    </Layout>
  );
}

export default App;
