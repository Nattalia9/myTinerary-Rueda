import React from 'react'
import './style.css'
import { Link as Anchor } from 'react-router-dom'
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";

export default function Card({ciudad}) {
  return (
    <div className='carrd position-relative'>
      <img className='img-card-cities' src={ciudad.linkImg} alt={ciudad.city} />
      <div className="gradient-img position-absolute  bottom-0">
        <div className='text-card position-absolute'>
          <h3>{ciudad.city}</h3>
          <div className='d-flex justify-content-between align-items-center'>  
            <p className='p-country'><span className='icon-country'><BsFillGeoAltFill /></span>{ciudad.country}</p>
            <button className='btn-to-detail'><Anchor to={"/cities/"+ciudad._id}><BsPlusLg className='icon-to-detail'/></Anchor></button>
          </div>
        </div>
      </div>
    </div>
  )
}


