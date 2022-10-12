import React, { useEffect, useState, useRef } from "react";
import "./hero-slide.scss";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { useNavigate } from "react-router-dom";
import Button, { OutLineButton } from "../button/Button";
import Modal, { ModalContent } from "../modal/Modal";
import { getListMovie } from "../../api/movieApi";

const HeroSlide = () => {
  const [movieItem, setMovieItem] = useState([]);
  const [pathImg, setPathImg] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await getListMovie(1);
        setMovieItem(res.items.slice(0, 5));
        setPathImg(res.pathImage);
        console.log(res.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
      >
        {movieItem.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSlideItem item={item} className={isActive ? "active" : ""} path={pathImg}/>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItem.map((item, index) => (
        <TrailerModal key={index} item={item} />
      ))}
    </div>
  );
};

const HeroSlideItem = (props) => {
  let navigate = useNavigate();
  const item = props.item;
  const background = props.path + props.item.poster_url;
  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    const videos = await tmdbApi.getVideos(category.movie, item.id);
    if (videos.results.length > 0) {
      const videoSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
      modal.querySelector(".modal__content > iframe").setAttribute("src", videoSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "No Trailer";
    }

    modal.classList.toggle("active");
  };

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.name}</h2>
          <div className="overview">{item.origin_name}</div>
          <div className="btns">
            <Button onClick={() => navigate("/movie/" + item.id)}>
              Watch now
            </Button>
            <OutLineButton onClick={setModalActive}>
              Watch trailer
            </OutLineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={props.path + props.item.thumb_url} alt="" />
        </div>
      </div>
    </div>
  );
};

const TrailerModal = (props) => {
  const item = props.item;

  const iframeRef = useRef(null);
  const onClose = () => iframeRef.current.setAttribute("src", "");
  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default HeroSlide;
