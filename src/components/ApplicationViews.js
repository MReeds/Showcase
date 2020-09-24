import React from "react";
import { Route, Redirect } from "react-router-dom";
import SC_AUTH from "../components/auth/showcaseAuth";
import Home from "./home/Home";
import NewUserForm from '../components/user/newUserForm';

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
        exact path="/"
        render={props => {
            return <Home {...props}/>
        }}
        />
        <Route
        path="/NewUserForm"
        render={props => {
            return <NewUserForm {...props}/>
        }}
        />
        </React.Fragment>
    )}

export default ApplicationViews