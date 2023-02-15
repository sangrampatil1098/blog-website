import React from "react";

import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImage"
        src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi labore
        sunt doloremque numquam dolor voluptates. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Suscipit, nostrum similique. Repellendus
        veritatis aspernatur magni, quas fugit dolore. Doloremque modi
        perspiciatis sed quo id, temporibus adipisci saepe accusantium pariatur
        reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Assumenda, minima.
      </p>
    </div>
  );
}

export default Post;
