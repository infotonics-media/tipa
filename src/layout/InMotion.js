import React, { useEffect, useState } from 'react';
import SliderVideo from '../components/SliderVideo';
// import ModalVideo from 'react-modal-video';
import { useSelector } from "react-redux"

import InstaVideoPopUp from '../components/InstaVideoPopUp';
const ENDPOINT = "https://backend.theindianpoloawards.com";
//const ENDPOINT = "http://localhost:3001";



const InMotion = (props) => {
  const [sliderList, setSliderList] = useState(undefined);
  const [currentActive, setCurrentActive] = useState(0);
  const [totalSlide, setTotalSlide] = useState(0);
  const motion = useSelector(state => state.FetchApi.InMotion)

  // console.log('inmotion', motion);
  // const [isOpen, setOpen] = useState(false);
  // const [currentVideo, setCurrentVideo] = useState('UI2FOcljo84');
  useEffect(() => {
    const slider = document.querySelectorAll('.video-slider');
    setSliderList(slider);
    for (let i = 0; i < slider.length; i++) {
      const element = slider[i];
      if (slider.length !== 1) {
        if (i === 0) {
          element.classList.add('left');
        }
        if (i === 1) {
          element.classList.add('active');
          setCurrentActive(i + 1);
        }
        if (i === 2) {
          element.classList.add('right');
        }
      } else {
        element.classList.add('active');
        setCurrentActive(i + 1);
      }
    }
    setTotalSlide(document.querySelectorAll('.video-slider').length);
  }, [motion]);
  // const playVideo = (id) => {
  //   setCurrentVideo(id);
  //   setOpen(true);
  // };

  // for next button
  const next = () => {
    let leftIndex = 0;
    let activeIndex = 0;
    let rightIndex = 0;
    // getting the positions of elements
    for (let index = 0; index < sliderList.length; index++) {
      const element = sliderList[index];
      if (element.classList.contains('left')) {
        element.classList.remove('left');
        leftIndex = index;
      }
      if (element.classList.contains('active')) {
        element.classList.remove('active');
        activeIndex = index;
      }
      if (element.classList.contains('right')) {
        element.classList.remove('right');
        rightIndex = index;
      }
    }
    // settings the positions of elements
    for (let i = 0; i < sliderList.length; i++) {
      const elmnt = sliderList[i];
      if (leftIndex === i) {
        elmnt.classList.add('active');
      }
      if (activeIndex === i) {
        elmnt.classList.add('right');
      }
      if (rightIndex === i) {
        if (leftIndex === 0) {
          sliderList[sliderList.length - 1].classList.add('left');
        } else {
          sliderList[leftIndex - 1].classList.add('left');
        }
      }
    }
    setCurrentActive(leftIndex + 1);
  };

  // for prev button
  const prev = () => {
    let leftIndex = 0;
    let activeIndex = 0;
    let rightIndex = 0;
    // getting the positions of elements
    for (let index = 0; index < sliderList.length; index++) {
      const element = sliderList[index];
      if (element.classList.contains('left')) {
        element.classList.remove('left');
        leftIndex = index;
      }
      if (element.classList.contains('active')) {
        element.classList.remove('active');
        activeIndex = index;
      }
      if (element.classList.contains('right')) {
        element.classList.remove('right');
        rightIndex = index;
      }
    }
    // settings the positions of elements
    for (let i = 0; i < sliderList.length; i++) {
      const elmnt = sliderList[i];
      if (rightIndex === i) {
        elmnt.classList.add('active');
      }
      if (activeIndex === i) {
        elmnt.classList.add('left');
      }
      if (leftIndex === i) {
        if (rightIndex === sliderList.length - 1) {
          sliderList[0].classList.add('right');
        } else {
          sliderList[rightIndex + 1].classList.add('right');
        }
      }
    }
    setCurrentActive(rightIndex + 1);
  };
  const [videoState, setVideoState] = useState(false);
  const [videoUrl, setVideoUrl] = useState('')

  const openVideo = (url) => {
    setVideoState(true)
    setVideoUrl(url)
  }
  useEffect(() => {
    setTimeout(() => {
      if (document.querySelector(".swiper") !== null) {
        document.querySelector(".swiper video").play()
      } else if (document.querySelector(".swiper") === null && videoState === true) {
        document.querySelector(".videoContainer video").play()
      }
    }, 1000);

  }, [openVideo])

  return (
    <div className="inmotion">
      {videoState ?
        <InstaVideoPopUp clickHandler={() => setVideoState(false)} url={videoUrl} /> : <></>}
      {/* <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={currentVideo}
        onClose={() => setOpen(false)}
        autoplay={1}
        controls={0}
      /> */}
      {/* <InstaVideoPopUp /> */}
      <div className="main">
        <div className="heading">
          <div className="title">{props.title}</div>
          <div className="tag">
            {motion.length !== 0 && motion.details.para}
            {/* It’s not just a commemorative moment, it plays the righteous tribute to the craft that goes into making the perfect polo player, enchanting the onlooker to seek in its detail. */}
          </div>
        </div>
        <div className="slider">
          <div className="slider-inner">
            {motion.length !== 0 ? motion.videos.map(item =>
              <SliderVideo
                key={item.id}
                // videoId="UI2FOcljo84"
                url={item.video_url}
                thumb={ENDPOINT + item.thumbnail}
                play={(url) => openVideo(url)}
              />
            ) : <></>}
            {/* <SliderVideo
              // videoId="UI2FOcljo84"
              url="https://www.instagram.com/p/CKrQtVCpHOp/"
              thumb={require('../assets/img/inmotion/T1.jpg')}
              play={(url) => openVideo(url)}
            />
            <SliderVideo
              url="https://www.instagram.com/p/CGhx9gnJuYR/"
              // videoId="UI2FOcljo84"
              thumb={require('../assets/img/inmotion/T2.jpg')}
              play={(url) => openVideo(url)}
            />
            <SliderVideo
              // videoId="UI2FOcljo84"
              url="https://www.instagram.com/p/CFypiwypugj/"
              thumb={require('../assets/img/inmotion/T3.jpg')}
              play={(url) => openVideo(url)}
            />
            <SliderVideo
              // videoId="UI2FOcljo84"
              url="https://www.instagram.com/p/CFmElHfpFcy/"
              thumb={require('../assets/img/inmotion/T4.jpg')}
              play={(url) => openVideo(url)}
            />
            <SliderVideo
              // videoId="UI2FOcljo84"
              url="https://www.instagram.com/p/CFjSNeIJWoy/"
              thumb={require('../assets/img/inmotion/T5.jpg')}
              play={(url) => openVideo(url)}
            /> */}
          </div>
        </div>
        <div className="buttons">
          <div className="left">
            <div style={{ cursor: 'pointer' }} onClick={next} className="prev">
              <img src={require('../assets/img/leftarrow.png')} alt="" />
            </div>
          </div>
          <div className="middle">
            {currentActive} / {totalSlide}
          </div>
          <div className="right">
            <div style={{ cursor: 'pointer' }} onClick={prev} className="next">
              <img src={require('../assets/img/leftarrow.png')} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InMotion;
