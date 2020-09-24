import React, { useEffect, useState } from "react";
import * as firebase from "firebase/app";
import * as firebaseui from "firebaseui";

const SC_AUTH = ({ providers = ["github"], redirect_path, user }) => {
    const [ui, setUi] = useState(
      firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(firebase.auth())
    );

    useEffect(() => {
      var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          },
          uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>'
      };
      ui.start("#firebaseui-auth-container", uiConfig);
    }, []);
  
    useEffect(() => {
      return () => {
        ui.delete();
      };
    }, []);
  
    return (
      <>
        <div className="pt-auth-message">
          {user === "admin" && "Please sign in using Admin account"}
        </div>
        <div id="firebaseui-auth-container"></div>
        <div id="loader">Loading...</div>
      </>
    );
  };
  
  export default SC_AUTH;
