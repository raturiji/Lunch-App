import React , {useState, useEffect} from "react";



const Main = () => {
  const [curd,setCurd] = useState(false)
  const placeOrder = () => {
    const id = new Date()
    // const order = {
    //   OrderID: id.getTime(),
    //   User: user.displayName,
    //   Curd : curd
    // };
    // firebase.database().ref("Order").push(order);
  }
  return (
    <div className="main d-flex justify-content-center flex-column align-items-center">
            <div className="d-flex justify-content-center flex-column w-50 p-5 bg-light">
                <h4>Tiffin</h4>
                <div>
                <input type="checkbox" onClick={() => setCurd(!curd)}></input>
                <label>Include Curd</label>
                </div>
            
            </div>
           
           <button className=" btn btn-success" onClick={placeOrder()}>Place Order</button>
       
    </div>
  );
};

export default Main;
