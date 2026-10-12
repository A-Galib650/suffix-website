import React from 'react'
import Boiler from '../../media/IndustrialEnergy/Boiler.png'
import '../../assets/css/app.css'
const ImageBoxSmall = ({ src, name, name2 }) => {
  return (
    <>
      <div className='d-flex flex-column flex-md-row align-items-center '>
        <div className='d-flex justify-content-around align-items-center p-2'>
          <div className='SmallImageBox d-flex align-content-center'>
            <img className='img-fluid overflow-hidden ' src={src} alt="Loading" />
          </div>
        </div>
        <div className='d-md-flex justify-content-center pb-4 '>
          <div className='d-md-flex align-items-md-center'>
            <p className='fs-3 fw-bold ' style={{ color: '#0d2c54' }} >{name}</p>
            <p className='fs-5 fw-bold' style={{ "text-wrap": "wrap" }}>{name2}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageBoxSmall
