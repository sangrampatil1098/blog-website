import "./topbar.css";

import heroImg from "../topbar/heroImg.jpeg";
import React from "react";
import { Link } from "react-router-dom";

function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i class="topIcons fa-brands fa-facebook"></i>l
        <i class="topIcons fa-brands fa-twitter"></i>
        <i class="topIcons fa-brands fa-instagram"></i>
        <i class="topIcons fa-brands fa-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
            <img className="heroImg" src={heroImg} alt="" />
            <i class=" topSearchIcon fa-solid fa-magnifying-glass"></i>
          </>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Topbar;
