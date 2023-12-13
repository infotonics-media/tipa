import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import "../assets/css/partnerstrip.css";

const ENDPOINT = "https://backend.theindianpoloawards.com/";

const PartnerStrip = (props) => {
  const images = useRef(null);
  const partnerImages = useSelector((state) => state.FetchApi.Partners);
  // useEffect(() => {
  //   if (
  //     window.navigator.platform === "iPhone" &&
  //     window.innerWidth <= 769 &&
  //     images !== null
  //   ) {
  //     images.current.classList.append("iphoneImages");
  //     let image = images.current.children;
  //     image.forEach((item) => item.classList.append("iphoneImg"));
  //   }
  // }, [images]);
  return (
    <div className="partnerStrip">
      {props.title && <div className="heading italiana">PARTNERS</div>}
      <div ref={images} className="images iphoneImages">
        {partnerImages &&
          partnerImages.map((item, index) => (
            <div key={item.id} className="img iphoneImg">
              <img src={item.logo} alt={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PartnerStrip;
