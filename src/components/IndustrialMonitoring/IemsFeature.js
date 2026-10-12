import React from 'react'
import ImageBoxSmall from './ImageBoxSmall'
import '../../assets/css/app.css'
import Compressor from '../../media/IndustrialEnergy/Air Compressor.png'
import Substation from '../../media/IndustrialEnergy/11KV _ 33KV.png'
import Boiler from '../../media/IndustrialEnergy/Boiler.png'
import Etp from '../../media/IndustrialEnergy/ETP.png'
import Generator from '../../media/IndustrialEnergy/Generator.png'
import Circle from './Circle'
const IemsFeature = ({ title }) => {
  return (
    <>
      <div className=' d-flex flex-column p-5 '>
        <div className='d-flex flex-column align-items-center '>
          <div className='IEMSbutton border border-primary d-flex flex-column  ' style={{ background: '#edf6f7' }}>
            <p className='fw-bold fs-1' style={{ color: '#0d2c54' }} >IEMS Features</p>
          </div>
        </div>
        <div className=' p-3  d-md-flex justify-content-around gap-md-5 ' >

          <div className='d-flex iemsFeature flex-column'>
            <div>
              <ImageBoxSmall
                src={Compressor}
                name="Air Compressor"
              ></ImageBoxSmall>
            </div>
            <div className='d-flex'>
              <div className='p-5 d-flex flex-column'>
                <Circle
                  title="Load Hours"
                ></Circle>
                <Circle
                  title="Unload Hours"
                ></Circle>
                <Circle
                  title="Dis Pressure"
                ></Circle>
                <Circle
                  title="Dis Temperature"
                  showBars={false}
                ></Circle>
              </div>

              <div className='pt-5 d-flex flex-column'>
                <Circle
                  title="Fault Hours"
                ></Circle>
                <Circle
                  title="Utilization %"
                ></Circle>
                <Circle
                  title="Ambient Temparature"
                  showBars={false}
                ></Circle>
              </div>
            </div>
          </div>
          <div className='d-flex iemsFeature'>
            <div className='d-flex flex-column  '>
              <ImageBoxSmall
                src={Generator}
                name="Generator"
              ></ImageBoxSmall>
              <div className='p-5 d-flex flex-column'>
                <Circle
                  title="Oil Pressure"
                ></Circle>
                <Circle
                  title="Battery Voltage"
                ></Circle>
                <Circle
                  title="Engine Temperature"
                ></Circle>
                <Circle
                  title="Fuel Level"
                ></Circle>
                <Circle
                  title="Gas Consumption Rate"
                ></Circle>
                <Circle
                  title="Diesel Consumption Rate"
                  showBars={false}
                ></Circle>
              </div>
            </div>

          </div>
        </div>
        <div className=' p-5 d-md-flex justify-content-center justify-content-around gap-md-5 small' >

          <div className='d-flex flex-column align-items-md-start pb-5'>
            <div className='smallFont d-flex flex-md-column justify-content-center'>
              <ImageBoxSmall
                src={Etp}
                name="ETP"
                name2="(Effluent Treatment Plant)"
              ></ImageBoxSmall>
            </div>
            <div>
              <div className='pt-5 d-flex flex-column align-items-center'>
                <div>
                  <Circle
                    title="Water Flow Consumption"
                  ></Circle>
                  <Circle
                    title="Water Flow Rate"
                    showBars={false}
                  ></Circle>
                </div>
              </div>
            </div>
          </div>
          <div className='d-md-flex flex-md-column d-flex flex-column align-items-center ' >
            <div className='pt- '>
              <ImageBoxSmall
                src={Boiler}
                name="Boiler"
              ></ImageBoxSmall>
              <div className='pt-5 d-flex flex-column align-items-center'>
                <div>
                  <Circle
                    title="Steam Consumption"
                  ></Circle>
                  <Circle
                    title="Steam Flow Rate"
                    showBars={false}
                  ></Circle>
                </div>

              </div>
            </div>

          </div>

        </div>

        <div className=' d-flex flex-column align-items-center gap-md-5'>
          
            <div>
              <ImageBoxSmall
                src={Substation}
                name=" 11KV / 33KV Substation"
              ></ImageBoxSmall>
            </div>
            <div className=' d-flex'  >
            <div className=' d-md-flex justify-content-md-center ' style={{ gap: "300px", paddingLeft:"40px"}}>
              <div className='pt-5 d-flex flex-column'>
                <Circle
                  title="Phase voltage"
                ></Circle>
                <Circle
                  title="Line Voltage "
                ></Circle>
                <Circle
                  title="Line Current"
                ></Circle>
                <Circle
                  title="Line Current"
                ></Circle>
                <Circle
                  title="Line PF"
                  showBars={false}
                ></Circle>

              </div>
              <div className='pt-5 d-flex flex-column'>
                <Circle
                  title="Total Apparent Power"
                ></Circle>
                <Circle
                  title="Total Real Power and Reactive Power"
                ></Circle>
                <Circle
                  title="Frequency"
                ></Circle>
                <Circle
                  title="Total net Kwh,KVAh,KVARh"
                ></Circle>
                <Circle
                  title="Average Line Current"
                  showBars={false}
                ></Circle>
              </div>
              </div>
            </div>
          

        </div>
      </div>
    </>
  )
}

export default IemsFeature
