import React from "react";
const Header = ({src,name,onClick}) => {
  return (
    <div className="header bg-primary shadow d-flex justify-content-between align-items-center px-3">
      <h4 className="text-white">Order Lunch</h4>
      <div className="d-flex align-items-center justify-content-center">
        <img src={src} alt="user" className="img-fluid profile rounded-circle" />
        <div>
          <p className="font-weight-bold small px-2 my-0 text-white text-right">{name}</p>
          <p className="font-weight-bold small px-2 my-0 text-white text-right" onClick={onClick}>Sign Out</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
