import React from "react";

import "./movie-card.scss";

import { Link } from "react-router-dom";

import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import Button from "../button/Button";

const MovieCard = (props) => {
  const item = props.item;
  const link = "/phim/" + item.slug;
  const bg = props.pathImg + item.thumb_url;
  return (
    <Link to={link}>
      <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
        <Button>
            <i className="bx bx-play"></i>
        </Button>
        
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
