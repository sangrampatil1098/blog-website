import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
          necessitatibus, deleniti eum error libero, accusamus aperiam nulla qui
          excepturi quo asperiores sint doloribus numquam ullam nisi! Nisi,
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i class="sidebarIcons fa-brands fa-facebook"></i>l
          <i class="sidebarIcons fa-brands fa-twitter"></i>
          <i class="sidebarIcons fa-brands fa-instagram"></i>
          <i class="sidebarIcons fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
