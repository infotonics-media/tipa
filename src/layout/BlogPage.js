import React, { useEffect, useState } from "react";
import SliderItems from "../components/SliderItems";
import "../assets/css/bloginfo.css";
import "../assets/scss/style.css";
import "../assets/css/BlogPage.css";
import Footer from "./Footer";
// import { Link } from 'react-router-dom';
// import data from "../assets/data/tipa-data.json"
import Nav from "./Nav";
import GoogleAnalytics from "../GoogleAnalytics";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { blogUpdate } from "../store/Actions/Action";
import BlogCardsRelated from "../components/BlogCardsRelated";
import { Link } from "react-router-dom";
import style from "../assets/css/relatesBlog.module.css";

const BlogPage = () => {
  const blogs = useSelector((state) => state.FetchApi.BlogPost);
  const dispatch = useDispatch();
  const [hero, setHero] = useState("");

  useEffect(() => {
    axios
      .get("https://backend.theindianpoloawards.com/blog/hero-section")
      .then((response) => setHero(response.data))
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <Nav />
      <GoogleAnalytics
        title="TIPA-BLOG"
        des="Read all the important post over TIPA"
      />
      <div
        className="heros"
        style={{
          backgroundImage: `url(https://backend.theindianpoloawards.com/${hero.heroImage})`,
        }}
      >
        {/* <h1>{hero.header}</h1>
        <p>{hero.intro}</p>
        <div class="button">
          <a href="/blog/tipa-partners">
            <a
              class="btn"
              href="https://www.theindianpoloawards.com/press-release"
            >
              Click Here
            </a>
          </a>
        </div> */}
      </div>
      <div class={style.title}>Stories</div>
      <div className="blogGrid">
        {blogs.length !== 0 &&
          blogs.map((item) => (
            <div style={{ width: "300px" }} key={item.id}>
              <Link to={"/blog/blog-details/" + item.slug}>
                <div>
                  <img
                    src={item.desktopCoveIimage}
                    width="300px"
                    // height="270px"
                    alt="cover-blog"
                  ></img>
                </div>
                {/* <p className={style.date}>{item.displaydate}</p> */}
                <h3 className={style.header}>{item.title}</h3>
              </Link>
            </div>
          ))}
        <br />
        <br />
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
