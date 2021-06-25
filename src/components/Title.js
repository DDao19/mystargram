import React from "react";
import imagePhoto from "../images/photo.png";

const Title = () => {
  return (
    <div className="title">
      <h1>
        MyStargram{" "}
        <span>
          <img src={imagePhoto} alt="logo" />
        </span>
      </h1>

      <h2>My Pictures</h2>
      <div className="line-bar"></div>
      <p>These are all of the photos you have uploaded..</p>
    </div>
  );
};

export default Title;
