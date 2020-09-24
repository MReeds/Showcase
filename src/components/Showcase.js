import React from "react";
import NavBar from "./nav/navBar";
import ApplicationViews from './ApplicationViews'

const Showcase = () => {
 
    return (
        <>
        <NavBar />
        
        {/* <div id="firebaseui-auth-container"></div> */}
        <ApplicationViews/>
        </>
    )
}

export default Showcase