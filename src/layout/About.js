import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import { Redirect } from "react-router-dom";
import "../assets/css/About.css";
import Playbutton from "../assets/img/Group 209.png";
import Image2 from '../assets/img/Group 2813.jpg';

const About = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2024, setOpen2024] = useState(false);
  const [about, setAbout] = useState("");
  const [err, setErr] = useState(false);

  useEffect(() => {
    axios
      .get("https://backend.theindianpoloawards.com/about-us/")
      .then((res) => setAbout(res.data["about-us"][0]))
      .catch((err) => {
        console.log("err", err);
        setErr(true);
        // return <Redirect to="/page-not-found" />
      });
  }, []);
  // console.log('About', about);
  if (err) {
    return <Fragment></Fragment>;
  } else {
    return (
      <div id="about" className="about">
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId={about.profile_id}
          onClose={() => setOpen(false)}
          autoplay={1}
          controls={0}
        />
        {/* <div className="backgrnd"></div> */}
        <div className="aboutTitle">


          {/*  <h2>12<sup>th</sup> January, 2024.</h2>*/}


         
        </div>
        <div className="video">

          <div className="thumb">


            {/*  <img
              src={Image2}
              alt="{about.title}"
              style={{width:"50%"}}
            />
             <div onClick={() => setOpen(true)} className="play">
              <img src={require("../assets/img/play.png")} alt="" />
            </div> */}
          </div>
        </div>
        {/* 2024 highlitest video */}
        <div className="text">
          <ModalVideo
            channel="youtube"
            isOpen={isOpen2024}
            videoId={"ukUmRagfv7w"}
            onClose={() => setOpen2024(false)}
            autoplay={1}
            controls={0}
          />
          <div className="heading">
            <div className="time">
              <div onClick={() => setOpen2024(true)}>
                <img src={Playbutton} alt="playbutton" />
              </div>
              <div className="starting">Watch 2024 Highlights</div>
            </div>
          </div>
          <div className="desc">
            <div className="para">{about.para1}</div>
            {/* <div className="para">{about.para2}</div> */}
            <div style={{ cursor: "pointer" }} className="knowmore">
              <a href=".">knowmore</a>
              <img src={require("../assets/img/arw.png")} alt="" />
            </div>
          </div>
        </div>
        {/* 2024 end*/}
        <div className="text">
          <div className="heading">
            {/* <div className="head">{about.title}</div> */}
            {/* <div className="knowmore">
              <a style={{ marginRight: "1.2rem" }} href=".">
                knowmore
              </a>
              <img src={require("../assets/img/arw.png")} alt="" />
            </div> */}
            <div className="time">
              <div onClick={() => setOpen(true)}>
                <img src={Playbutton} alt="playbutton" />
              </div>
              <div className="starting">Watch 2022 Highlights</div>
            </div>
          </div>
          <div className="desc">
            <div className="para">{about.para1}</div>
            {/* <div className="para">{about.para2}</div> */}
            <div style={{ cursor: "pointer" }} className="knowmore">
              <a href=".">knowmore</a>
              <img src={require("../assets/img/arw.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default About;
