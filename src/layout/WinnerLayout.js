import React, { useEffect, useState } from "react";
import WinnerCard from "../components/WinnerCard";
import style from "../assets/css/winnerCards.module.css";
import Axios from "axios";
import { HashRouter } from "react-router-dom";
function WinnerLayout(props) {
  const initialState = [1, 2, 3, 4, 5, 6, 7];
  const [winner, setWinner] = useState(initialState);
  const [winnerlist, setWinnerlist] = useState(6);

  useEffect(() => {
    Axios.get(`https://backend.theindianpoloawards.com/winners/winners-${props.year}`)
      .then((response) => setWinner(response.data))
      .catch((error) => console.log(error));
  }, [winnerlist]);
  return (
    <div>
      <div className={style.year}>{props.year}</div>
      <div className={style.title}>{props.title}</div>
      <div className={style.cardsection}>
        {winner.slice(0, winnerlist).map((item, index) => (
          <WinnerCard key={index} item={item} />
        ))}
      </div>
      <div
        className={winnerlist > winner.length - 1 ? style.hide : style.showMOre}
      >
        <div>Show all categories</div>
        <div
          onClick={() => setWinnerlist(winner.length)}
          className={winnerlist > winner.length - 1 ? style.hide : style.btn}
        >
          <img
            style={{ cursor: "pointer" }}
            src={require("../assets/img/leftarrow.png")}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
}

export default WinnerLayout;
