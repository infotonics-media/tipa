import React from "react";
import { InstagramMedia } from "react-instagram-media";
import "../assets/css/instavideoPopup.css";
// import { instagramMediaParser } from "react-instagram-media";

const InstaVideoPopUp = (props) => {
  return (
    <div className="instaVideoPopUp">
      <div className="videoContainer">
        <img
          onClick={props.clickHandler}
          src={require("../assets/img/close.png")}
          alt=""
          className="close"
        />
        <InstagramMedia
          uri={props.url}
          renderItem={({ display_url, video_url, type, caption }) => {
            if (type === "video") {
              return (
                <video
                  style={{ outline: "none", width: "100%", margin: "auto" }}
                  poster={display_url}
                  controls
                >
                  <source src={video_url} type="video/mp4" />
                </video>
              );
            }

            return <img src={display_url} alt={caption} />;
          }}
          renderMediaList={(children) => (
            <div className="swiper">{children}</div>
          )}
          renderError={() => <div>I have failed to parse it</div>}
          renderLoading={() => <div>Loading</div>}
        />
      </div>
    </div>
  );
};

export default InstaVideoPopUp;
