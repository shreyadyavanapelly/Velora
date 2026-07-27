import React,{useState,useEffect} from "react";
import axios from "axios"
import { VerticalGraph } from "./verticalBarGraph";

const Holdings = () => {
  const [allHoldings,setAllHoldings]=useState([]);
  useEffect(() => {
  axios
    .get("https://velora-ak5w.onrender.com/allHoldings", {
      withCredentials: true,
    })
    .then((res) => {
      console.log("Axios Response:", res);
      setAllHoldings(res.data);
      console.log("Holdings Data:", res.data);
    })
    .catch((err) => {
      console.log("Axios Error:", err);
      console.log("Response:", err.response);
      console.log("Request:", err.request);
      console.log("Message:", err.message);
    });
}, []);
const labels=allHoldings.map((subArray)=>subArray["name"]);
const data={
  labels,
  datasets:[
    {
      label: "Stock Price",
      data: allHoldings.map((stock) =>stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    
  ],
};
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {allHoldings.map((stock,index) =>{
            const currValue=stock.price*stock.qty;
            const isProfit=currValue-stock.avg * stock.qty>=0.0;
            const profClass=isProfit?"profit":"loss";
            const dayClass=stock.isLoss?"loss":"profit";
            return(
              <tr key={index}>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg}</td>
            <td>{stock.price}</td>
            <td>{currValue}</td>
            <td className={profClass}>{(currValue - (stock.avg * stock.qty))}</td>
            <td className={profClass}>{(stock.net)}</td>
            <td className={dayClass}>{(stock.day)}</td>
          </tr>
          )})}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data}/>
    </>
  );
};

export default Holdings;
