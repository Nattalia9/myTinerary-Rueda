import React from 'react'
import Main from '../components/Main'
import Carousel from '../components/Carousel'

export default function Home() {
	return (
		<div className='container-fluid p-0 bg-carousel-f'>
			<Main />
			<div className='container bg-carousel rounded-boder-top'>
				<Carousel />
			</div> 
		</div>
	)
}
