import React from 'react'
import '../../assets/css/app.css'
import Compressor from '../../media/IndustrialEnergy/Air Compressor.png'
import Substation from '../../media/IndustrialEnergy/11KV _ 33KV.png'
import Boiler from '../../media/IndustrialEnergy/Boiler.png'
import Etp from '../../media/IndustrialEnergy/ETP.png'
import Generator from '../../media/IndustrialEnergy/Generator.png'
import ImageBox from './ImageBox'

const IemsComponent = () => {
   return (
      <>   <div className=' mt-1' >
         <div className='d-flex justify-content-center bannerIdup p-4'>
            <div className='IEMSbutton border border-primary d-flex justify-content-center' style={{ background: '#edf6f7' }} >
               <p className='fw-bold fs-1' style={{ color: '#0d2c54' }} >IEMS</p>
            </div>
         </div>
         <div className='IemsImagebox'>
            <div id='group1' className=' d-md-flex justify-content-around'>
               <ImageBox
                  src={Compressor}
                  name="Air Compressor"
               ></ImageBox>
               <ImageBox
                  src={Boiler}
                  name="Boiler"
               ></ImageBox>
            </div>
            <div id='group2'>
               <ImageBox
                  src={Substation}
                  name=" 11KV / 33KV Substation"
               ></ImageBox>
            </div>

            <div id='group3' className=' d-md-flex justify-content-around'>
               <ImageBox
                  src={Etp}
                  name=" ETP(Effluent Treatment Plant)"
               ></ImageBox>
               <ImageBox
                  src={Generator}
                  name="Generator"
               ></ImageBox>
            </div>
         </div>
      </div>
      </>
   )
}

export default IemsComponent
