import React, { useState , useEffect } from "react";
import moment from "moment";
import firebase from "firebase";
import Loader from "./Loader"

export default function Order(user) {
  const date = moment().format("DD MMM, YYYY");
  const [lunch, setLunch] = useState(false);
  const [curd, setCurdValue] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const [loading,setLoading] = useState() 

  console.log(loading)
  useEffect( () => {
    readUserData();
   // eslint-disable-next-line react-hooks/exhaustive-deps 
 },[])
 
 const readUserData = () => {
  setLoading(true)
   firebase
     .database()
     .ref("Order/"+ user.user.displayName)
     .on("value", function (snapshot) {
       for(const property in snapshot.val()){  
          if(snapshot.val()[property].Date === moment().format('DD MMM, YYYY')  ){
            setIsOrdered(true)
          } 
         }
     });
  setLoading(false)
 };



  const handleSubmit = () => {
    const add = (lunch ? 50 : 0) + (curd ? 10 : 0);
    if(add !== 0) {  
      const order = {
        Id : user.user.refreshToken,
        User: user.user.displayName,
        Price: add,
        Date : moment().format('DD MMM, YYYY')  
      }
      firebase.database().ref("Order/"+ user.user.displayName).push(order);
      setIsOrdered(true)
    }
   
  };

  return (
    
    <div className="box shadow py-3 px-5">
      {loading ? <Loader />:
      !isOrdered ? (
        <div>
          <h4 className="text-info">Order Today's Lunch</h4>
          <h5 className="text-center small font-weight-bold text-warning">
            {date}
          </h5>
          <div className="d-flex flex-column my-3">
            <label>
              <input
                type="checkbox"
                value="50"
                onClick={(e) => setLunch(!lunch)}
              />{" "}
              Daily Lunch 
            </label>
            <label>
              <input
                type="checkbox"
                value="10"
                onClick={(e) => setCurdValue(!curd)}
              />{" "}
              Curd
            </label>
            <label>Total Amount Rs.{(lunch ? 50 : 0) + (curd ? 10 : 0)}</label>
          </div>
          <button
            type="button"
            className="btn btn-primary px-3 my-3 w-100"
            onClick={() => handleSubmit()}
            disabled = { (lunch || curd) ? false : true}
          >
            Submit
          </button>
        </div>
      ) : (
        <p className="text-success text-center p-5 ">
          Congrats !! Your Lunch has been ordered for {date}.
        </p>
      )}
    </div>
  );
}
