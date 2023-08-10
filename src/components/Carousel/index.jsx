import React from 'react'
import './style.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from '../../data';
import { Link as Anchor } from 'react-router-dom'

export default function Carousel() {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='Carousel py-5 mx-5'>
      <h2 className='text-center mt-4'>Popular Mytineraries</h2>
      <div className='d-flex justify-content-center'>
      <button className='btnn btn-cities text-center px-4 py-2 mb-4 mt-3'><Anchor to="/cities" className='anchor'>Go to Cities</Anchor></button>
      </div>
      <Slider{...settings}>
        {dataDigitalBestSeller.map((item, key) =>(
        <div key={key} className="card">
          <div className="card-top">
            <div className='container-picture'>
              <img className="picture img-fluid" src={item.linkImg} alt={item.city} />
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
