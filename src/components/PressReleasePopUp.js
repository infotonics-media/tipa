import Axios from "axios";
import React, { useEffect, useState } from "react";
import PressCards from "./PressCards";
import "../assets/css/pressRelase.css";
import TetstimonialsLayout from "../layout/TetstimonialsLayout";
//import { SRLWrapper } from "simple-react-lightbox";

const PressReleasePopUp = () => {
  const url = "https://backend.theindianpoloawards.com/press/page-data";
  const [image, setImage] = useState([]);
  const [des, setDes] = useState("");
  useEffect(() => {
    Axios.get(url)
      .then((res) => {
        setImage(res.data);
        setDes(res.data.details);
      })
      .catch((err) => console.log(err));
  }, []);
  const previous = image?.previous?.map((item) => (
    <PressCards key={item.id} item={item} />
  ));

  const current = image?.current?.map((item) => (
    item?.year !== 2024 && <PressCards key={item.id} item={item} />
  ));
  const season3 = image?.current?.map((item) => (
    item?.year === 2024 && <PressCards key={item.id} item={item} />
  ));
  return (
    <>
      <div className="imglog">
        {/* <img
          className="logoimg"
          src="https://www.theindianpoloawards.com/static/media/tagline1.06d3ccfa.png"
          alt="logo"
        /> */}
        {/* <img className='logoimg' src={'https://www.theindianpoloawards.com/static'+des.hero_image} alt="logo" /> */}
      </div>
      {/* <SRLWrapper> */}
      <div className="title">
        <p>2024</p>
        <h2>Press Release</h2>
        <h6>Beyond the realms of commemoration this is a diligent tribute to the craft that goes into making the perfect polo player, enchanting the onlooker to bask in the minute details</h6>
      </div>
      <div className="presgrid">{season3}</div>
      
      <div className="title">
        <p>2022</p>
        <h2>Press Release</h2>
        <h6>Beyond the realms of commemoration this is a diligent tribute to the craft that goes into making the perfect polo player, enchanting the onlooker to bask in the minute details</h6>
      </div>
      <div className="presgrid">{current}</div>
      <div className="title">
        <p className="text-center">2021</p>
        <h2>Press Release</h2>
      </div>
      <div className="presgrid">{previous}</div>
      <TetstimonialsLayout />
      {/* </SRLWrapper> */}
    </>
  );
};

export default PressReleasePopUp;
