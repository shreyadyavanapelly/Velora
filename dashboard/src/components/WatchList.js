import {React,useState} from "react";
import {watchlist} from "../data.js";
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp.js";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown.js";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined.js";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz.js";
const WatchList = () => {
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
  return(
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" TransitionComponent={Grow} arrow>
          <button className="action-btn buy">Buy</button>
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