import React from 'react';
import { Link } from 'react-router-dom';
const ENDPOINT = 'https://backend.theindianpoloawards.com';
const PlayerProfile = (props) => {
  return (
    <div className="pprof">
      <div className="img">
        <Link to={'/award-categories/' + props.nomSlug + '/' + props.data.slug}>
          <img src={ENDPOINT + props.data.profile_photo} alt="" />
        </Link>
      </div>
      <div className="name">{props.data.title}</div>
      <div className="knowmore">
        <Link to={'/award-categories/' + props.nomSlug + '/' + props.data.slug}>
          knowmore
        </Link>
        <img src={require('../assets/img/arw.png')} alt="" />
      </div>
    </div>
  );
};

export default PlayerProfile;
