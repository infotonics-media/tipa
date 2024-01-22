import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import NomData from '../components/NomData';
const ENDPOINT = 'https://backend.theindianpoloawards.com/nominations/category-2022';
const ENDPOINTz = 'https://backend.theindianpoloawards.com/nominations/category-2021';

// TIPA emerged from a vision to redefine the experience of Polo by hosting an iconic award show, an occasion inviting the most illustrious names associated with the game, The Indian Polo Award prepares to pay a cumulative regard to a heritage sprawling
const Nomination = (props) => {


  const [categories, setcategories] = useState([]);
  useEffect(() => {
    Axios.get(ENDPOINT)
      .then((res) => {
        setcategories(res.data);
        // console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const [categoriesz, setcategoriesz] = useState([]);
  useEffect(() => {
    Axios.get(ENDPOINTz)
      .then((res) => {
        setcategoriesz(res.data);
        // console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);



  const [catlenz, setCatlenz] = useState(3);
  const [catlen, setCatlen] = useState(3);
  const catItem = categories.map((cat, index) => (
    <NomData
      key={cat.id}
      index={(index + 1).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}
      item={cat}
    />
  ));

  const catItemz = categoriesz.map((cat, index) => (
    <NomData
      key={cat.id}
      index={(index + 1).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}
      item={cat}
    />
  ));


  useEffect(() => {
    let nomdata = document.querySelectorAll(".nomdata")
    if (nomdata.length !== 0) {
      nomdata[categories.length - 1].style.opacity = 1
    }
  }, [catlen])

  useEffect(() => {
    let nomdataz = document.querySelectorAll(".nomdata")
    if (nomdataz.length !== 0) {
      nomdataz[categoriesz.length - 1].style.opacity = 1
    }
  }, [catlenz])


  return (
    <div className="nomination">
      <div className="year">2022</div>
      <div className="header">{props.title}</div>
      <div className="categories">{catItem.slice(0, catlen)}</div>
      <div className={catlen > categories.length - 1 ? 'hide' : 'bottom'}>
        <div className="show">Show all categories</div>
        <div
          onClick={() =>
            setCatlen(categories.length)
          }
          className="btn"
        >
          <img
            style={{ cursor: 'pointer' }}
            src={require('../assets/img/leftarrow.png')}
            alt="arrow"
          />

        </div>
      </div>

      {props.year ?
        (<></>) : (
          <>
            <div className="year">2021</div>
            <div className="header">{props.title}</div>
            <div className="categories">{catItemz.slice(0, catlenz)}</div>
            <div className={catlenz > categoriesz.length - 1 ? 'hide' : 'bottom'}>
              <div className="show">Show all categories</div>
              <div
                onClick={() =>
                  setCatlenz(categoriesz.length)
                }
                className="btn"
              >
                <img
                  style={{ cursor: 'pointer' }}
                  src={require('../assets/img/leftarrow.png')}
                  alt="arrow"
                />

              </div>
            </div></>)}






    </div>



  );
};

export default Nomination;

// onClick={() =>
//   setCatlen((prev) => {
//     if (prev <= categories.length - 2) {
//       return prev + 2;
//     }
//     return prev;
//   })
// }
