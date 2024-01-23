import React, { useState, useEffect, useRef } from "react";
import GalleryPopUp from "../components/GalleryPopUp";
import "../assets/css/galleryPage.css";
import Nav from "./Nav";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InMotion from "./InMotion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import BlogCardsRelated from "../components/BlogCardsRelated";

const ENDPOINT = "https://backend.theindianpoloawards.com/";

const RelatedBlogs = (props) => {
  return (
    <div className="v-post">
      <Link to={"/blog/" + props.item.slug}>
        <div>
          <img
            src={ENDPOINT + props.item.cover_image}
            height="270px"
            alt="cover-blog"
          ></img>
        </div>
        <p className="v-post-date">{props.item.date}</p>
        <h3 className="v-post-header">{props.item.title}</h3>
      </Link>
    </div>
  );
};

// http://backend.theindianpoloawards.com/gallery/ https://backend.theindianpoloawards.com/gallery/gallery-2022
const GalleryPage2022 = () => {
  const blogs = useSelector((state) => state.FetchApi.BlogPost);
  const grid_sec = useRef(null);
  const [data, setData] = useState({
    details: {},
    images: {},
  });
  const [activeImageIndex, setActiveImageIndex] = useState(12);
  const [renderImageList, setRenderImageList] = useState([]);
  const [displayPopUp, setDisplayPopUp] = useState(false);
  useEffect(() => {
    axios
      .get(ENDPOINT + "gallery/gallery-2021")
      .then((res) => {
        setData({
          ...data,
          details: res.data.details,
          images: res.data.images,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const catClickHandler = (e) => {
    e.persist();
    let activeItem = document.querySelector(".category-list > .active");
    activeItem.classList.remove("active");
    e.target.classList.add("active");
    setRenderImageList(data.images[e.target.innerHTML]);
    // console.log(data.images[e.target.innerHTML]);
  };
  const imageClickHandler = (i) => {
    setActiveImageIndex(i);
    setDisplayPopUp(true);
  };
  useEffect(() => {
    if (Object.keys(data.images).length !== 0) {
      let activeItem = document.querySelector(".category-list > .active");
      setRenderImageList(data.images[activeItem.innerHTML]);
    }
    // console.log(grid_sec);
  }, [data]);
  useEffect(() => {
    if (displayPopUp) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }
  }, [displayPopUp]);

  // console.log('caption', data.images.all.id);
  return (
    <>
      {displayPopUp ? (
        <div className="popUpGal">
          <GalleryPopUp
            activeImage={activeImageIndex}
            images={renderImageList}
            // caption={data.images.all.caption}

            closeHandler={() => setDisplayPopUp(false)}
          />
        </div>
      ) : (
        ""
      )}
      <div className="galleryPage">
        <Nav />
        <div className="hero">
          <div className="tag">
            <img src={require("../assets/img/tagline/tagline1.png")} alt="" />
          </div>
          <div className="year italiana">2021</div>
          {/* <div
            onClick={() => {
              document.querySelector("html").style.scrollBehavior = "smooth";
              window.scrollTo(0, grid_sec.current.offsetTop - 20);
              document.querySelector("html").style.scrollBehavior = "";
            }}
            className="button"
          >
            Explore Gallery
          </div> */}
        </div>
        <div className="gallery-content">
          <div className="details">


            <div className="heading responsive-font-display">
              <Link to="/gallery2021" style={{ textDecoration: "underline" }}>SEASON 1</Link>
              {'\u00A0'} {'\u00A0'}{'\u00A0'}
              <Link to="/gallery2022" >SEASON 2</Link>
              {'\u00A0'} {'\u00A0'}{'\u00A0'}
              <Link to="/gallery2024" >SEASON 3 </Link>
              {'\u00A0'} {'\u00A0'}{'\u00A0'}
            </div>



            <div className="desc">
              Champions through and through hit the Blue Carpet at Polo’s grandest night!
            </div>
          </div>
          <div ref={grid_sec} className="grid-section">
            <div className="category-list">
              {Object.keys(data.images).map((item, index) => (
                <div
                  key={index}
                  onClick={(e) => catClickHandler(e)}
                  className={index === 0 ? "catItem active" : "catItem"}
                >
                  {item}
                </div>
              ))}
              {/* <div className="catItem active">All</div>
            <div className="catItem">All</div>
            <div className="catItem">All</div>
            <div className="catItem">All</div>
            <div className="catItem">All</div> */}
            </div>
            <div className="image-grid">
              <ResponsiveMasonry columnsCountBreakPoints={{ 750: 1, 900: 5 }}>
                <Masonry>
                  {renderImageList.length !== 0
                    ? renderImageList.map((item, index) => (
                      <div
                        key={item.id}
                        onClick={() => imageClickHandler(index)}
                        className="imageItem"
                      >
                        <img src={ENDPOINT + item.photo} alt="" />
                      </div>
                    ))
                    : ""}
                </Masonry>
              </ResponsiveMasonry>
            </div>
            <div className="gallery-inmotion">
              <InMotion title="Videos" />
              <div className="button-more-videos">See More Videos</div>
            </div>
            {/* <div className="gallery-related-post">
              <h3
                style={{
                  textAlign: "center",
                  color: " #cdb071",
                  fontSize: "1.8rem",
                  backgroundColor: "#fff",
                  margin: "-1px 0",
                  fontWeight: "400",
                  paddingTop: "4rem",
                }}
              >
                Related Posts
              </h3>
              <div className="v-related-posts">
                {blogs.slice(0, 3).map((item) => (
                  <RelatedBlogs key={item.id} item={item} />
                ))}
              </div>
            </div> */}
          </div>
        </div>
        {/* <GalleryPopUp /> */}
        <BlogCardsRelated />
        <Footer />
      </div>
    </>
  );
};

export default GalleryPage2022;
