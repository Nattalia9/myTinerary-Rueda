import React from 'react'
import './style.css'
import HeroCities from '../HeroCities'
import CardsCollection from '../CardsCollection'

export default function MainCities() {
  return (
    <>
      <main className="main-cities container-fluid p-0 w ">
        <HeroCities/>
        <CardsCollection />     
      </main>
    </>
  )
}
