import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import tmdbApi from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";

import "../scss/_detail.scss";

const VideoList = (props) => {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   const getVideos = async () => {
  //     const res = await tmdbApi.getVideos(category, props.id);
  //     console.log(res);
  //     setVideos(res.results.slice(0, 5));
  //   };
  //   getVideos();
  // }, [category, props.id]);
  return (
    <>
      {/* {videos.map((item, index) => ( */}
        <Video />
      {/* ))} */}
    </>
  );
};

const Video = (props) => {
  const item = props.item;
  const iframeRef = useRef(null);
  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);
  return (
    <div className="video">
      <div className="video__title">
        {/* <h2>{item.name}</h2> */}
      </div>
      <iframe
        src={`https://hd.hdbophim.com/share/653349393b7da41c3c2fc60cb963e36d`}
        ref={iframeRef}
        width="100%"
        title="videp"
        frameBorder={0}
      ></iframe>
    </div>
  );
};
export default VideoList;
