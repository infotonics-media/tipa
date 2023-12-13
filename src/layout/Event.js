import React, { useState, useEffect } from "react";
import InMotion from "./InMotion";
import "../assets/css/video.css";
import VideoContainer from "../components/VideoContainer";
import Footer from "./Footer";
import { Link, useHistory } from "react-router-dom";
import VideosBanner from "../components/VideosBanner";
// import { InstagramMedia } from 'react-instagram-media'
import Nav from "./Nav";
import InstaVideoPopUp from "../components/InstaVideoPopUp";
import GoogleAnalytics from "../GoogleAnalytics";
import { useSelector } from "react-redux";
import Play from "../assets/img/inmotion/play.png";

// import videoData from "../assets/data/videos.json";
import axios from "axios";
import { FaCommentsDollar } from "react-icons/fa";
import VideoCards from "../components/VideoCards/VideoCards";
import AwardsVideoSection from "./AwardsVideoSection";
import BlogCardsRelated from "../components/BlogCardsRelated";
import style from "../assets/css/gallerygrid.module.css";
import Axios from "axios";

const ENDPOINT = "https://backend.theindianpoloawards.com";

const BANNER_ENDPOINT = ENDPOINT + "/banners/";

const VIDEO_BANNER = ENDPOINT + "/banners/player/video_details/";

// http://backend.theindianpoloawards.com/banners/player/video_details/
//https://backend.theindianpoloawards.com/banners/player/video_details/

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

