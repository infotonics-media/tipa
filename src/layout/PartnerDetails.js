import Axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import style from "../assets/css/partnerCards.module.css";
import GallerySlider from "./GallerySlider";
import BlogCardsRelated from "../components/BlogCardsRelated";
import { useParams } from "react-router-dom";
import Facebook from "../assets/img/svg/Icon awesome-facebook-f.svg"
import Twitter from "../assets/img/svg/Icon awesome-twitter.svg"
import Instagram from "../assets/img/svg/insta.svg"
function PartnerDetails() {
  const [details, setDetails] = useState({});
  const params = useParams()
  useEffect(() => {
    Axios.get(
      `https://backend.theindianpoloawards.com/partners/all-partners/${params.slug}/`
    )
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Nav />

      <div className={style.coverimage}>
        <img
          src={details.thumbnail}
          alt={details.title}
          title={details.title}
        />
      </div>
      <img src={details.coverImage} alt={details.title} title={details.title} style={{ width: '100px' }} />
      <div className="social-blog">
        <a
          href={details.social_links_fb}
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
          href={details.social_links_tw}
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
          href={details.social_links_insta}
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
      <p style={{margin: "1% 10% 1% 10%"}}>{details.desc}</p>
      {/* <h1>Brand Gallery</h1> */}
      <br />
      <br />
      <GallerySlider />
      <div className={style.blog}>
        <BlogCardsRelated />
      </div>
      <Footer />
    </>
  );
}

export default PartnerDetails;
