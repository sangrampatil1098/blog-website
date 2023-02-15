import React from "react";
import Sidebar from "../../sidebar/Sidebar";

import "./setting.css";
function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update your account</span>
          <span className="settingDeleteTitle">Delete your account</span>
        </div>
        <form action="" className="settingForm">
          <label>Profile Picture</label>
          <div className="settingpp">
            <img
              src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
              alt=""
            />
            <label htmlFor="fileInput">
              <i className=" settingppIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label> Username</label>
          <input type="text" placeholder="Sangram" />
          <label> Email</label>
          <input type="email" placeholder="sangrampatil1098@gmail.com" />
          <label> Password</label>
          <input type="password" />
          <button className="settingUpdate">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Setting;
