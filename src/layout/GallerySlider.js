import React, { useEffect, useState } from "react";
import style from "../assets/css/gallerygrid.module.css";

function GallerySlider(props) {
  return (
    <>
      <div className={style.gtitle}>Gallery</div>
      <div className={style.main}>
        <div
          className={style.v1}
          style={{
            background: `url("https://lapolo-backend-static-file-rest-api.s3.amazonaws.com/media/None/1_C9yh9WI.jpg")`,
          }}
        ></div>
        <div
          className={style.v2}
          style={{
            background: `url("https://lapolo-backend-static-file-rest-api.s3.amazonaws.com/media/None/2_o8F0AmI.jpg")`,
          }}
        ></div>
      </div>

      <div className={style.main}>
        <div
          className={style.v3}
          style={{
            background: `url("https://lapolo-backend-static-file-rest-api.s3.amazonaws.com/media/None/3_xAuxkx7.jpg")`,
          }}
        ></div>
        <div
          className={style.v4}
          style={{
            background: `url("https://lapolo-backend-static-file-rest-api.s3.amazonaws.com/media/None/4_gV7Kb6Z.jpg")`,
          }}
        ></div>
        <div
          className={style.v5}
          style={{
            background: `url("https://lapolo-backend-static-file-rest-api.s3.amazonaws.com/media/None/5_bj1kM9e.jpg")`,
          }}
        ></div>
        <div
          className={style.v6}
          style={{
            background: `url("https://lapolo-backend-static-file-rest-api.s3.amazonaws.com/media/None/6_llBut1U.jpg")`,
          }}
        ></div>
      </div>
    </>
  );
}

export default GallerySlider;
