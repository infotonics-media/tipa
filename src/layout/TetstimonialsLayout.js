import React, { useEffect } from "react";
import Tetstimonials from "../components/Tetstimonials";
import winner from "../assets/img/winner.jpg";
import { useState } from "react";
import style from "../assets/css/tetstimonials.module.css";
import Axios from "axios";

function TetstimonialsLayout() {
  // const slider = [
  //   { img: winner, title: "I am completely one" },
  //   { img: winner, title: "I am completely two" },
  //   { img: winner, title: "I am completely three" },
  //   { img: winner, title: "I am completely four" },
  // ];

  const [slider, setSlider] = useState([]);
  useEffect(() => {
    Axios
      .get("https://backend.theindianpoloawards.com/testimonial/all-testimonials")
      .then((response) => {
        setSlider(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let result = Array.isArray(slider);
  console.log('slider',typeof (slider));
  console.log('slider',result);
  console.log(slider?.length);
  return (
    <div>
      <div class={style.title}>Tetstimonials</div>
      <Tetstimonials slider={slider} />
    </div>
  );
}

export default TetstimonialsLayout;
