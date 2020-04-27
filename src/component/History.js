import React , {useState, useEffect} from 'react'
import firebase from "firebase";
import Loader from "./Loader"

export default function History(user) {
  const [data,setData] = useState(null)
  const [price,setPrice] = useState(0)
  const [loading,setLoading] = useState(false) 

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
        const dataArray = [];
        let prices = 0
        for(const property in snapshot.val()){  
              dataArray.push(snapshot.val()[property])
               prices = prices + snapshot.val()[property].Price
               setLoading(false)
          }
          setPrice(prices)
        setData(dataArray);
      });
  };

  return (
    <div className="w-75">
      <h1 className="text-center">Order History</h1>
      <table className="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Price(Rs.{price===0 ? 0 : price}) </th>
      </tr>
      
    </thead>
    <tbody>
      {data!==null ? data.map(item => <tr key={item.key}>
      <td>{item.User}</td>
      <td>{item.Date}</td>
      <td>{item.Price}</td>
   </tr>)
   : loading ? <Loader type="miniLoader" /> : <tr>
   <td>Fetching Name</td>
   <td>Fetching Data</td>
   <td>Fetching Price}</td>
</tr>}
    </tbody>
  </table>
    </div>
  )
}
