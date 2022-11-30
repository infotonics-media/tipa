import React from "react";
import {GrAdd} from "react-icons/gr";
import {IoClose} from "react-icons/io5";
import style from "../assets/css/faqs.module.css";
import PropTypes from "prop-types";
//import DOMPurify from "dompurify";

function FaqBox(props) {
  // props destructure
  const {toggleHidden, hidden, index, item} = props;

  return (
      <>
    
    <div className={style.box} key={index}>
      <div className={style.viewTitle}>
        <p
          className={
                  !hidden[index] ?
                    style.title :
                    `${style.title} ${style.colorChange}`
          }
        >
          {item.title}
        </p>
        <span onClick={() => toggleHidden(index)}>
          {!hidden[index] ?   <img src={require("../assets/img/leftarrow.png")} alt="" /> :   <img className={style.rot} src={require("../assets/img/leftarrow.png")} alt="" />}
        </span>
      </div>
      
      {hidden[index] && (
        <p className={style.expendPara} dangerouslySetInnerHTML={{__html: (item?.body)}}>
          
        </p>
      )}
    </div>
    </>
  );
}

export default FaqBox;
FaqBox.propTypes = {
  toggleHidden: PropTypes.func,
  hidden: PropTypes.object,
  index: PropTypes.number,
  item: PropTypes.object,
};
