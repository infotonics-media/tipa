import React from 'react';
import { Link } from 'react-router-dom';

const ENDPOINT = 'https://backend.theindianpoloawards.com/';
const PartnerData = (props) => {
  return (
    <React.Fragment>
      {/* <div className="heading">{props.title}</div> */}
      <div className="heading">
        <img src={props.logo} alt="logo" />
      </div>
      <div className="description">{props.desc}</div>
      <div style={{ zIndex: 1 }} className="button">
        <Link to={"/parnterList/" + props.slug+"#"}>
          <a className="btn" href=".">
          Click Here
          </a>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default PartnerData;
