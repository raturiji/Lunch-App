import React from "react";
import Header from './Header'
import SideBar from "./SideBar";
import Main from "./Main";


const Dashboard = (user) => {
  console.log(user.user.email)
  return (
    <div className="Dashboard d-flex align-items-center flex-column justify-content-center">
        <Header user={user} />
        <div className="dashboard-content d-flex  w-100">
            <SideBar />
            <Main user={user}/>
        </div>
    </div>
  );
};

export default Dashboard;
