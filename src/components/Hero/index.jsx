import React from 'react'
import './style.css'
import { BsArrowRight } from "react-icons/bs";
import { Link as Anchor } from 'react-router-dom'

export default function Hero() {
	return (
		<>
		<div className="container">
				<section className="col-lg-5">
					<h1>Find the <span className='italic'>perfect</span> destination</h1>
					<p className="my-3">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
					<button className="button-view px-5 py-2 mt-3"><Anchor className="anchor-navb" to="/cities">View More <BsArrowRight className="arrow"/></Anchor></button>
			</section>
		</div>
		</>
	)
}
