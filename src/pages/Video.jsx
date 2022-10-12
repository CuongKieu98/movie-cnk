import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import tmdbApi from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";
import { useLocation } from "react-router-dom";
import "../scss/_detail.scss";
import ReactPlayer from "react-player";
const Video = (props) => {
  const { state } = useLocation();

  console.log(state);
  return (
    <>
      <div className="section mb-3">
        <VideoL link={state.data} />
      </div>
      {/* {videos.map((item, index) => ( */}
      {/* ))} */}
    </>
  );
};

const VideoL = (props) => {
  const eps = props.link;
  return (
    <div className="video-details">
      <div className="video-details__title">{/* <h2>{item.name}</h2> */}</div>
      <ReactPlayer
        url={eps.link_m3u8}
        playing={true}
        width="100%"
        height="100%"
        controls={true}
      />

    </div>
  );
};
export default Video;
