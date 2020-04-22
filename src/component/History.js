import React , {useState, useEffect} from 'react'
import firebase from "firebase";

export default function History() {
  const [data,setData] = useState(null)

  useEffect(() => {
    readUserData();
  },[])

  const readUserData = () => {
    firebase
      .database()
      .ref("Order/")
      .on("value", function (snapshot) {
        setData(snapshot.val());
      });
  };

  const displayData = () => {
    let dataArray = [] 
    for(const property in data){
      dataArray.push(data[property])
    }
    dataArray.map(item => <tr>item.Id</tr>)
  }
  return (
    <div className="w-75">
      <h1 className="text-center">History</h1>
      <h1>{displayData()}</h1>
      <table class="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Price </th>
      </tr>
    
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
    </div>
  )
}
