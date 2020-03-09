import React from "react";
import { Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function Registry() {
  return (
    <React.Fragment>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={SignIn} />
    </React.Fragment>
  );
}
