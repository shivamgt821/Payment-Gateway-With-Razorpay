import React from 'react';
import './Sidebar.css'; // Create a separate CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="/home">Home</a>
      <a href="/laptops">Laptops</a>
      <a href="/keyboards">Keyboards</a>
      <a href="/mice">Mice</a>
      <a href="/headsets">Headsets</a>
      <a href="/laptopchargers">Laptop Chargers</a>
      <a href="/webcams">Webcams</a>
      <a href="/storage">Storage</a>
    </div>
  );
};

export default Sidebar;
