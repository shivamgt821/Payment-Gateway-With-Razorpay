// src/components/Navbar.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faMapMarkerAlt, faUser, faShoppingBag, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="menu">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="logo">
        {/* Replace 'your-logo.png' with the actual file or URL of your logo */}
        <img src="your-logo.png" alt="Adventure Works Logo" />
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="store-locator">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </div>
      <div className="sign-in">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="shopping-bag">
        <FontAwesomeIcon icon={faShoppingBag} />
      </div>
      <div className="site-dropdown">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </nav>
  );
};

export default Navbar;
