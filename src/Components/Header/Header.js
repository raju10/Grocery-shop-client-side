import React from "react";

import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/order">Order</Link>
          <Link to="/admin">Admain</Link>
          <Link to="/login" style={{ background: "green", color: "white" }}>
            login
          </Link>
        </nav>

        {/*  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Header;