const Event = (props) => {
  const [banner, setBanner] = useState({
    isLive: false,
    isComming: false,
    isCompleted: false,
  });
  const [bannerData, setBannerData] = useState({});
  const [videoList, setVideoList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(BANNER_ENDPOINT)
      .then((res) => {
        //console.log(res.data.status);
        switch (res.data.status) {
          case "iscoming":
            setBanner({ ...banner, isComming: true });
            break;
          case "islive":
            setBanner({ ...banner, isLive: true });
            break;
          case "iscompleted":
            setBanner({ ...banner, isCompleted: true });
            break;
          default:
            break;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(VIDEO_BANNER)
      .then((res) => {
        setVideoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    //console.log(banner);
    if (banner.isComming) {
      axios
        .get(BANNER_ENDPOINT + "iscoming/")
        .then((res) => {
          setBannerData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (banner.isCompleted) {
      axios
        .get(BANNER_ENDPOINT + "iscompleted/")
        .then((res) => {
          setBannerData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (banner.isLive) {
      axios
        .get(BANNER_ENDPOINT + "islive/")
        .then((res) => {
          setBannerData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [banner]);
  useEffect(() => {
    //console.log(videoList);
  }, [videoList]);
  const [videoState, setVideoState] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [playlistTitle, setPlaylistTitle] = useState("");

  const blogs = useSelector((state) => state.FetchApi.BlogPost);

  const openVideo = (url) => {
    // setVideoState(true);
    // setVideoUrl(url);
  };

  useEffect(() => {
    setTimeout(() => {
      if (document.querySelector(".swiper") !== null) {
        document.querySelector(".swiper video").play();
      } else if (
        document.querySelector(".swiper") === null &&
        videoState === true
      ) {
        if (document.querySelector(".videoContainer video") !== null) {
          document.querySelector(".videoContainer video").play();
        }
      }
    }, 1000);
  }, [openVideo, videoState]);

  useEffect(() => {
    Axios.get(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBRz-9N35ons_tIaiOisplFry7KsdNChag&channelId=UCFMEZ_mosnms76-shsCXT3Q&part=snippet,id&order=date&maxResults=100"
    )
      .then((response) => {
        setPlaylistTitle(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="videos">
      <div className="container video-container">
        <div className="hero"></div>
      </div>
      <Nav />
      <GoogleAnalytics title="TIPA-VIDEO" />
      {(banner.isLive || banner.isCompleted || banner.isComming) && (
        <VideosBanner
          is_live={banner.isLive}
          is_completed={banner.isCompleted}
          is_coming={banner.isComming}
          data={bannerData}
          openVideo={(url) => openVideo(url)}
        />
      )}
      {videoState ? (
        <InstaVideoPopUp
          clickHandler={() => setVideoState(false)}
          url={videoUrl}
        />
      ) : (
        <></>
      )}
      <InMotion title="Videos" />

      {/* <div className="v-links-container">
        {playlistTitle?.items?.map((item,index)=>    <h3 key={index}>{item.snippet.title}</h3>)}
    
    
      </div> */}

      <div className="interview-video-container">
        <div>
          <h1 className="in-v-header">Conversation with the Champions</h1>
          <p className="in-v-desc">
            The ace polo players from across the country come forward to share
            overwhelming thoughts on the newly found concept of the much awaited
            The Indian Polo Awards.
          </p>
        </div>
        {/* {playlistTitle?.items?.map((item)=><img src={item?.snippet?.thumbnails?.high?.url} alt={item.snippet.title}/>)} */}
        <div className="interviewYoutube">
          {playlistTitle?.items?.map((item) => (
            <>
           {item?.id?.videoId==null? "":
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${item?.id?.videoId}`}
              title={item.snippet.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          }
        </>
          ))}
        </div>
        {/* {videoList.length !== 0 ? (
          videoList.map((item, index) => (
            // <VideoContainer
            //   key={index}
            //   data={item["C" + (index + 1)]}
            //   openVideo={(url) => openVideo(url)}
            // />
            <div>
              <div className={style.main}>
                <div
                  className={style.v1}
                  style={{
                    background: `url(https://backend.theindianpoloawards.com+${item.videos.image})`,
                  }}
                ></div>
                <div
                  className={style.v2}
                  style={{
                    background: `url("https://lapolo-backend-static-file-rest-api.s3.amazonaws.com/media/None/2_o8F0AmI.jpg")`,
                  }}
                ></div>
              </div>

              <div className={style.main}>
                <div
                  className={style.v3}
                  style={{
                    background: `url("https://lapolo-backend-static-file-rest-api.s3.amazonaws.com/media/None/3_xAuxkx7.jpg")`,
                  }}
                ></div>
                <div
                  className={style.v4}
                  style={{
                    background: `url("https://lapolo-backend-static-file-rest-api.s3.amazonaws.com/media/None/4_gV7Kb6Z.jpg")`,
                  }}
                ></div>
                <div
                  className={style.v5}
                  style={{
                    background: `url("https://lapolo-backend-static-file-rest-api.s3.amazonaws.com/media/None/5_bj1kM9e.jpg")`,
                  }}
                ></div>
                <div
                  className={style.v6}
                  style={{
                    background: `url("https://lapolo-backend-static-file-rest-api.s3.amazonaws.com/media/None/6_llBut1U.jpg")`,
                  }}
                ></div>
              </div>
            </div>
          ))
        ) : (
          <></>
        )} */}
        {/* <VideoContainer data={videoData.c1} openVideo={(url) => openVideo(url)} /> */}
        {/* </div>
      <div className="interview-video-container"> */}
        {/* <h1 className="in-v-header">Celebrating the Champions Within</h1>
        <p className="in-v-desc">
          The Indian Polo Awards is an initiative to recognize and celebrate the
          conspicuous success of the most remarkable people from the magnificent
          world of Polo. As a first of its kind venture, the Awards glorify the
          impeccable spirit of the sport and the people who have emblazoned it
          with their dynamism and vivacity.
        </p> */}
        {/* <VideoContainer data={videoData.c2} openVideo={(url) => openVideo(url)} />
         <VideoContainer data={videoData.c3} openVideo={(url) => openVideo(url)} /> */}
      </div>
      {/* <div className="interview-video-container">
        <h1 className="in-v-header">ceremonies</h1>
        <p className="in-v-desc">
          The Indian Polo Awards is an initiative to recognize and celebrate the
          conspicuous success of the most remarkable people from the magnificent
          world of Polo. As a first of its kind venture, the Awards glorify the
          impeccable spirit of the sport and the people who have emblazoned it
          with their dynamism and vivacity.
        </p>
      </div>
      <div className="interview-video-container">
        <h1 className="in-v-header">trophy story</h1>
        <p className="in-v-desc">
          The Indian Polo Awards is an initiative to recognize and celebrate the
          conspicuous success of the most remarkable people from the magnificent
          world of Polo. As a first of its kind venture, the Awards glorify the
          impeccable spirit of the sport and the people who have emblazoned it
          with their dynamism and vivacity.
        </p>
        <VideoContainer images={['7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg']} titles={['Dhananjay Singh', 'Col. Ravi Rathore','Kuldeep Rathore', 'Sunny Patel','Siddhant Singh', 'Vikram Barkana']} openVideo={(url)=>openVideo(url)} links = {['https://www.instagram.com/p/CKY7aZ1JLu9/?utm_source=ig_web_button_share_sheet','https://www.instagram.com/p/CKa2R4wpYZV/?utm_source=ig_web_copy_link','https://www.instagram.com/p/CKddI0OpOoe/?utm_source=ig_web_copy_link','https://www.instagram.com/p/CKeRgMApxtH/?utm_source=ig_web_copy_link','https://www.instagram.com/p/CKitCUqpshM/?utm_source=ig_web_copy_link','https://www.instagram.com/p/CKitCUqpshM/?utm_source=ig_web_copy_link']} />
      </div>
 */}

      {/* <AwardsVideoSection /> */}

      {/* <h3
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
      </h3> */}
      <div className="v-related-posts">
        {/* {blogs.slice(0, 3).map((item) => (
          <RelatedBlogs key={item.id} item={item} />
        ))} */}
      </div>
      <BlogCardsRelated />

      <Footer />
    </div>
  );
};

export default Event;
