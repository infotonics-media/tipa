import React from "react";

const Videogallery = (props) => {
    return (
        <div className="video-slider">
            <a href={props.thumb}>
                <img src={props.thumb} alt="" />
            </a>
            {/* <div className="play">
                <a href={props.url}>
                    <img src={require("../assets/img/inmotion/play.png")} alt="" />
                </a>
            </div> */}
        </div>
    );
};

export default Videogallery;
