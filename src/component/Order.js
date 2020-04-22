import React, { useState } from "react";
import moment from "moment";
import firebase from "firebase";

export default function Order(user) {
  const date = moment().format("DD MMM, YYYY");
  const [lunch, setLunch] = useState(0);
  const [curd, setCurdValue] = useState(0);
  const [sum, setSum] = useState(0);
  const handleSubmit = () => {
    const add = parseInt(lunch) + parseInt(curd);
    console.log(add)
    if(add !== 0) {  
      const order = {
        Id : user.user.refreshToken,
        User: user.user.displayName,
        Price: add,
        Date : moment().format('DD MMM, YYYY')  
      }
      firebase.database().ref("Order").push(order);
      setSum(add)
    }
   
  };
  console.log(sum);
  return (
    <div className="box shadow py-3 px-5">
      {sum === 0 ? (
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
                onClick={(e) => setLunch(e.target.value)}
              />{" "}
              Daily Thali 
            </label>
            <label>
              <input
                type="checkbox"
                value="10"
                onClick={(e) => setCurdValue(e.target.value)}
              />{" "}
              Curd
            </label>
          </div>
          <button
            type="button"
            class="btn btn-primary px-3 my-3 w-100"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      ) : (
        <p className="text-success text-center p-5 ">
          Congrats !! Your Lunch has been ordered for {date}.
          Rs.{sum} will automatically deducted from your monthly income.
        </p>
      )}
    </div>
  );
}
