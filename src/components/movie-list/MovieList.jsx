import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import './movie-list.scss';
import {SwiperSlide,Swiper} from 'swiper/react';

import {Link} from 'react-router-dom'
import tmdbApi, { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import MovieCard from '../movie-card/MovieCard';
import { getListMovie } from '../../api/movieApi';
const MovieList = props => {

    const [items,setItems] = useState([])
    const [path,setPath] = useState("")
    useEffect(() =>{
        const getList = async () =>{
            const page =1;
            // if(props.type !== "similar"){
            //     switch(props.category){
            //         case category.movie:
            //             res = await tmdbApi.getMoviesList(props.type,{params});
            //             break;
            //         default:
            //             res = await tmdbApi.getTvList(props.type,{params});
            //     }
            // }else{
            //     res = await tmdbApi.similar(props.category,props.id);
            // }
            const res = await getListMovie(props.page);
            setItems(res.items);
            setPath(res.pathImage);
        }
        getList();
    },[])
  return (
    <div className='movie-list'>
        <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
            {
                items.map((item,index) =>(
                    <SwiperSlide key={index}>
                      <MovieCard item={item} category={props.category} pathImg={path}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

MovieList.propTypes = {
    category:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
}

export default MovieList