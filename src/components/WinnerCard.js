import React from "react";
import style from "../assets/css/winnerCards.module.css";
import winner from "../assets/img/winner.jpg";
function WinnerCard({ item }) {
  return (
    <div className={style.card} style={{}}>
      <img src={item.playerImage} alt="winner" />
      <div className={style.contentSection}>
        <p>{item.awardName}</p>
        <hr />
        <h2>{item.playerName}</h2>
        <hr />
        <h2>{item.year}</h2>
      </div>
    </div>
  );
}

export default WinnerCard;
