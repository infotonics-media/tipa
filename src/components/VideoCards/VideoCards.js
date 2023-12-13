import React from "react";
import "../../assets/css/video.css";
import Play from "../../assets/img/inmotion/play.png";
const VideoCards = (props) => {
  const ENDPOINT = "https://backend.theindianpoloawards.com/";
  return (
    <div
      style={{
        background: `url("${ENDPOINT + props.item.thumbnail}")`,
        width: 350,
        margin: 10,
      }}
    >
      <div class="in-v1">
        <div class="in-v1-grid1">
          <h3>{props.item.title}</h3>
          <a href={props.item.link} target="_blank">
            <img src={Play} alt="play" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
