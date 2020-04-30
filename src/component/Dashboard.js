import React,{useState } from "react";
import Header from './Header';
import firebase from 'firebase';
import Order from "./Order";
import History from "./History";
import AdminDashboard from './AdminDashboard'; 


const Dashboard = ({ user }) => {
  const [toggle,setToggle] = useState(0);
  return (
    <div className="Dashboard d-flex align-items-center flex-column justify-content-center">
      <Header src={user && user.photoURL} name={user && user.displayName} onClick={() => firebase.auth().signOut()} />
      <div className={user==='admin' ? "w-75" : "d-flex my-4" }>
     { (user !== 'admin') ?
     <div>
        <button className=" btn btn-primary mx-3 px-3" onClick={() => setToggle(1)} >Order Lunch</button>
        <button className=" btn btn-primary mx-3 px-3" onClick={() => setToggle(2)} >View History</button>
      </div>
        :
       <AdminDashboard user={user} />
       
  }
      </div>
      {toggle === 1  ? <Order user={user} /> : null}
      {toggle === 2  ? <History  user={user}/> : null}
      
    </div>
  );
};

export default Dashboard;
