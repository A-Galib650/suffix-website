import React from 'react'
import Diagram from '../../media/IndustrialEnergy/IEMS Diagram.png'
import '../../assets/css/app.css'
const IemsDiagram = () => {
   return (
      <>
         <div className=' d-flex flex-column align-items-center pt-5 '>
            <div className=' pb-5'>
               <div className='IEMSbutton border border-primary d-flex flex-column  ' style={{ background: '#edf6f7' }}>
                  <p className='fw-bold fs-1' style={{ color: '#0d2c54' }} >IEMS Diagram</p>
               </div>
            </div>
            <div className='d-flex flex-column align-items-center'>
            
               <img className='fitImage' src={Diagram} alt="loading" />
               
            </div>
         </div>
      </>
   )
}

export default IemsDiagram
