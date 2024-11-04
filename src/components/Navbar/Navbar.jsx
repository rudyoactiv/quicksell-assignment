import React, { useState } from 'react';
import './Navbar.css';
import dropimg from '../../assets/icons/menu.svg';



const Navbar = ({ setGrouping, setOrdering }) => {

const [showMenu, setShowMenu] = useState(false);

const handleMenu = () => {
    setShowMenu(!showMenu);
}

  return (
    <nav>
      <div className="drop-btn" onClick={handleMenu}>
        <img src={dropimg} alt="" />
        Display
      </div>
      <div className={showMenu ? 'dropdown' : 'dropdown hide'}>
        <div className='grouping'>
            Grouping
            <select name="group" id="group">
                <option value="By Status">Status</option>
                <option value="By User">User</option>
                <option value="By Priority">Priority</option>
            </select>
        </div>
        <div className='ordering'>
            Ordering
            <select name="order" id="order">
                <option value="Priority">Priority</option>
                <option value="Title">Title</option>
            </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
