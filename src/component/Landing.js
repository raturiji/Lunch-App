import React,{useState} from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const Landing = () => {
  const [loading,setLoading]=useState(false);
  const [password, setPassword] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  const closeModal=()=>{
    setLoading(!loading)
    setPassword(password);
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
        {loading ? <div className="px-4 p-4 m-3 bg-white shadow d-flex flex-column justify-content-around"><input type="password" onChange={e=> setPassword(e.target.value)} maxlength="4"/>  <button className=" btn btn-primary m-3 px-5 btn-sm" onClick={() => closeModal()}>Submit</button> </div> : null}
      </div>
    </div>
  );
};

export default Landing;
