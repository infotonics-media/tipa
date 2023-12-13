import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import "../assets/css/videobanner.css";
import moment from "moment";
import "moment-precise-range-plugin";
import axios from "axios";

const ENDPOINT = "https://backend.theindianpoloawards.com/";

const VideosBanner = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [releaseDate, setReleaseDate] = useState("2021-5-13 12:00:00");
  const [videoId, setVideoId] = useState("UI2FOcljo84");
  const clock = () => {
    let start = moment(releaseDate);
    let ends = moment();
    let diff = moment.preciseDiff(start, ends, true);
    return diff;
  };
  const [state, setState] = useState(clock());
  useEffect(() => {
    const interval = setInterval(() => {
      setState(clock());
    }, 1000);
    return () => clearInterval(interval);
  }, [releaseDate]);
  useEffect(() => {
    if (props.is_live) {
      setImageUrl(props.data.live_image);
    }
    if (props.is_coming) {
      setImageUrl(props.data.comming_image);
      setReleaseDate(props.data.release_date);
    }
    if (props.is_completed) {
      // console.log(ENDPOINT + props.data.complete_image);

      setImageUrl(props.data.complete_image);
    }
    // console.log(props.data)
  }, [props]);

  return (
    <div
      style={
        imageUrl
          ? {
            backgroundImage: `url(${ENDPOINT + imageUrl})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }
          : {}
      }
      className="videoBanner"
    >
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(false)}
        autoplay={1}
        controls={0}
      />
      <div className="center">
        <div className="presents">
          {/* <img src={require("../assets/img/lapolopres.png")} alt=""/> */}
        </div>
        <div className="logo-main">
          {/* <img src={require("../assets/img/tagline/tagline1.png")} alt=""/> */}
        </div>
        <div className="partner-logo">
          {/* <img src={require("../assets/img/partner-logo.png")} alt=""/> */}
        </div>
        <div className="main-section">
          {props.is_live && (
            <div className="is_live">
              <div className="youtube-btn">
                <a
                  href={
                    props.data !== undefined
                      ? props.data.live_url
                      : "https://youtu.be/linlz7-Pnvw"
                  }
                >
                  <img src={require("../assets/img/youtube.png")} alt="" />
                </a>
              </div>
              <div className="text">Click to Watch</div>
            </div>
          )}
          {props.is_coming && (
            <div className="is_upcoomming">
              <div className="time">
                <div className="starting">Starting in</div>
                <div className="clock">
                  <div className="days">
                    <div className="clk">
                      {state.firstDateWasLater
                        ? state.days + state.months * 30 + state.years * 365
                        : "00"}
                    </div>
                    <div>days</div>
                  </div>
                  <div className="hours">
                    <div className="clk">
                      {state.firstDateWasLater ? state.hours : "00"}
                    </div>
                    <div>hrs</div>
                  </div>
                  <div className="min">
                    <div className="clk">
                      {state.firstDateWasLater ? state.minutes : "00"}
                    </div>
                    <div>mins</div>
                  </div>
                  <div className="sec">
                    <div className="clk">
                      {state.firstDateWasLater ? state.seconds : "00"}
                    </div>
                    <div>sec</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {props.is_completed && (
            <div className="is_completed">
              <div
                onClick={() => {
                  setVideoId(props.data.complete_profile_id);
                  setIsOpen(true);
                }}
                className="btn"
              >
                Watch the Award Show
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideosBanner;
