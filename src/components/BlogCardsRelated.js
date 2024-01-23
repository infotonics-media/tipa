import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import style from "../assets/css/relatesBlog.module.css";
function BlogCardsRelated() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend.theindianpoloawards.com/blog/random-three-blogs")
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div class={style.title}>Stories</div>
      <div className={style.main}>
        {blog.map((item) => (

          <div style={{ width: "300px" }} key={item.id}>
            <Link to={"/blog/blog-details/" + item.slug}>
              <div>
                <img
                  src={item.desktopCoveIimage}
                  width="300px"
                  height="270px"
                  alt="cover-blog"
                ></img>
              </div>
              <p className={style.date}>{item.displaydate}</p>
              <h3 className={style.header}>{item.title}</h3>
            </Link>
          </div>

        ))}
      </div>
    </>
  );
}

export default BlogCardsRelated;
