import React, { useState } from "react";
import "./Navbar.css";
import dropimg from "../../assets/icons/menu.svg";
import down from "../../assets/icons/down.svg";

const Navbar = ({ setGrouping, setOrdering }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleGroupingChange = (event) => {
    setGrouping(event.target.value);
  };

  const handleOrderingChange = (event) => {
    setOrdering(event.target.value);
  };

  return (
    <nav>
      <div className="drop-btn" onClick={handleMenu}>
        <img src={dropimg} alt="" />
        Display
        <img src={down} alt="" />
      </div>
      <div className={showMenu ? "dropdown" : "dropdown hide"}>
        <div className="grouping">
          Grouping
          <select name="group" id="group" onChange={handleGroupingChange}>
            <option value="Status">Status</option>
            <option value="User">User</option>
            <option value="Priority">Priority</option>
          </select>
        </div>
        <div className="ordering">
          Ordering
          <select name="order" id="order" onChange={handleOrderingChange}>
            <option value="Priority">Priority</option>
            <option value="Title">Title</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
