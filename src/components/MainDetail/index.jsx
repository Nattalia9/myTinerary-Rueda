import React from 'react'
import './style.css'
import HeroDetail from '../HeroDetail'

export default function MainDetail() {
  return (
    <>
    <main className="main-detail container-fluid p-0 w">
      <HeroDetail data={data}/>   
    </main>
  </>
  )
}
