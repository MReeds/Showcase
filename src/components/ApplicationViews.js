import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./home/Home";
import NewUserForm from '../components/user/newUserForm';
import {UserProvider} from "./user/userDataProvider";

const ApplicationViews = props => {
    return (

      <UserProvider>
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
        </UserProvider>
    )}

export default ApplicationViews