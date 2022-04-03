import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../context-api/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return currentUser ? <Route {...rest}>{(props) => <Component {...props} />}</Route> : <Redirect to="/login" />;
};

export default PrivateRoute;
