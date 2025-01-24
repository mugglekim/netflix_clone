import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuChevronRight } from "react-icons/lu";
import { LuChevronLeft } from "react-icons/lu";
import { useEffect, useState } from "react";
import axios from 'axios';

const MovieSlider = () => {
  const [movies,setMovies]=useState([]);
  const [error,setError]=useState(null);
  const [IsLoading,setIsLoading]=useState(true);
  const fetchMovies=async()=>{
    const API_KEY='decc67e8f617c228c9c976bb05cd39ca';
    const url=`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;
    try{ 
      const response=await axios.get(url);
      setMovies(response.data.results.slice(0,10));
      setIsLoading(false);
    } catch(error){
      setError('영화 데이터를 가져오는 중 오류가 발생했습니다.');
      setIsLoading(false);
    }
  }
  useEffect(()=>{
    setIsLoading(true);
    fetchMovies();
  },[]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0
        }
      }
    ]
  };
  function SampleNextArrow(props) {
    const {onClick} = props;
    return (
      <div
        className='slick_next'
        onClick={onClick}
      ><LuChevronRight /></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
      <div
        className='slick_prev'
        onClick={onClick}
      ><LuChevronLeft /></div>
    );
  }
  if(error){
    return <div>{error}</div>
  }
  if(IsLoading){
    return <div>Loading...</div>
  }
  return (
    <div className="movie-slider">
      {
        console.log(movies)
      }
      <h2>지금 뜨는 콘텐츠</h2>
      <Slider {...settings}>
        {
          movies.map((list,idx)=>{
            return <div className="movie-card" key={idx+1}>
              <span className="white-num">{idx+1}</span>
              <span>{idx+1}</span>
              <img src={`https://image.tmdb.org/t/p/w342${list.poster_path}`} alt={list.title}/>
            </div>
          })
        }
      </Slider>
    </div>
  );
};

export default MovieSlider;