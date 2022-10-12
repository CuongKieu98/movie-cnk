import React from "react";

import HeroSlide from "../components/hero-slide/HeroSlide";

import { Link } from "react-router-dom";
import { OutLineButton } from "../components/button/Button";
import MovieList from "../components/movie-list/MovieList";
import { category, movieType, tvType } from "../api/tmdbApi";

const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className="container">
        {/* trending slide */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>New Update</h2>
            <Link to={"/movie"}>
              <OutLineButton className="small">View More</OutLineButton>
            </Link>
          </div>
          <MovieList page={1} />
        </div>
        {/* rated slide */}
        {/* <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movie</h2>
            <Link to={"/movie"}>
              <OutLineButton className="small" >View More</OutLineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>
        {/* tvshow slide */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to={"/tv"}>
              <OutLineButton className="small">View More</OutLineButton>
            </Link>
          </div>
          <MovieList page={2} />
        </div>
        {/* tvshow slide */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV</h2>
            <Link to={"/tv"}>
              <OutLineButton className="small">View More</OutLineButton>
            </Link>
          </div>
          <MovieList page={3} />
        </div>
      </div>
    </>
  );
};

export default Home;
