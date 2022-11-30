import React, { useEffect, useState } from "react";
import style from "../assets/css/tetstimonials.module.css";
import "../assets/css/ed.css";
import winner from "../assets/img/winner.jpg";
import Axios from "axios";

function Tetstimonials({ slider }) {
  // const sliderData = [
  //   { img: winner, title: "I am completely one" },
  //   { img: winner, title: "I am completely two" },
  //   { img: winner, title: "I am completely three" },
  //   { img: winner, title: "I am completely four" },
  // ];

  const [sliderData, setSlider] = useState();
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
  const lenght = slider.length;
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };
  const prev = () => {
    setCurrent(current === 0 ? lenght-1 : current - 1);
  };
  if (!Array.isArray(slider) || slider.length <= 0) {
    return null;
  }
  return (
    <section>
      {sliderData.map((item, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className={style.card}>
                <div class={style.imgBorder}></div>
                <div className={style.content}>
                  <img src={item.image} alt="image" />
                  <div className={style.data}>
                    <h3>{item.intro}</h3>
                    <h4>
            {item.review_body}
                    </h4>
                    <div className={style.navigation}>
                      <p>
                      {item.name}
                      </p>
                      <div className={style.buttons}>
                        <div className={style.left}>
                          <div
                            style={{ cursor: "pointer" }}
                            className="prev"
                            onClick={prev}
                          >
                            <img
                              src={require("../assets/img/leftarrow.png")}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="middle">
                          {current + 1}/{lenght}
                        </div>
                        <div className="right">
                          <div
                            style={{ cursor: "pointer" }}
                            className="next"
                            onClick={next}
                          >
                            <img
                              src={require("../assets/img/leftarrow.png")}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Tetstimonials;
