import React, { useState } from 'react';
import '../assets/css/registrationpage.css';
import Registration from './Registration';
import ModalVideo from 'react-modal-video';
import Footer from './Footer';
import Nav from './Nav';
// import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [open, setOpen] = useState(false);
  // const [classupdate, setClassupdate] = useState(false);

  return (
    <div className="register-wrapper">
      <div className="container registration-container">
        <div className="hero registration-nav">
          <Nav/>
        </div>
        <div className="register-header-image">
          <img src={require('../assets/img/partner-bot2.png')} alt="header" />
        </div>
      </div>
      <Registration />

      <div className="register-about">
        <div className="register-about-bg"></div>
        <div className="register-about-heading">About US</div>
        <div className="register-about-subheading">
          TIPA emerged from a vision to redefine the experience of Polo by
          hosting an iconic award
        </div>
        <div className="register-about-video">
          <div className="about">
            <ModalVideo
              channel="youtube"
              isOpen={open}
              videoId="UI2FOcljo84"
              onClose={() => setOpen(false)}
              autoplay={1}
              controls={0}
            />
            <div className="backgrnd"></div>
            <div className="video">
              <div className="thumb">
                <img src={require('../assets/img/thumb.png')} alt="" />
                <div onClick={() => setOpen(true)} className="play">
                  <img src={require('../assets/img/play.png')} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="register-about-desc">
          <div className="register-about-detail-conatiner">
            <div className="register-about-desc-heading">
              standing out by simply saying less
            </div>
            <div className="register-about-desc-desc">
              The Indian Polo Awards is an initiative to recognize and celebrate
              the conspicuous success of the most remarkable people from the
              magnificent world of Polo. As a first of its kind venture, the
              Awards glorify the impeccable spirit of the sport and the people
              who have emblazoned it with their dynamism and vivacity.
            </div>
            <ul>
              <li>
                The Indian Polo Awards is an initiative to recognize and
                celebrate the conspicuous success of the most
              </li>
              <li>The Indian Polo Awards is an initiative to recognize</li>
              <li>
                The Indian Polo Awards is an initiative to recognize and
                celebrate the c
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="register-footer">
        <Footer />
      </div>
    </div>
  );
};

export default RegistrationPage;
