import React from "react";
import { Route, Redirect } from "react-router-dom";

const ApplicationViews = props => {
    return (
      <React.Fragment>
        <Route
          path="/login"
          render={props => {
            return <Login {...props} />;
          }}
        />
        </React.Fragment>
    )}