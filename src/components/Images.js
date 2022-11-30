import React from 'react';
import Image1 from '../assets/img/tagline/tagline0.svg';
import Image2 from '../assets/img/tagline/tagline1.png';
import Image3 from '../assets/img/tagline/tagline2.svg';

const Images = (props) => {
  const ImagesGallery = [Image1, Image2, Image3];

  return (
    <img
      className="animate__animated animate__slideInUp animate__slow"
      src={ImagesGallery[1]}
      alt=""
    />
  );
};

export default Images;
