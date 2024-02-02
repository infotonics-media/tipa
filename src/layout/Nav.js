import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/nav.css";
import Facebook from "../assets/img/svg/Icon awesome-facebook-f.svg"
import Twitter from "../assets/img/svg/Icon awesome-twitter.svg"
import Instagram from "../assets/img/svg/insta.svg"
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
            <Link to="/home">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Home</p>
              </li>
            </Link>
            <Link to="/videos">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Videos</p>
              </li>
            </Link>
            <Link to="/blog">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Stories</p>
              </li>
            </Link>

            <Link to="/gallery2024">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Gallery</p>
              </li>
            </Link>

            <Link to="/parnterList">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Partners</p>
              </li>
            </Link>
            <Link to="/press-release">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Press Release</p>
              </li>
            </Link>
            <Link to="/contact">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Contact Form</p>
              </li>
            </Link>
            <Link to="/partnerContact">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Partner Form</p>
              </li>
            </Link>
            <Link to="/award-categories">
              <li className="menu-links">
                <p className="textlign" style={{ margin: 0 }}>Award categories</p>
              </li>
            </Link>
          </ul>

          <div className="social-blog">
            <a
              href="https://www.facebook.com/TheIndianPoloAwards/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
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
                src={Twitter}
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
                src={Instagram}
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
