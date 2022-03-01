import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handleClose = () => setClick(false);
  const token = localStorage.getItem("token");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  useEffect(() => {
    if (token == null) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div className="navbar">
      <div className="container">
        <h1>
          <span>
            <BsFillHouseFill />F
          </span>
          ind<span>M</span>y<span>D</span>orm
        </h1>

        {token && <h4>Hello {firstName}</h4>}

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="#" onClick={handleClose}>
              Home
            </a>
          </li>
          <li>
            <a href="#search" onClick={handleClose}>
              Search
            </a>
          </li>
          <li>
            <a href="#" onClick={handleClose}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={handleClose}>
              Contact
            </a>
          </li>
        </ul>
        {!token && (
          <div>
            <button className="btn">Sign In</button>
          </div>
        )}
        {token && (
          <div>
            <button
              className="btn"
              onClick={(e) => {
                localStorage.clear();
                window.location.href = "/login";
              }}
            >
              Log Out
            </button>
          </div>
        )}
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <HiOutlineMenuAlt4 className="icon" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
