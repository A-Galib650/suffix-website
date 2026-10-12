import React from 'react'
import img from '../../../media/systemIntegrator/lineImage.png';

export const FocusAreasHeader = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="fw-bold mb-3">Our Key Focus Areas</h1>
      
      <div className="">
      <img src={img} alt={img}></img>
      </div>
    </div>
  )
}