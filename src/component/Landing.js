import React,{useState} from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const Landing = (onclick) => {
  const [loading,setLoading]=useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  const handleClick = (event) => {
    event.preventDefault()
    // console.log(event.target.password.value)
    onclick.onclick(event.target.password.value)
    console.log(onclick)
  }

  return (
    <div className="landing d-flex">
      <div className="bg-white w-50  d-flex justify-content-center align-items-center flex-column banner">
        <h1 className="font-weight-bold">Order Lunch</h1>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
        <button className=" btn btn-primary mx-3 px-5 small" onClick={() => setLoading(true)}>Login as Admin</button>
        {loading ? <div className="px-4 p-4 m-3 bg-white shadow d-flex flex-column justify-content-around">
          <form onSubmit={handleClick}>
          <input type="password" name="password" maxlength="5"/>  
          <button className=" btn btn-primary m-3 px-5 btn-sm" type="submit">Submit</button>
          </form>
           </div> 
          : null}      
      </div>
    </div>
  );
};

export default Landing;
