import React from "react";
import headerLogo from "../../Images/foods-in-shopping-bad-going-fast-with-thumbs-up-6048ld.png";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <nav>
        <img src={headerLogo} alt="" style={{ width: "50px" }} />
        <Link to="/home">Home</Link>
        <Link to="/order">Order</Link>
        <Link to="/admin">Admain</Link>
        <Link to="/login" style={{ background: "green", color: "white" }}>
          login
        </Link>
      </nav>
    </div>
  );
};

export default Header;
