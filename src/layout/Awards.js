import React from 'react';

const Awards = () => {
  return (
    <div className="awards">
      <div className="images">
        <div className="im1">
          <img src={require('../assets/img/award/1.jpg')} alt="" />
        </div>
        <div className="im2">
          <img src={require('../assets/img/award/2.jpg')} alt="" />
        </div>
        <div className="im3">
          <img src={require('../assets/img/award/3.jpg')} alt="" />
        </div>
        <div className="im4">
          <img src={require('../assets/img/award/4.jpg')} alt="" />
        </div>
        <div className="logo">
          <img src={require('../assets/img/tagline/tagline1.png')} alt="" />
        </div>
        <div className="text">
        The Indian Polo Awards, the first of its kind, introduced in the year 2021 is to recognize excellence within the polo fraternity. We ratify and uphold unmatched caliber, boundless merit and the undefeated spirit for an outstanding future of the sport.
        </div>
        <div className="year italiana">2022</div>

        <div className="im5">
          <img src={require('../assets/img/award/5.jpg')} alt="" />
        </div>
        <div className="im6">
          <img src={require('../assets/img/award/6.jpg')} alt="" />
        </div>
        <div className="im7">
          <img src={require('../assets/img/award/7.jpg')} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
