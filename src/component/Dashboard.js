import React,{useState} from "react";
import Header from './Header';
import firebase from 'firebase';
import Order from "./Order";
import History from "./History";

const Dashboard = ({ user }) => {
  const [toggle,setToggle]=useState(0);

  return (
    <div className="Dashboard d-flex align-items-center flex-column justify-content-center">
      <Header src={user && user.photoURL} name={user && user.displayName} onClick={() => firebase.auth().signOut()} />
      <div className="d-flex my-4">
        <button className=" btn btn-primary mx-3 px-3" onClick={() => setToggle(1)}>Order Lunch</button>
        <button className=" btn btn-primary mx-3 px-3" onClick={() => setToggle(2)} >View History</button>
      </div>
      {toggle === 1 ? <Order/> : null}
      {toggle === 2 ? <History /> : null}
    </div>
  );
};

export default Dashboard;
