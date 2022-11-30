import React from 'react';
import '../assets/css/partnerpage.css';
import VideoContainer from '../components/VideoContainer';
import Footer from './Footer';
// import { Link } from 'react-router-dom';
import Nav from './Nav';

const PartnerPage = () => {
  // const [classupdate, setClassupdate] = useState(false);
  return (
    <div>
      <div className="container video-container">
        <div className="hero video-nav">
          {/* <div className="nav">
            <div className="logo">
            <Link to="/">
              <img src={require('../assets/img/logo.png')} alt="TIPA" />
            </Link>
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => setClassupdate(!classupdate)}
              className="menu"
            >
              {classupdate ? 'Close' : 'Menu'}
            </div>
            <div className={classupdate ? 'nav-links open' : 'nav-links'}>
              <ul
                style={{
                  listStyle: 'none',
                  height: '70vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  textAlign: 'center',
                  paddingInlineStart: '0',
                }}
              >
                <a href="/home">
                <li className="menu-links">
                  <p style={{margin: 0}} >Home</p>
                </li>
              </a>
              <a href="/home">
                <li className="menu-links">
                  <p style={{margin: 0}} >About Us</p>
                </li>
              </a>
              <a href="/event-coming">
                <li className="menu-links">
                  <p style={{margin: 0}} >Videos</p>
                </li>
              </a>
              <a href="/blog">
                <li className="menu-links">
                  <p style={{margin: 0}}>Blogs</p>
                </li>
              </a>

              <a href="/nomination">
                <li className="menu-links">
                  <p style={{margin: 0}} >Nominations</p>
                </li>
              </a>
              </ul>

              <div className="social-blog">
              <a href="https://www.facebook.com/TheIndianPoloAwards/" target="_blank" rel="noopener noreferrer" >
                  <img
                    src={require('../assets/img/svg/Icon awesome-facebook-f.svg')}
                    alt="facebook"
                    height="20px"
                    width="15px"
                  />
                </a>
                <a href="https://twitter.com/IndianpoloAwrds" target="_blank" rel="noopener noreferrer">

                  <img
                    src={require('../assets/img/svg/Icon awesome-twitter.svg')}
                    height="20px"
                    width="15px"
                    alt="twitter"
                  />
                </a>
                <a href="https://www.instagram.com/theindianpoloawards/" target="_blank" rel="noopener noreferrer" >
                  <img
                    src={require('../assets/img/svg/insta.svg')}
                    alt="external"
                    height="20px"
                    width="15px"
                  />
                </a>
              </div>
            </div>
              </div> */}
              <Nav />
        </div>
      </div>

      <div className="partner-header-img">
        <div>
          <h1 className="prt-htxt">STERNHAGEN GERMANY</h1>
          <div className="prt-social">
            <img
              style={{ cursor: 'pointer' }}
              src={require('../assets/img/svg/facebook.svg')}
              alt="facebook"
              height="14px"
              width="10px"
            />
            <img
              style={{ cursor: 'pointer' }}
              src={require('../assets/img/svg/twitter.svg')}
              alt="facebook"
              height="14px"
              width="10px"
            />
            <img
              style={{ cursor: 'pointer' }}
              src={require('../assets/img/svg/external.svg')}
              alt="facebook"
              height="14px"
              width="10px"
            />
          </div>
          <p className="prt-desc">
            TIPA emerged from a vision to redefine the experience of Polo by
            hosting an iconic award show, an occasion inviting the most
            illustrious names associated with the game, The Indian Polo Award
            prepares to pay a cumulative regard to a heritage sprawling well
            over 2000 years in a grand procession. It simultaneously seeks to
            award an uncompromising spirit behind the sport by extending
            recognition to people who have been unflinchingly contributing to
            the glory of polo. Under the aegis of LA POLO, TIPA has arrived to
            foster new milestones for Indian Polo by creating a truly
            scintillating celebration.
          </p>
        </div>
      </div>
      <div className="partner-detail">
        <img
          src={require('../assets/img/partner-logo.png')}
          alt="partner-logo"
        />
        <p className="partner-detail-para">
          The Indian Polo Awards is an initiative to recognize and celebrate the
          conspicuous success of the most remarkable people from the magnificent
          world of Polo. As a first of its kind venture, the Awards glorify the
          impeccable spirit of the sport and the people who have emblazoned it
          with their dynamism and vivacity.
        </p>
      </div>

      <div className="brand-gallery">
        <h1>brand gallery</h1>
        <VideoContainer />
      </div>

      <h3
        style={{
          textAlign: 'center',
          color: ' #cdb071',
          fontSize: '1.8rem',
          backgroundColor: '#fff',
          margin: '0',
          fontWeight: '400',
          paddingTop: '4rem',
        }}
      >
        Related Posts
      </h3>
      <div className="v-related-posts">
        <div className="v-post">
          <div className="v-post-img1" />
          <p className="v-post-date">april 15 ,2020 Sports</p>
          <h3 className="v-post-header">standing out by simply saying less</h3>
        </div>
        <div className="v-post">
          <div className="v-post-img2" />
          <p className="v-post-date">april 15 ,2020 Sports</p>
          <h3 className="v-post-header">standing out by simply saying less</h3>
        </div>
        <div className="v-post">
          <div className="v-post-img3" />
          <p className="v-post-date">april 15 ,2020 Sports</p>
          <h3 className="v-post-header">standing out by simply saying less</h3>
        </div>
      </div>
      <div className="footer-banner-container">
        <div className="footer-banner">
          <img
            src={require('../assets/img/partner-bot2.png')}
            alt="footer-banner"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PartnerPage;
