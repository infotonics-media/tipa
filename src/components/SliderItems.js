import React from 'react';
import '../assets/css/slider-item.css';
import { Link } from 'react-router-dom';

const SliderItems = (props) => {
  return (
    // <div className="slider-item">
    //   <div className="title">
    //     {props.content.title}
    //   </div>
    //   <div className="desc">
    //     {props.content.description.slice(0,100)}...
    //   </div>
    //   <Link to={props.blogName}>
    //     <div className="readmore">
    //       <div className="text text-blog-page-km ">READ MORE</div>
    //       <div className="arw">
    //         <a href=".">
    //           <img src={require('../assets/img/leftarrow.png')} alt="" />
    //         </a>
    //       </div>
    //     </div>
    //   </Link>
    // </div>

    <Link to={'/blog/blog-details/' + props.item.slug}>
      <div className="slider-item">
        <div className="title">
          {props.item.title}
        </div>
        <div className="desc">
          {props.item.introduction.slice(0, 100)}
        </div>
        <div className="readmore">
          <div className="text text-blog-page-km ">READ MORE</div>
          <div className="arw">
            <a href=".">
              <img src={require('../assets/img/leftarrow.png')} alt="" />
            </a>
          </div>
        </div>

      </div>

    </Link>
  );
};

export default SliderItems;
