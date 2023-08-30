import React from 'react'
import './style.css'
import { Link as Anchor } from 'react-router-dom'
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function HeroDetail({data}) {
  return (
  
    <div className="hero-detail-bg" style={{ backgroundImage:`url(${data.linkImg})`}}>
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-5 text-hero text-center">
            <p className='p-country'><span className='icon-country'><BsFillGeoAltFill /></span>{data.country}</p>
            <h2>{data.city}</h2>
            <p>{data.description}</p> 
            <button className="button-view px-4 py-2 mt-5">View Itineraries <BsArrowDown className="arrow"/></button>
            <button title="Go Back" className='btn-to-cities'><Anchor to={"/cities"} className='a-cities'><BsArrowLeft className='icon-to-cities'/></Anchor></button>
          </div>
        </div>
      </div>  
    </div>
  
  )
}
