import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import "../scss/_detail.scss";

import MovieList from "../components/movie-list/MovieList";
import { getDetails } from "../api/movieApi";
import { Link ,useNavigate} from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [ep,setEp] = useState([])
  useEffect(() => {
    const getDetail = async () => {
      const res = await getDetails(id);
      setItem(res.movie);
      setEp(res.episodes)
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [id]);
  const handleChoose = (value) =>{
    navigate("/video", {state: {data:value}})
  }

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${item.poster_url || item.thumb_url})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${item.thumb_url || item.poster_url})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">{item.name || item.origin_name}</h1>
              <h2>{item.origin_name || item.name}</h2>
              <div className="genres">
                {item.category &&
                  item.category.slice(0, 5).map((grence, index) => (
                    <span key={index} className="genres__item">
                      {grence.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.content}</p>
              <p>Năm phát hành: {item.year}</p>
              <p>Thời lượng: {item.time}</p>
              <div className="contries">
                <p>
                  Quốc gia:{" "}
                  {item.country &&
                    item.country.slice(0, 1).map((grence, index) => (
                      <span key={index} className="contries-item">
                        {grence.name}
                      </span>
                    ))}
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            {/* <div className="section mb-3">
              <VideoList id={item.id} />
            </div> */}
            <div className="section mb-3">
              <h2>Danh sách tập phim:</h2>
              <div className="eps">
                {ep &&
                  ep[0].server_data.map((item, index) => (
                    <span key={index} className="eps__item" onClick={() => handleChoose(item)}>
                      {item.name}
                    </span>
                  ))}
              </div>
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Similar</h2>
              </div>
              <MovieList page={1} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
