import React from "react";

import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">React</span> <br />
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://static.vecteezy.com/system/resources/previews/001/984/861/original/abstract-blue-geometric-circles-overlapping-background-with-light-blue-free-vector.jpg"
        alt=""
      />
    </div>
  );
}

export default Header;
