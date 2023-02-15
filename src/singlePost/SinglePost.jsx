import React from "react";

import "./singlePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus aut
          alias quia quaerat officiis temporibus officia perspiciatis ducimus
          libero consectetur tempora voluptas, dolor ipsa, consequatur quae
          accusamus fugit. Repudiandae quae est reprehenderit, deleniti magni
          excepturi voluptatibus distinctio eius esse facere voluptas dolores
          reiciendis maiores quaerat itaque, debitis necessitatibus iste fuga
          corrupti accusamus ratione consequatur. Quasi dolores quia eos est
          aspernatur? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Magnam ullam facilis atque voluptas, quo laboriosam ipsam mollitia
          corporis nobis nesciunt incidunt explicabo! Delectus vitae officiis
          minima doloribus repellat asperiores voluptatibus quam atque a aut
          voluptatum omnis, nisi beatae consectetur fugiat alias, ullam at rem
          tempora natus commodi quasi cupiditate. Consequuntur quas unde eveniet
          ducimus accusantium sed maiores commodi tempora voluptate illo nemo
          aperiam quod, magnam minus, quidem, exercitationem fugit odit soluta
          est excepturi distinctio earum. In adipisci neque, odio aspernatur
          error officiis, eveniet culpa iure corrupti soluta optio quibusdam
          labore eius tempora pariatur quia beatae temporibus voluptas dolore
          maxime ducimus! Inventore corrupti numquam possimus iste totam soluta,
          reiciendis facilis earum ratione voluptatum quasi beatae eaque
          necessitatibus aperiam explicabo, velit quis amet temporibus! Tempora
          quisquam animi beatae est quod expedita culpa, velit asperiores!
          Voluptatum perspiciatis necessitatibus magnam esse mollitia optio
          adipisci molestiae enim, cupiditate omnis quod atque ipsam deserunt
          illum repellat ad dicta asperiores unde laborum, sed aperiam.
          Doloribus eum tenetur mollitia ullam atque culpa, ipsa ad error
          facilis cupiditate nam illum soluta dicta laborum est quaerat, illo
          laboriosam quod expedita voluptatibus inventore minima aliquid neque?
          Facilis sapiente doloremque rerum, provident necessitatibus, assumenda
          aliquam magnam officia quod possimus accusantium nisi architecto!
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
