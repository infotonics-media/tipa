import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/nav.css";
const Nav = () => {
  const [classupdate, setClassupdate] = useState(false);
  useEffect(() => {
    if (classupdate) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }
  }, [classupdate]);

  return (
    <>
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <img
              src={require("../assets/img/tagline/tagline1.png")}
              alt="TIPA"
            />
          </Link>
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setClassupdate(!classupdate)}
          className="menu"
        >
          {classupdate ? "Close" : "Menu"}
        </div>
        <div className={classupdate ? "nav-links open" : "nav-links"}>
          <ul
            style={{
              listStyle: "none",
              height: "70vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              textAlign: "center",
              paddingInlineStart: "0",
            }}
          >
            <a href="/home">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Home</p>
              </li>
            </a>
            <a href="/videos">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Videos</p>
              </li>
            </a>
            <a href="/blog">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Stories</p>
              </li>
            </a>

            <a href="/gallery">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Gallery</p>
              </li>
            </a>
            <a href="/parnterList">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Partners</p>
              </li>
            </a>
            <a href="/press-release">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Press Release</p>
              </li>
            </a>
            <a href="/contact">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Contact Form</p>
              </li>
            </a>
            <a href="/partnerContact">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Partner Form</p>
              </li>
            </a>
            <a href="/award-categories">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Award categories</p>
              </li>
            </a>
          </ul>

          <div className="social-blog">
            <a
              href="https://www.facebook.com/TheIndianPoloAwards/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/img/svg/Icon awesome-facebook-f.svg")}
                alt="facebook"
                height="20px"
                width="15px"
              />
            </a>
            <a
              href="https://twitter.com/IndianpoloAwrds"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/img/svg/Icon awesome-twitter.svg")}
                height="20px"
                width="15px"
                alt="twitter"
              />
            </a>
            <a
              href="https://www.instagram.com/theindianpoloawards/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/img/svg/insta.svg")}
                alt="external"
                height="20px"
                width="15px"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
