import React,{useState} from "react";
import {Link} from "react-router-dom";
const Menu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };
 const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }
  const menuClass="menu";
  const activeMenuClass="menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <ul>
          <Link to="/" onClick={() => handleMenuClick(0)}>
            <li className={selectedMenu === 0 ? activeMenuClass : menuClass}>
              <p>Dashboard</p>
            </li>
          </Link>
          <Link to="/orders" onClick={() => handleMenuClick(1)}>
            <li className={selectedMenu === 1 ? activeMenuClass : menuClass}>
              <p>Orders</p>
            </li>
          </Link>
          <Link to="/holdings" onClick={() => handleMenuClick(2)}>
            <li className={selectedMenu === 2 ? activeMenuClass : menuClass}  >
              <p>Holdings</p>
            </li>
          </Link>
          <Link to="/positions" onClick={() => handleMenuClick(3)}>
            <li className={selectedMenu === 3 ? activeMenuClass : menuClass}>
              <p>Positions</p>
            </li>
          </Link>
          <Link to="/funds" onClick={() => handleMenuClick(4)}>
            <li className={selectedMenu === 4 ? activeMenuClass : menuClass}>
              <p>Funds</p>
            </li>
          </Link>
          <Link to="/apps" onClick={() => handleMenuClick(5)}>
            <li className={selectedMenu === 5 ? activeMenuClass : menuClass}>
              <p>Apps</p>
            </li>
          </Link>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
