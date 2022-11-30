import React, { useEffect, useState } from "react";
import Play from "../assets/img/inmotion/play.png";

const ENDPOINT = "https://backend.theindianpoloawards.com";

const GenerateItem = (props) => {
  return (
    <div
      style={{ background: `url("${ENDPOINT + props.image}")` }}
      className={`in-v${props.v}-grid${props.index + 1}`}
    >
      <h3>{props.title}</h3>
      <a href={props.link} target="_blank">
        <img
          onClick={
            props.link !== null
              ? props.link.length !== 0
                ? () => props.openvideo(props.link)
                : () => { }
              : () => { }
          }
          style={props.link ? { cursor: "pointer" } : {}}
          src={Play}
          alt="play"
        />
      </a>
    </div>
  );
};
const VideoContainer = (props) => {
  return (
    <>
      <div className="in-videos">
        <div className="in-v1">
          {props.data ? (
            props.data.map((item, index) => {
              if (index <= 1) {
                return (
                  <GenerateItem
                    key={index}
                    openvideo={
                      item.link !== null
                        ? item.link.length !== 0
                          ? (link) => props.openVideo(link)
                          : () => { }
                        : () => { }
                    }
                    link={item.link}
                    title={item.name}
                    image={item.image}
                    index={index}
                    v={1}
                  />
                );
              } else {
                return <></>;
              }
            })
          ) : (
            <></>
          )}
        </div>
        <div className="in-v2">
          {props.data ? (
            props.data.map((item, index) => {
              if (index > 1) {
                return (
                  <GenerateItem
                    key={index}
                    openvideo={
                      item.link !== null
                        ? item.link.length !== 0
                          ? (link) => props.openVideo(link)
                          : () => { }
                        : () => { }
                    }
                    link={item.link}
                    title={item.name}
                    image={item.image}
                    index={index}
                    v={2}
                  />
                );
              } else {
                return <></>;
              }
            })
          ) : (
            <></>
          )}
        </div>

      </div>


    </>
  );
};

export default VideoContainer;

// {/* <div style={{background: `url("${require("../assets/img/videos/"+props.images[2])}")`}} className="in-v2-grid3">
//     <h3>{props.titles[2]}</h3>
//     <img onClick={() => props.openVideo(props.links[2])} src={Play} style={{cursor: 'pointer'}} alt="play" />
//   </div>
//   <div style={{background: `url("${require("../assets/img/videos/"+props.images[3])}")`}} className="in-v2-grid4">
//     <h3>{props.titles[3]}</h3>
//     <img onClick={() => props.openVideo(props.links[3])} src={Play} style={{cursor: 'pointer'}} alt="play" />
//   </div>
//   <div style={{background: `url("${require("../assets/img/videos/"+props.images[4])}")`}} className="in-v2-grid5">
//     <h3>{props.titles[4]}</h3>
//     <img onClick={() => props.openVideo(props.links[4])} src={Play} style={{cursor: 'pointer'}} alt="play" />
//   </div>
//   <div style={{background: `url("${require("../assets/img/videos/"+props.images[5])}")`}} className="in-v2-grid6">
//     <h3>{props.titles[5]}</h3>
//     <img onClick={() => props.openVideo(props.links[5])} src={Play} style={{cursor: 'pointer'}} alt="play" />
//   </div> */}
// {/* <div style={{background: `url("${require("../assets/img/videos/"+props.images[0])}")`}} className="in-v1-grid1">
//   <h3>{props.titles[0]}</h3>
//   <img onClick={() => props.openVideo(props.links[0])} style={{cursor: 'pointer'}} src={Play} alt="play" />
// </div>
// <div style={{background: `url("${require("../assets/img/videos/"+props.images[1])}")`}} className="in-v1-grid2">
//   <h3>{props.titles[1]}</h3>
//   <img onClick={() => props.openVideo(props.links[1])} src={Play} style={{cursor: 'pointer'}} alt="play" />
// </div>*/}
