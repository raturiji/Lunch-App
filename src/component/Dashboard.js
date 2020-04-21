import React from "react";
import Header from './Header'
import SideBar from "./SideBar";
import Main from "./Main";


const Dashboard = (user) => {
  
  return (
    <div className="Dashboard d-flex align-items-center flex-column justify-content-center">
        <Header />
        <div className="dashboard-content d-flex  w-100">
            <SideBar />
            <Main />
        </div>
    </div>
  );
};

export default Dashboard;
