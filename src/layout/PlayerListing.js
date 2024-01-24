import React, { useState, useEffect, useRef } from "react";
// import Player from '../assets/img/player.png';
import { createRef } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/playerlisting.css";
import Footer from "./Footer";
import Nomination from "./Nomination";
import Nav from "./Nav";
import Axios from "axios";

import BackGround from "../assets/img/player/blur_back.png";
import BlogCardsRelated from "../components/BlogCardsRelated";

const ENDPOINT = "https://backend.theindianpoloawards.com/nominations/";

const PlayerListing = () => {
  const leftBtn = useRef(null);
  const rightBtn = useRef(null);
  const [data, setData] = useState(undefined);
  const [playerList, setPlayerList] = useState([]);
  const { nomSlug } = useParams();
  useEffect(() => {
    Axios.get(ENDPOINT + nomSlug)
      .then((res) => {
        setData(res.data);
        if (res.data.winner) {
          setPlayerList([res.data.winner, ...res.data.players]);
        } else {
          setPlayerList([...res.data.players]);
        }
      })

      .catch((err) => console.log(err));
  }, [nomSlug]);
  // useEffect(() => {
  //   if (
  //     window.navigator.platform === "iPhone" &&
  //     window.innerWidth <= 769 &&
  //     leftBtn !== null
  //   ) {
  //     leftBtn.current.classList.append("iphone-left");
  //     rightBtn.current.classList.append("iphone-right");
  //   }
  // }, [leftBtn, rightBtn]);
  // const [open, setOpen] = useState(false);
  const scrollRef = createRef();

  const scrollLeft = () => {
    scrollRef.current.scrollLeft += 200;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft -= 200;
  };

  return (
    <div className="player-listing">
      <div className="listing-bg-1">
        <div className="listing-menu-conatiner">
          <Nav />
        </div>

        <div className="listing-heading-container">
          <div className="listing-heading-1">
            {data ? data.details.title : "The Most Valuable Player Nominees"}
          </div>
          <div className="listing-menu-sub">
            <div className="listing-heading-2">
              {data
                ? data.details.description
                : `TIPA emerged from a vision to redefine the experience of Polo by
              hosting an iconic award show, an occasion inviting the most
              illustrious names`}
            </div>
            {/* <div className="announcer-container">
              <div>
                <div className="listing-announcer">Announcing in</div>
                <div className="listing-timer">
                  <span>01</span>
                  <span>01</span>
                  <span>01</span>
                  <span>01</span>
                </div>
              </div>
              {/* <Link to="">
                <button
                  className="listing-book-button disabled"
                  disabled={true}
                >
                  Book A Seat
                </button>
              </Link>
            </div>*/}
          </div>
        </div>
        {playerList.length !== 1 && playerList.length !== 0 && (
          <button
            ref={leftBtn}
            style={{ cursor: "pointer" }}
            onClick={scrollRight}
            className="listing-scroll-left iphone-left"
          >
            <img src={require("../assets/img/arw.png")} alt="scroll-right" />
          </button>
        )}
        {playerList.length !== 1 && playerList.length !== 0 && (
          <button
            ref={rightBtn}
            style={{ cursor: "pointer" }}
            onClick={scrollLeft}
            className="listing-scroll-right iphone-right"
          >
            <img src={require("../assets/img/arw.png")} alt="scroll-left" />
          </button>
        )}
        <div
          style={
            playerList.length === 1
              ? { justifyContent: "center", marginLeft: 0 }
              : { justifyContent: "space-between" }
          }
          className="listing-slider-wrapper"
          ref={scrollRef}
        >
          {playerList.length === 1 && playerList.length !== 0 && (
            <div className="player-background" />
          )}
          {playerList.length !== 0
            ? playerList.map((item) => (
              <div
                style={
                  playerList.length === 1
                    ? { zIndex: 1, marginRight: 0 }
                    : { zIndex: 1 }
                }
                key={item.id}
                className="listing-box"
              >
                <img
                  src={
                    data.winner
                      ? item.slug === data.winner.slug
                        ? "https://backend.theindianpoloawards.com/" +
                        item.winner_photo
                        : "https://backend.theindianpoloawards.com/" +
                        item.profile_photo
                      : "https://backend.theindianpoloawards.com/" +
                      item.profile_photo
                  }
                  alt="stock"
                  className="user-image"
                />
                <div className="listing-user-name">{item.title}

                </div>
                {playerList.length !== 0 &&
                  playerList.length !== 0 &&
                  data.winner ? (
                  item.slug !== data.winner.slug ? (
                    <></>
                  ) : (
                    <div
                      style={{
                        fontSize: "28px",
                        letterSpacing: "2.4px",
                        textTransform: "uppercase",
                        color: "gold",
                        textAlign: "center",
                        marginTop: "5px",
                      }}
                    >
                      winner {item.winningYear}
                    </div>
                  )
                ) : (
                  <></>
                )}
              </div>
            ))
            : ""}
        </div>

        {/* ==================================================================== */}
        {/* <div className="listing-user-link">
            See Profile
                <img
              className="profile-arrow"
              src={require('../assets/img/arw.png')}
              alt="scroll-left"
            />
          </div> */}
        {/* ==================================================================== */}

        {/* <Link to="/playerdetails">
            <div className="listing-box">
              <img src={Player} alt="stock" className="user-image" />
              <div className="listing-user-name">Pablo Carlos</div>
              <div className="listing-user-link">
                See Profile{' '}
                <img
                  className="profile-arrow"
                  src={require('../assets/img/arw.png')}
                  alt="scroll-left"
                />
              </div>
            </div>
          </Link>
          <Link to="/playerdetails">
            <div className="listing-box">
              <img src={Player} alt="stock" className="user-image" />
              <div className="listing-user-name">Pablo Carlos</div>
              <div className="listing-user-link">
                See Profile
                <img
                  className="profile-arrow"
                  src={require('../assets/img/arw.png')}
                  alt="scroll-left"
                />
              </div>
            </div>
          </Link>
          <Link to="/playerdetails">
            <div className="listing-box">
              <img src={Player} alt="stock" className="user-image" />
              <div className="listing-user-name">Pablo Carlos</div>
              <div className="listing-user-link">
                See Profile
                <img
                  className="profile-arrow"
                  src={require('../assets/img/arw.png')}
                  alt="scroll-left"
                />
              </div>
            </div>
          </Link>
          <Link to="/playerdetails">
            <div className="listing-box">
              <img src={Player} alt="stock" className="user-image" />
              <div className="listing-user-name">Pablo Carlos</div>
              <div className="listing-user-link">
                See Profile
                <img
                  className="profile-arrow"
                  src={require('../assets/img/arw.png')}
                  alt="scroll-left"
                />
              </div>
            </div>
          </Link>
          <Link to="/playerdetails">
            <div className="listing-box">
              <img src={Player} alt="stock" className="user-image" />
              <div className="listing-user-name">Pablo Carlos</div>
              <div className="listing-user-link">
                See Profile
                <img
                  className="profile-arrow"
                  src={require('../assets/img/arw.png')}
                  alt="scroll-left"
                />
              </div>
            </div>
          </Link>
          <Link to="/playerdetails">
            <div className="listing-box">
              <img src={Player} alt="stock" className="user-image" />
              <div className="listing-user-name">Pablo Carlos</div>
              <div className="listing-user-link">
                See Profile
                <img
                  className="profile-arrow"
                  src={require('../assets/img/arw.png')}
                  alt="scroll-left"
                />
              </div>
            </div>
          </Link> */}
        <div className="listing-nominations">
          <Nomination title="Other Awards Categories" />
        </div>
      </div>
      <BlogCardsRelated />

      <div className="listing-footer">
        <Footer />
      </div>
    </div>
  );
};

export default PlayerListing;
