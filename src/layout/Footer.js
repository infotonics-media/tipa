import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import PartnerStrip from '../components/PartnerStrip';

// here you have to put the mail subscribe link
const ENDPOINT = 'https://backend.theindianpoloawards.com';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [pdf, setPdf] = useState('')
  const validateEmail = (email) => {
    // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const re = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    return re.test(email.toLowerCase());
  };
  useEffect(() => {
    Axios.get(ENDPOINT + '/footer/pdf_files/')
      .then((res) => {
        setPdf(res.data.pdf_file)
        // console.log(res.data);
      })
      .catch((err) => {
        // console.log('footer PDF error', err);
      })
  }, [])
  const submitHandler = () => {
    //setLoading(true);
    const chk = validateEmail(email);
    if (!chk) {
      alert('Your email is not a valid email');
      setLoading(false);
    } else {
      setEmail('');
      setLoading(true);
      Axios.post(ENDPOINT + '/newsletter/', {
        email: email,
      })
        .then((res) => {
          setLoading(false);
          setSubStatus(res.data.Success);

          //console.log(subStatus,'blj');
        })
        .catch((err) => {
          setSubStatus('Contact to admin');
          setLoading(false);
        });
    }
  };
  return (
    <>
      {/* <PartnerStrip title={true} /> */}
      <div className="footer">
        <div className="tfooter">
          <div className="logo">
            <img src={require('../assets/img/tagline/tagline1.png')} alt="" />
          </div>
          <div className="quicklinks">
            <div className="heading">QUICK LINKS</div>
            <div className="links">
              {/* <div className="item">
              <a style={{ textTransform: 'capitalize' }} href=".">
                About
              </a>
            </div>
            <div className="item">
              <a style={{ textTransform: 'capitalize' }} href=".">
                Contact Us
              </a>
            </div> */}
              <div className="item">
                <a target="_blank" rel="noopener noreferrer" style={{ textTransform: 'capitalize' }} href={ENDPOINT + pdf}>
                  Associate with us
              </a>
              </div>
              <div className="item">
                <a style={{ textTransform: 'capitalize' }} href="/award-categories">
                  Award categories
              </a>
              </div>
              <div className="item">

                <a style={{ textTransform: 'capitalize' }} href="/privacy-policy">
                  Privacy policy
              </a>

              </div>
            </div>
          </div>
          <div className="subscribe">
            <div className="tag italiana">Monthly wisdom and advice</div>
            {loading ? (
              <div className="loader"></div>
            ) : subStatus ? (
              <div className="submessage">{subStatus}</div>
            ) : (
                  <div className="input">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      placeholder="Enter Email"
                    />
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={submitHandler}
                      className="btn"
                    >
                      <img src={require("../assets/img/leftarrow.png")} alt="" />
                    </div>
                  </div>
                )}
          </div>
        </div>
        <div className="bfooter">
          <div className="copy">&copy; 2021 TIPA all rights reserved</div>
          <div className="fb">
            <a href="https://www.facebook.com/TheIndianPoloAwards/">FACEBOOK</a>
          </div>
          <div className="in">
            <a href="https://www.instagram.com/theindianpoloawards/">INSTAGRAM</a>
          </div>
          <div className="tw">
            <a href="https://twitter.com/IndianpoloAwrds">TWITTER</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
