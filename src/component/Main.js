import React from "react";



const main = () => {
  
  return (
    <div className="main d-flex justify-content-center flex-column align-items-center">
            <div className="d-flex justify-content-center flex-column w-50 bg-light">
                <h4>Tiffin</h4>
            <input type="checkbox"></input>
            <label>Include Curd</label>
            </div>
           
           <button className=" btn btn-success" >Place Order</button>
       
    </div>
  );
};

export default main;
