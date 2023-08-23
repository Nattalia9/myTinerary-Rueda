import React from 'react'
import './style.css'
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";

export default function HeroDetail({data}) {
  return (
    <div className="hero-detail-bg" style={{ backgroundImage: `url(${data.linkImg})`}}>
      <div className="gradient-detail">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-5 text-hero text-center">
            <p className='p-country'><span className='icon-country'><BsFillGeoAltFill /></span>{data.country}</p>
            <h2>{data.city}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis praesentium deleniti quidem nesciunt repudiandae velit, suscipit inventore enim nulla aliquam nisi, voluptatum, harum ut nobis dolorem animi consequatur incidunt aperiam.</p> 
            <button className="button-view px-4 py-2 mt-5">View Itineraries <BsArrowDown className="arrow"/></button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
