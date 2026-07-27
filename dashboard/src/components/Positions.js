import React,{useState,useEffect} from "react";
import axios from "axios";
import {positions} from "../data.js";
const Positions = () => {
  const [allPositions,setAllPositions]=useState([]);
  useEffect(() => {
  axios
    .get("http://localhost:5000/allPositions", {
      withCredentials: true,
    })
    .then((res) => {
      setAllPositions(res.data);
    })
    .catch((err) => {
      console.log("Axios Error:", err);
      console.log("Response:", err.response);
      console.log("Request:", err.request);
      console.log("Message:", err.message);
    });
}, []);
  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {allPositions.map((stock,index) =>{
                      const currValue=stock.price*stock.qty;
                      const isProfit=currValue-stock.avg * stock.qty>=0.0;
                      const profClass=isProfit?"profit":"loss";
                      const dayClass=stock.isLoss?"loss":"profit";
                      return(
                        <tr key={index}>
                      <td>{stock.product}</td>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg}</td>
                      <td>{stock.price}</td>
                      <td className={profClass}>{(currValue - (stock.avg * stock.qty))}</td>
                      <td className={dayClass}>{(stock.day)}</td>
                    </tr>
                    )})}
        </table>
      </div>
    </>
  );
};

export default Positions;
