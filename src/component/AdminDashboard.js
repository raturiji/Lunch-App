import React, { useState, useEffect } from 'react'
import firebase from "firebase";
import Grid from "./Grid";

export default function History(user) {
  const [data, setData] = useState(null)
  const [gridUser,setGridUser] = useState(null)

  useEffect(() => {
    readUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const totalPrice = (item) => {
    let price = 0;
    for (const property in Object.values(item)[0]){
      price = price + Object.values(item)[0][property].Price
      console.log(Object.values(item)[0][property].Price)
    }
    return price
  }

  const readUserData = () => {
    firebase
      .database()
      .ref("Order/")
      .on("value", function (snapshot) {
        console.log(snapshot.val())
        const dataArray = [];
        for (const property in snapshot.val()) {
        
             dataArray.push({ [property] : snapshot.val()[property]})
          }
          setData(dataArray)
        // const dataArray = [];
        // let prices = 0
        // for (const property in snapshot.val()) {
        //   dataArray.push(snapshot.val()[property])
        //   prices = prices + snapshot.val()[property].Price
        //   console.log(prices)
        // }
        // setPrice(prices)
        // setData(dataArray);
      });
  };

  (data === null) ? console.log('data') :console.log(Object.values(data))

  console.log(gridUser)
  return (
    <div className="w-75">
      <h1 className="text-center">Order History</h1>
    {gridUser === null ? 
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Price</th>
            <th>Payment Status </th>
            <th>View Grid</th>
          </tr>
        </thead>
        <tbody>
          {data !== null ? data.map(item => <tr>
            <td>{Object.keys(item)[0]}</td>
            <td>{totalPrice(item)}</td>
            <td>Paid / Pending</td>
            <td onClick={() => setGridUser(item)} className="text-info">View Grid</td>
          </tr>)
            : <tr>
              <td>Fetching Name</td>
              <td>Fetching Price}</td>
              <td>Paid / Pending</td>
              <td>View Grid</td>
            </tr>}
        </tbody>
      </table>
      : <Grid user={gridUser} />}
    </div>
  )
}
