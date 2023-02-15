import React from "react";
import "./write.css";
function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
        alt=""
      />
      <form className="writeForm">
        <div className="writeFromGroup">
          <label htmlFor="fileInput">
            <i class="writeIcon fa-sharp fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFromGroup">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Tell your story"
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
