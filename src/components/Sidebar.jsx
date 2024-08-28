import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"

const Sidebar = () => {
  return (
    

    <div className="sidebar">
      <ul>
        <li>
          <Link to="/category">Category</Link>
        </li>
        <li>
          <Link to="/tax">Tax</Link>
        </li>
        <li>
          <Link to="/product">Products</Link>
        </li>
        <li>
          <Link to="/sale">Sales</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
