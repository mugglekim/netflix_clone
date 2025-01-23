import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuChevronRight } from "react-icons/lu";
import { LuChevronLeft } from "react-icons/lu";

const movies=[
  {id:1, title:'첫번째', image:'./images/movie-1.webp', tag:'최신등록'},
  {id:2, title:'두번째', image:'./images/movie-2.webp', tag:'최신등록'},
  {id:3, title:'세번째', image:'./images/movie-3.webp', tag:'최신등록'},
  {id:4, title:'네번째', image:'./images/movie-4.webp', tag:'최신등록'},
  {id:5, title:'다섯번째', image:'./images/movie-5.webp', tag:'최신등록'},
  {id:6, title:'여섯번째', image:'./images/movie-6.webp', tag:'최신등록'},
  {id:7, title:'일곱번째', image:'./images/movie-7.webp', tag:'최신등록'},
  {id:8, title:'여덟번째', image:'./images/movie-8.webp', tag:'최신등록'},
  {id:9, title:'아홉번째', image:'./images/movie-9.webp', tag:'최신등록'},
  {id:10, title:'열번째', image:'./images/movie-10.webp', tag:'최신등록'},
];

const MovieSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
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
  return (
    <div className="movie-slider">
      <h2>지금 뜨는 콘텐츠</h2>
      <Slider {...settings}>
        {
          movies.map((list)=>{
            return <div className="movie-card" key={list.id}>
              <span className="white-num">{list.id}</span>
              <span>{list.id}</span>
              <img src={list.image} alt={list.title}/>
            </div>
          })
        }
      </Slider>
    </div>
  );
};

export default MovieSlider;