import React from 'react'
import './style.css'
// import itineraries from '/no-Itinerary.jpg';
import itineraries from '/no-itinerary2.jpg';

export default function Itineraries() {
  return (
    <div className='container my-5'>
      <div className="row justify-content-center">
        <div className="col-5 mx-auto ">
          <h2 className='text-itinerary mt-5 text-center'>There are no itineraries</h2>
          <img src={itineraries} alt="no-itineraries" className='i-itineraries img-fluid'/>
        </div>
      </div>
    </div>
  )
}
