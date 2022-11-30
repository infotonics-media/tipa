import React from "react";

const SliderVideo = (props) => {
  return (
    <div className="video-slider">
      <img src={props.thumb} alt="" />
      <div className="play">
        <a href={props.url}>
          <img src={require("../assets/img/inmotion/play.png")} alt="" />
        </a>
      </div>
    </div>
  );
};

export default SliderVideo;
