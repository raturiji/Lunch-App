import React, { useState , useEffect } from "react";
import moment from "moment";
import firebase from "firebase";
import axios from 'axios'
import Loader from "./Loader"

export default function Order(user) {
  const date = moment().format("DD MMM, YYYY");
  const [lunch, setLunch] = useState(false);
  const [curd, setCurdValue] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const [currentDate,setCurrentDate] = useState("")
  const [loading,setLoading] = useState(false) 

  useEffect( () => {
    readUserData();
   // eslint-disable-next-line react-hooks/exhaustive-deps 
 },[])
 const readUserData = () => {
  setLoading(true)
 
   axios.get("http://worldtimeapi.org/api/timezone/Asia/Kolkata.txt")
  .then(
    (result) => {
      const date = moment(result.data.split("\n")[2].split(' ')[1]).format('DD MMM, YYYY')
      setCurrentDate(date)
  }
  )
   firebase
     .database()
     .ref("Order/"+ user.user.displayName)
     .on("value", function (snapshot) {
       for(const property in snapshot.val()){   
         console.log(date)
          if(snapshot.val()[property].Date === date){
            console.log('working')
            setIsOrdered(true)
          } 
        }
        setLoading(false)   
     }
     
     );
  console.log(loading)
 };

  const handleSubmit = () => {
    const add = (lunch ? 50 : 0) + (curd ? 10 : 0);
    if(add !== 0) {  
      const order = {
        Id : user.user.refreshToken,
        User: user.user.displayName,
        Price: add,
        Date : currentDate
      }
      firebase.database().ref("Order/"+ user.user.displayName).push(order);
      setIsOrdered(true)
    }
   
  };

  return (
    <div className={loading ? "py-3 px-5" : "box shadow py-3 px-5"}>
      {loading ? <Loader type={"miniLoader"} />:
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
