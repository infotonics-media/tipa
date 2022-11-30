import React, { useEffect, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../assets/css/galleryPopUp.css";

const ENDPOINT = "https://backend.theindianpoloawards.com/";

const GalleryPopUp = (props) => {
  const slider = useRef(null);
  const nextHandler = () => {
    if (slider !== null) {
      console.log(slider.current);
      slider.current.slideNext();
    }
  };
  const prevHandler = () => {
    if (slider !== null) {
      slider.current.slidePrev();
    }
  };
  const slideToIndex = (i) => {
    if (slider !== null) {
      console.log(i);
      slider.current.slideTo(i);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (props.activeImage) {
        console.log(props.activeImage);

        slideToIndex(props.activeImage);
      }
    }, 10);
    return () => clearTimeout(timer);
  }, [props]);

  return (
    <div className="slider-container">
      <div className="prevBtn" onClick={prevHandler}>
        <img src={require("../assets/img/leftarrow.png")} alt="" />
      </div>
      <div className="nextBtn" onClick={nextHandler}>
        <img src={require("../assets/img/leftarrow.png")} alt="" />
      </div>
      <div onClick={() => props.closeHandler()} className="close">
        <img src={require("../assets/img/close.png")} alt="" />
      </div>
      <AliceCarousel
        ref={slider}
        infinite={true}
        startIndex={1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        responsive={true}
        disableDotsControls={true}
        disableButtonsControls={true}
      >
        {props
          ? props.images.map((item) => (
            <div key={item.id} className="galleryItem">
              <div>
                <img src={ENDPOINT + item.photo} alt="" />
              </div>
              <div className="caption">{item.caption ? item.caption : ''}</div>
            </div>
          ))
          : ""}
        {/* <div className="galleryItem">
          <img src={require("../assets/img/inmotion/T1.jpg")} alt="" />
        </div>
        <div className="galleryItem">
          <img src={require("../assets/img/inmotion/T2.jpg")} alt="" />
        </div>

        <div className="galleryItem">
          <img src={require("../assets/img/inmotion/T3.jpg")} alt="" />
        </div>

        <div className="galleryItem">
          <img src={require("../assets/img/inmotion/T4.jpg")} alt="" />
        </div>

        <div className="galleryItem">
          <img src={require("../assets/img/inmotion/T5.jpg")} alt="" />
        </div> */}
      </AliceCarousel>
      <div className="bottomSlider">
        {props
          ? props.images.map((item, index) => (
            <div
              key={item.id}
              onClick={() => slideToIndex(index)}
              className="bottomSliderItem"
              style={{
                backgroundImage: `url(${ENDPOINT + item.photo})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {/* <img src={} alt="" /> */}
            </div>
          ))
          : ""}
        {/* <div onClick={() => slideToIndex(1)} className="bottomSliderItem">
          <img src={require("../assets/img/inmotion/T1.jpg")} alt="" />
        </div>
        <div onClick={() => slideToIndex(2)} className="bottomSliderItem">
          <img src={require("../assets/img/inmotion/T2.jpg")} alt="" />
        </div>

        <div onClick={() => slideToIndex(3)} className="bottomSliderItem">
          <img src={require("../assets/img/inmotion/T3.jpg")} alt="" />
        </div>

        <div onClick={() => slideToIndex(4)} className="bottomSliderItem">
          <img src={require("../assets/img/inmotion/T4.jpg")} alt="" />
        </div>

        <div onClick={() => slideToIndex(5)} className="bottomSliderItem">
          <img src={require("../assets/img/inmotion/T5.jpg")} alt="" />
        </div>
        <div onClick={() => slideToIndex(5)} className="bottomSliderItem">
          <img src={require("../assets/img/inmotion/T5.jpg")} alt="" />
        </div>
        <div onClick={() => slideToIndex(5)} className="bottomSliderItem">
          <img src={require("../assets/img/inmotion/T5.jpg")} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default GalleryPopUp;
