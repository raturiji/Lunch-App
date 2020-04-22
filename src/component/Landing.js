import React from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const Landing = () => {
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  };
  return (
    <div className="landing d-flex align-items-center flex-column justify-content-center">
        <h1 className="text-white ">Have Lunch</h1>
      <StyledFirebaseAuth 
         uiConfig={uiConfig}
         firebaseAuth={firebase.auth()}
      />
    </div>
  );
};

export default Landing;
