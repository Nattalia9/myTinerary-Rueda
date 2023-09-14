import React, { useEffect } from 'react'
import './style.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link as Anchor } from 'react-router-dom'
import {getCities}  from '../../redux/actions/citiesActions'
import { useSelector, useDispatch } from 'react-redux';

export default function Carousel() {

  const citiesStore = useSelector(store => store.citiesReducer.allCities)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getCities() );
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1399,//1099
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,//3
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 993,//1024
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,//33
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,//600
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1//2
        }
      },
      {
        breakpoint: 600,//480
        settings: {
          slidesToShow: 1,//1
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
  return (
    <div className='Carousel py-5 mx-5'>
      <h2 className='text-center mt-4'>Popular Mytineraries</h2>
      <div className='d-flex justify-content-center'>
      <button className='btnn btn-cities text-center px-4 py-2 mb-4 mt-3'><Anchor to="/cities" className='anchor-c'>Go to Cities</Anchor></button>
      </div>
      <Slider{...settings}>
        {citiesStore.slice(0, 12).map((item, key) =>(
        <div key={key} className="card">
          <div className="card-top">
            <div className='container-picture'>
              <img className="picture" src={item.linkImg} alt={item.city} />
            </div>
            <h1>{item.city}</h1>
          </div>
          <div className="card-bottom">
            <h3 className='country'>{item.country}</h3>
          </div>
        </div>
        ))}
      </Slider>
    </div>
  )
}
