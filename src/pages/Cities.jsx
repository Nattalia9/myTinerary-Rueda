import React from 'react'
import { useParams } from 'react-router-dom'

export default function Cities() {

  let {id} = useParams()

  return (
    <div>
      <h2 className='mt-5 text-center'>Cities...</h2>
      <p>{id}</p>
    </div>
  )
}
