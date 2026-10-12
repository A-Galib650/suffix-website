import React from 'react'
import img from '../../../media/systemIntegrator/lineImage.png';

export const FeatureSetHeader = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="fw-bold mb-3">A powerful and innovative feature set</h1>
      
      <div className="">
      <img src={img} alt={img}></img>
      </div>
    </div>
  )
}
