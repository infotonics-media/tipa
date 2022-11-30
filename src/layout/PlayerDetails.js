import React, { createRef } from 'react';
import Player from '../assets/img/player.png';
import Arrow from '../assets/img/arw.png';
import fb from '../assets/img/f.png';
import twitter from '../assets/img/t.png';
import insta from '../assets/img/i.png';
import '../assets/css/playerdetail.css';
import Footer from './Footer';
import jsondata from '../assets/data/playerdetails.json';
import InMotion from './InMotion';
import Nav from './Nav';

class PlayerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.animRef = createRef();
    this.storyRef = createRef();
    this.aboutRef = createRef();
    this.videosRef = createRef();
    this.showcaseRef = createRef();

    this.state = {
      classupdate: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.animRef.current.setAttribute('style', 'opacity: 1');
    }, 100);
  }

  setClassupdate = () => {
    this.setState((state) => ({
      classupdate: !state.classupdate,
    }));
  };
  scrolltoAbout = () => {
    this.aboutRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  scrolltoStory = () => {
    this.storyRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  scrolltoVideos = () => {
    this.videosRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  scrolltoShowcase = () => {
    this.showcaseRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  render() {
    return (
      <div className="player-detail" ref={this.animRef}>
        <div className="detail-player-card">
          {/* <div className="nav pdetail-navbar">
            <div className="logo detail-logo">
              <img src={require('../assets/img/logo.png')} alt="TIPA" />
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => this.setClassupdate()}
              className="menu detail-menu"
            >
              {this.state.classupdate ? 'Close' : 'Menu'}
            </div>
            <div
              className={
                this.state.classupdate
                  ? 'nav-links open detail-nav-links'
                  : 'nav-links detail-nav-links'
              }
            >
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
          </div>
        */}
        <Nav />
        </div>
        <div className="detail-wrapper">
          <div className="detail-img-wrapper">
            <img src={Player} className="player-img" alt="Player" />
            <div className="detail-icons">
              <img src={fb} alt="icon1" />
              <img src={twitter} alt="icon2" />
              <img src={insta} alt="icon3" />
            </div>
          </div>
          <div className="name-about-container">
            <div className="detail-player-name">{jsondata.Player.name}</div>
            <div className="detail-player-about">
              About
              <button className="detail-more-info" onClick={this.scrolltoAbout}>
                {' '}
                <img src={Arrow} className="arrow" alt="" />
              </button>
            </div>
            <div className="detail-player-stories">
              Stories
              <button className="detail-more-info" onClick={this.scrolltoStory}>
                <img src={Arrow} className="arrow" alt="" />
              </button>
            </div>
            <div className="detail-player-videos">
              Videos
              <button
                className="detail-more-info"
                onClick={this.scrolltoVideos}
              >
                {' '}
                <img src={Arrow} className="arrow" alt="" />{' '}
              </button>
            </div>
            <div className="detail-player-showcase">
              Showcase
              <button
                className="detail-more-info"
                onClick={this.scrolltoShowcase}
              >
                {' '}
                <img src={Arrow} className="arrow" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="player-about-me">
          <div className="detail-about" ref={this.aboutRef}>
            About Me
            <div className="detail-img">
              <img src={require('../assets/img/player2.png')} alt="player" />
            </div>
          </div>

          <div className="detail-desc-all">
            <div className="detail-desc">
              <div className="detail-heading">{jsondata.about[0].id}</div>
              <div className="detail-short">{jsondata.about[0].short}</div>
            </div>
            <div className="detail-desc">
              <div className="detail-heading">{jsondata.about[0].id}</div>
              <div className="detail-short">{jsondata.about[0].short}</div>
            </div>
            <div className="detail-desc">
              <div className="detail-heading">{jsondata.about[0].id}</div>
              <div className="detail-short">{jsondata.about[0].short}</div>
            </div>
          </div>
        </div>

        <div className="stories-header">
          <div className="detail-stories-heading" ref={this.storyRef}>
            Stories
          </div>
          <div className="detail-stories-img">
            <div className="box">
              <img src={require('../assets/img/rect.png')} alt="stock" />
              <div className="date">{jsondata.stories[0].date}</div>
              <div className="content">{jsondata.stories[0].title}</div>
            </div>
            <div className="box">
              <img src={require('../assets/img/rect1.png')} alt="stock" />
              <div className="date">{jsondata.stories[1].date}</div>
              <div className="content">{jsondata.stories[1].title}</div>
            </div>
            <div className="box">
              <img src={require('../assets/img/rect2.png')} alt="stock" />
              <div className="date">{jsondata.stories[2].date}</div>
              <div className="content">{jsondata.stories[2].title}</div>
            </div>
          </div>
        </div>
        <div className="detail-videos" ref={this.videosRef}>
          {/* <div className="detail-video-heading">Video</div>
          <div className="detail-video-subheading">
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
          </div> */}
          <InMotion title={window.innerWidth >= 768 ? "videos" :"in motion"} />
        </div>
        <div className="detail-showcase">
          <div className="detail-showcase-heading" ref={this.showcaseRef}>
            Showcase
          </div>
          <div className="detail-showcase-desc">
            <div className="year">{jsondata.showcase[0].year}</div>
            <div className="name">{jsondata.showcase[0].title}</div>
            <div className="desc">{jsondata.showcase[0].desc}</div>
            <button className="detail-more-info">
              {' '}
              <img src={Arrow} className="arrow" alt="" />
            </button>
          </div>
        </div>
        <div className="bottom-message">
          <p>
          "The Ball no question makes of Ayes and Noes, But Right or Left as strikes the Player goes;
          <br/>
          And He that toss'd Thee down into the Field,
          <br/>
          He knows about it all - HE knows - HE knows!"
            <br/>
          <span style={{fontSize: '16px'}}>~ Omar Khayyam</span>
          </p>
        </div>
        <div className="details-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default PlayerDetail;
