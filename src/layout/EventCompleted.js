import React from 'react';
import '../assets/css/eventcompleted.css';
import InMotion from './InMotion';
import SliderVideo from '../components/SliderVideo';
import ModalVideo from 'react-modal-video';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Nav from './Nav';

class EventCompleted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentVideo: 'UI2FOcljo84',
      Open: false,
    };
  }
  playVideo = (id) => {
    this.setState({
      CurrentVideo: id,
      Open: true,
    });
  };
  render() {
    if (this.props.is_completed) {
      var block = 'Watch Highlights';
    } else if (this.props.is_live) {
      block = 'Watch it on Youtube';
    } else if (this.props.is_coming) {
      block = (
        <div>
          Starting In
          <div>01 01 01 01</div>
        </div>
      );
    }

    return (
      <div className="event-wrapper">
        <div className="event-bg1">
          {/* <div className="nav blog-navbar-nav ">
            <div className="logo blog-nav-logo">
            <Link to="/">
              <img src={require('../assets/img/logo.png')} alt="TIPA" />
            </Link>
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => setClassupdate(!classupdate)}
              className="menu blog-nav-menu"
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

              <a href="/award-categories">
                <li className="menu-links">
                  <p style={{margin: 0}} >Award categories</p>
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
          <button className="event-watch-button">{block}</button>
        </div>
        <div className="event-videos">
          <InMotion />
        </div>
        <div className="event-nav1">
          <div className="interview">Interviews</div>
          <div className="event-awards">Award Highlights</div>
          <div className="ceremonies">ceremonies</div>
          <div className="trophy">Trophy Stores</div>
        </div>
        <div className="event-interview">
          <div className="event-interview-heading">Tipa Interview Videos</div>
          <div className="event-interview-desc">
            The Indian Polo Awards is an initiative to recognize and celebrate
            the conspicuous success of the most remarkable people from the
            magnificent world of Polo. As a first of its kind venture, the
            Awards glorify the impeccable spirit of the sport and the people who
            have emblazoned it with their dynamism and vivacity.
          </div>
          <div className="videogrid">
            <ModalVideo
              channel="youtube"
              isOpen={this.state.Open}
              videoId={this.state.CurrentVideo}
              onClose={() =>
                this.setState({
                  Open: false,
                })
              }
              autoplay={1}
              controls={0}
            />
            <div className="grid1">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid1.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid2">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid2.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid3">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid3.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid4">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid4.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid5">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid5.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid6">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid6.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="event-award">
          <div className="event-award-heading">Award Highlights</div>
          <div className="event-award-desc">
            The Indian Polo Awards is an initiative to recognize and celebrate
            the conspicuous success of the most remarkable people from the
            magnificent world of Polo. As a first of its kind venture, the
            Awards glorify the impeccable spirit of the sport and the people who
            have emblazoned it with their dynamism and vivacity.
          </div>
          <div className="videogrid">
            <ModalVideo
              channel="youtube"
              isOpen={this.state.Open}
              videoId={this.state.CurrentVideo}
              onClose={() =>
                this.setState({
                  Open: false,
                })
              }
              autoplay={1}
              controls={0}
            />
            <div className="grid1">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid1.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid2">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid2.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid3">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid3.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid4">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid4.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid5">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid5.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid6">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid6.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="event-ceremonies">
          <div className="event-ceremonies-heading">ceremonies</div>
          <div className="event-ceremonies-desc">
            The Indian Polo Awards is an initiative to recognize and celebrate
            the conspicuous success of the most remarkable people from the
            magnificent world of Polo. As a first of its kind venture, the
            Awards glorify the impeccable spirit of the sport and the people who
            have emblazoned it with their dynamism and vivacity.
          </div>
          <div className="videogrid">
            <ModalVideo
              channel="youtube"
              isOpen={this.state.Open}
              videoId={this.state.CurrentVideo}
              onClose={() =>
                this.setState({
                  Open: false,
                })
              }
              autoplay={1}
              controls={0}
            />
            <div className="grid1">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid1.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid2">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid2.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid3">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid3.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid4">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid4.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid5">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid5.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid6">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid6.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="event-trophy">
          <div className="event-trophy-heading">Trophy Story</div>
          <div className="event-trophy-desc">
            The Indian Polo Awards is an initiative to recognize and celebrate
            the conspicuous success of the most remarkable people from the
            magnificent world of Polo. As a first of its kind venture, the
            Awards glorify the impeccable spirit of the sport and the people who
            have emblazoned it with their dynamism and vivacity.
          </div>
          <div className="videogrid">
            <ModalVideo
              channel="youtube"
              isOpen={this.state.Open}
              videoId={this.state.CurrentVideo}
              onClose={() =>
                this.setState({
                  Open: false,
                })
              }
              autoplay={1}
              controls={0}
            />
            <div className="grid1">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid1.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid2">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid2.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid3">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid3.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid4">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid4.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid5">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid5.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
            <div className="grid6">
              <div className="grid-backdrop"></div>
              <div className="grid-text">The Indian Polo Awards</div>
              <img
                src={require('../assets/img/grid6.png')}
                alt="stock"
                className="grid-img"
              />
              <div className="grid-play">
                <SliderVideo
                  videoId="UI2FOcljo84"
                  play={(id) => this.playVideo(id)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="event-related-heading">Related Posts</div>
        <div className="event-related-posts">
          <div className="event-post-box">
            <img
              src={require(`../assets/blog/${this.props.link_img[0]}`)}
              alt="stock"
            />
            <div className="year">{this.props.link_date[0]}</div>
            <div className="title">
              <Link to={this.props.links[0]}>{this.props.link_title[0]}</Link>
            </div>
          </div>
          <div className="event-post-box">
            <img
              src={require(`../assets/blog/${this.props.link_img[1]}`)}
              alt="stock"
            />
            <div className="year">{this.props.link_date[1]}</div>
            <div className="title">
              <Link to={this.props.links[1]}>{this.props.link_title[1]}</Link>
            </div>
          </div>
          <div className="event-post-box">
            <img
              src={require(`../assets/blog/${this.props.link_img[2]}`)}
              alt="stock"
            />
            <div className="year">{this.props.link_date[2]}</div>
            <div className="title">
              <Link to={this.props.links[2]}>{this.props.link_title[2]}</Link>
            </div>
          </div>
        </div>
        <div className="event-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default EventCompleted;
