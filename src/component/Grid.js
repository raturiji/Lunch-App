import React, { useState , useEffect } from "react";



export default function Grid(user) {
  const [data, setData] = useState(null);
  const [prices, setPrices] = useState(0);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const username = Object.keys(user.user)[0];

  const fetchData = () => {
    let dataArray = [];
    let prices = 0;
    for (const property in user.user[username]) {
      dataArray.push(user.user[username][property]);
      prices = prices + user.user[username][property].Price;
    }
    setData(dataArray);
    setPrices(prices);
  };
  console.log(user.user[username]);
  return (
    <div className="w-75">
      <h1 className="text-center">{Object.keys(user.user)[0]}</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Price(Rs.{prices === 0 ? 0 : prices}) </th>
          </tr>
        </thead>
        <tbody>
          {data !== null ? (
            data.map((item) => (
              <tr key={item.key}>
                <td>{item.User}</td>
                <td>{item.Date}</td>
                <td>{item.Price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Fetching Name</td>
              <td>Fetching Data</td>
              <td>Fetching Price}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
