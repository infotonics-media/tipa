import React,{useState, useEffect} from 'react'
import "../assets/css/partnerContent.css"
import Footer from './Footer'
import Nav from './Nav'
import { FaFacebookF,FaTwitter } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import InstaVideoPopUp from '../components/InstaVideoPopUp';
import VideoContainer from '../components/VideoContainer';
import { Link } from 'react-router-dom';
import VideosBanner from '../components/VideosBanner';


const PartnerContent = (props) => {
  const [videoState, setVideoState] = useState(false);
  const [videoUrl, setVideoUrl] = useState('')

  const openVideo = (url) => {
    setVideoState(true)
    setVideoUrl(url)
  }
  useEffect(() => {
    setTimeout(() => {
      if (document.querySelector(".swiper") !== null) {
        document.querySelector(".swiper video").play()
      }else if (document.querySelector(".swiper") === null && videoState === true)
      {
        document.querySelector(".videoContainer video").play()
      }
    }, 1000);

  }, [openVideo])
  return (
    <>
     {videoState ? <InstaVideoPopUp clickHandler={()=>setVideoState(false)} url={videoUrl} /> : <></> }

    <div className="partnerContent">
      <Nav />    <div className="hero">
        <div className="data">
        <div className="partnerName">
        Los Polistas
        </div>
        <div className="socialShare">
          <FaFacebookF color="white" />
          <FaTwitter color="white" />
          <RiShareBoxLine color="white" />
        </div>
        <div className="desc">
        TIPA emerged from a vision to redefine the experience of Polo by hosting an iconic award show, an occasion inviting the most
        </div></div>
      </div>
      <div className="content">
        <div className="partnerLogo">
          <img src={require("../assets/img/partners/los_logo.png")} alt="" />
        </div>
        <div className="description">
        The Indian Polo Awards is an initiative to recognize and celebrate the conspicuous success of the most remarkable people from the magnificent world of Polo. As a first of its kind venture, the Awards glorify the impeccable spirit of the sport and the people who have emblazoned it with their dynamism and vivacity.
        </div>
      </div>
      <div className="brandGallery">
      <h1 className="in-v-header">brand gallery</h1>

      <VideoContainer images={['7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg']} titles={['Dhananjay Singh', 'Col. Ravi Rathore','Kuldeep Rathore', 'Sunny Patel','Siddhant Singh', 'Vikram Barkana']} openVideo={(url)=>openVideo(url)} links = {['https://www.instagram.com/p/CKY7aZ1JLu9/?utm_source=ig_web_button_share_sheet','https://www.instagram.com/p/CKa2R4wpYZV/?utm_source=ig_web_copy_link','https://www.instagram.com/p/CKddI0OpOoe/?utm_source=ig_web_copy_link','https://www.instagram.com/p/CKeRgMApxtH/?utm_source=ig_web_copy_link','https://www.instagram.com/p/CKitCUqpshM/?utm_source=ig_web_copy_link','https://www.instagram.com/p/CKitCUqpshM/?utm_source=ig_web_copy_link']} />
      </div>
      <div className="relatedPost">

      <h3
        style={{
          textAlign: 'center',
          color: ' #cdb071',
          fontSize: '20px',
          backgroundColor: '#fff',
          margin: '-1px 0',
          fontWeight: '400',
          paddingTop: '4rem',
          textTransform: 'uppercase'
        }}
      >
        Related Posts
      </h3>
      <div className="v-related-posts">
        <div className="v-post">
          <Link to={props.links[0]}>
          <div>
              <img
                src={require(`../assets/blog/${props.link_img[0]}`)}
                height="270px"
                alt="cover-blog"
              ></img>
            </div>
            <p className="v-post-date">{props.link_date[0]}</p>
            <h3 className="v-post-header">{props.link_title[0]}</h3>
          </Link>
        </div>
        <div className="v-post">
          <Link to={props.links[1]}>
          <div>
              <img
                src={require(`../assets/blog/${props.link_img[1]}`)}
                height="270px"
                alt="cover-blog"
              ></img>
            </div>
            <p className="v-post-date">{props.link_date[1]}</p>
            <h3 className="v-post-header">{props.link_title[1]}</h3>
            {/* <div className="v-post-img2" />
            <p className="v-post-date">{props.link_date[1]}</p>
            <h3 className="v-post-header">{props.link_title[0]}</h3> */}
          </Link>
        </div>

        <div className="v-post">
          <Link to={props.links[2]}>
          <div>
              <img
                src={require(`../assets/blog/${props.link_img[2]}`)}
                height="270px"
                alt="cover-blog"
              ></img>
            </div>
            <p className="v-post-date">{props.link_date[2]}</p>
            <h3 className="v-post-header">{props.link_title[2]}</h3>
            {/* <div className="v-post-img3" />
            <p className="v-post-date">{props.link_date[2]}</p>
            <h3 className="v-post-header">{props.link_title[0]}</h3> */}
          </Link>
        </div>
      </div>

      </div>
      <div className="videoBanner-sec">
      <VideosBanner is_live={props.is_live} is_completed={props.is_completed} is_coming={props.is_coming} />
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default PartnerContent
