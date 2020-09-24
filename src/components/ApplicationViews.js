import React from "react";
import { Route, Redirect } from "react-router-dom";
import SC_AUTH from "../components/auth/showcaseAuth";
import Home from "./home/Home";

const ApplicationViews = props => {
    return (
      <React.Fragment>
        <Route
          path="/login"
          render={props => {
            return <SC_AUTH providers={["github"]} redirect_path={""} />;
          }}
        />
        <Route
        path=""
        render={props => {
            return <Home {...props}/>
        }}
        />
        </React.Fragment>
    )}

export default ApplicationViews