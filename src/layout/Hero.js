import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import Images from "../components/Images";
import "../assets/css/Hero.css";
import Nav from "./Nav";
import Playbutton from "../assets/img/Group 209.png";
import ModalVideo from "react-modal-video";

const Hero = () => {
  // const [classupdate, setClassupdate] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const changeIndex = (index) => {
    if (imageIndex + index < 0) {
      setImageIndex(2);
    } else if (imageIndex + index > 2) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + index);
    }
  };
  // const clock = () => {
  //   let start = moment("2020-12-03 12:00:00");
  //   let ends = moment();
  //   let diff = moment.preciseDiff(start, ends, true);
  //   return diff;
  // };
  // const [state, setState] = useState(clock());
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setState(clock());
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  // const clickHandler = () => {
  //   setClassupdate((prev) => !prev);
  // };
  return (
    <>
      <div className="container">
        <div className="hero">
          <Nav />
          <div className="heroMainTag">
            {/* <div onClick={() => changeIndex(-1)} className="leftarw">
              <img src={require('../assets/img/leftarrow.png')} alt="" />
            </div> */}
            <div className="tagline">
              {/* <Images
                src="../assets/img/tagline/tagline-logo.png"
                alt="TIPAs"
              /> */}
              <img
                src={require("../assets/img/tagline/tagline1.png")}
                alt="TIPA"
                style={{width:"80%"}}
              />
            </div>
            {/* <div onClick={() => changeIndex(1)} className="rightarw">
              <img src={require('../assets/img/leftarrow.png')} alt="" />
            </div> */}
            <ModalVideo
              channel="youtube"
              isOpen={isOpen}
              videoId="SFZ8ndFQNE4"
              onClose={() => setOpen(false)}
              autoplay={1}
              controls={0}
            />
          </div>
          <div className="bnav">
            <div className="time">
              {/* <div onClick={() => setOpen(true)}>
                <img src={Playbutton} alt="playbutton"/>
              </div> */}
              {/* <div className="starting">Watch 2022 Highlights</div> */}
              {/* <div className="clock">
              <div className="days">
                <div className="clk">{state.days}</div>
                <div>days</div>
              </div>
              <div className="hours">
                <div className="clk">{state.hours}</div>
                <div>hrs</div>
              </div>
              <div className="min">
                <div className="clk">{state.minutes}</div>
                <div>mins</div>
              </div>
              <div className="sec">
                <div className="clk">{state.seconds}</div>
                <div>sec</div>
              </div>
            </div> */}
            </div>
            {/* <div className="social">
              <a href="https://www.facebook.com/TheIndianPoloAwards/">
                <div className="f">
                  <img src={require('../assets/img/f.png')} alt="" />
                </div>
              </a>
              <a href="https://www.instagram.com/theindianpoloawards/">
                <div className="i">
                  <img src={require('../assets/img/i.png')} alt="" />
                </div>
              </a>
              <a href="https://twitter.com/IndianpoloAwrds">
                <div className="t">
                  <img src={require('../assets/img/t.png')} alt="" />
                </div>
              </a>
            </div> */}
          </div>
          {/* <div className="images">
            <div className="top">
              <div className="im1">
                <img
                  className="animate__animated animate__slideInDown animate__fast"
                  src={require('../assets/img/hero/1.png')}
                  alt=""
                />
              </div>
              <div className="im2">
                <img
                  className="animate__animated animate__slideInRight animate__fast"
                  src={require('../assets/img/hero/2.png')}
                  alt=""
                />
              </div>
            </div>
            <div className="bottom">
              <div className="im3">
                <img
                  className="animate__animated animate__slideInUp animate__fast"
                  src={require('../assets/img/hero/3.png')}
                  alt=""
                />
              </div>
              <div className="im4">
                <img
                  className="animate__animated animate__slideInRight animate__fast"
                  src={require('../assets/img/hero/4.png')}
                  alt=""
                />
              </div>
            </div>
          </div> */}
        </div>
        {/* kabf chandah its my 23rd bday and I will be bathed with gobar today 3 2 1 foja chhdb hffhh fhahaifh hhffhb  fhihf chanandan fhhf cb chanda h chhf fhhb chandn  nnfrjf */}
      </div>
      <div className="quote ">
        <p className="quotepara">
          The rhythmic symphony of hooves and the clashing of mallets create an exquisite ballet on the lush canvas of the field, where the horse unites with the rider in a dance of skill and finesse. Each thunderous gallop and precisely struck ball tell a tale of passion and dedication, echoing the rich legacy of polo. Season 3
          {/* <br />
          And He that toss'd Thee down into the Field,
          <br />
          He knows about it all - HE knows - HE knows!"
          <br /> 
          <span
            style={{ fontSize: "18px", fontFamily: "Libre Caslon Display" }}
          >
            ~ Omar Khayyam
          </span>*/}
        </p>
      </div>
    </>
  );
};

export default Hero;
