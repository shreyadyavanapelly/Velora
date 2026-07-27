import React,{useState,useContext} from "react";
import {watchlist} from "../data.js";
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp.js";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown.js";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined.js";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz.js";
import  GeneralContext  from "./GeneralContext.js";
import DoughnutChart from "./Doughnut.jsx"
const WatchList = () => {
const labels=watchlist.map((subArray)=>subArray["name"]);
  const data={
    labels,
    datasets: [
    {
      label: "Price",
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
  }
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> ({watchlist.length})/ 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem key={index} stock={stock} />;
        })}
      </ul>

      <DoughnutChart data={data}/>
    </div>
  );
};

export default WatchList;
const WatchListItem = ({ stock }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = (e) => {
    setIsHovered(true);
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
  }
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}%</span>
          {stock.isDown?(<KeyboardArrowDownIcon className="down"/>):(<KeyboardArrowUpIcon className="up"/> )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {isHovered && <WatchListActions uid={stock.name} />}
      </li>
      
  );
};
const WatchListActions=({uid})=>{
  const generalContext=useContext(GeneralContext);
  return(
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" TransitionComponent={Grow} arrow>
          <button className="action-btn buy" onClick={()=>{
            generalContext.openBuyWindow(uid)
          }}>Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" TransitionComponent={Grow} arrow>
          <button className="action-btn sell">Sell</button>
        </Tooltip>
        <Tooltip title="Graph (G)" placement="top" TransitionComponent={Grow} arrow>
          <button className="action-btn">
         <BarChartOutlinedIcon className="icon"/>
         </button>
        </Tooltip>
         <Tooltip title="More" placement="top" TransitionComponent={Grow} arrow>
          <button className="action-btn more">
             <MoreHorizIcon className="icon"/>
          </button>
        </Tooltip>
      </span>
      </span>
  )
}