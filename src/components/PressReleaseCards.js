import React from "react";
import style from "../assets/css/pitchdesk.module.css";
import handshake from '../assets/img/Icon awesome-handshake.png'
function PressReleaseCards({ item }) {
  return (
    <div className={style.main}>
      <div className={style.mobilepadding}>
        {/* <h2><span><img src={handshake} alt="logo"/></span>{item.title}</h2> */}
        <h2 style={{ textAlign: "center" }}>{item.title}</h2>
        <p>
          {item.desc}
        </p>
      </div>
      <div>
        <div class={style.button}>
          <a href="/blog/tipa-partners">
            <a class={style.btn} target="_blank" href={item.link}>
              Click Here
            </a>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PressReleaseCards;
