import React from "react";
import Layout from "./components/layout/Layout";
// import HomePage from "./components/pages/home/HomePage";
import SingupPage from "./components/pages/singup/SingupPage";

function App() {
  return (
    <Layout>
      {/* <HomePage /> */}
      <SingupPage />
    </Layout>
  );
}

export default App;
