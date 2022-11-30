import React from "react";
import style from "../assets/css/partnerCards.module.css";

function PartnerCards({item}) {
  return (
    <div className={style.main}>
      <div className={style.image}>
          <img src={item.thumbnail} alt={item.title} />
       
      </div>
      <div className={style.content}>
          <h4>New Delhi</h4>
          <h2>{item.title}</h2>
          <hr/>
          <h4>{item.mediahouse_name}</h4>

      </div>
    </div>
  );
}

export default PartnerCards;
