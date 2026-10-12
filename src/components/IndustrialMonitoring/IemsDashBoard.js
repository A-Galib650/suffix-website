import React from 'react'
import Dashbord1 from '../../media/IndustrialEnergy/Dashboard_1.jpg'
import Dashbord2 from '../../media/IndustrialEnergy/Dashboard_2.jpg'
import { ScrollUp } from '../../helpers/ScrollUp'
import LeftText from './LeftText'
import RightText from './RightText'
import secured from '../../media/IndustrialEnergy/Secured data.jpg'
import Excel from '../../media/IndustrialEnergy/excel2-svgrepo-com.svg'
import Pdf from '../../media/IndustrialEnergy/pdf.svg'
import gsheet from '../../media/IndustrialEnergy/gsheet.svg'
import Circle from './Circle'


const IemsDashBoard = ({ title }) => {
  // ScrollUp();
  return (
    <>
      <div className=' pt-5'>
        <div className='d-flex flex-column  align-items-center '>
          <div className='IEMSbutton border border-primary d-flex flex-column  ' style={{ background: '#edf6f7' }}>
            <p className='fw-bold fs-1' style={{ color: '#0d2c54' }} >IEMS Dashboard</p>
          </div>
        </div>
        <section className='d-flex justify-content-center pt-5'>
          <div className='d-flex flex-column align-items-start'>
            <div className='d-flex  gap-3 align-items-center  p-3 fs-3' >
              <div className=' bg-dark ' style={{ borderRadius: "100px", height: "20px", width: "20px" }}></div>
              <div>Fully Customizable Remote Monitoring Software.</div>
            </div>
            <div className='d-flex  gap-3 align-items-center p-3 fs-3'>
              <div className=' bg-dark ' style={{ borderRadius: "100px", height: "20px", width: "20px" }}></div>
              <div> Email/SMS  Alerts & Notifications.</div>
            </div>
            <div className='d-flex  gap-3 align-items-center p-3 fs-3'>
              <div className=' bg-dark ' style={{ borderRadius: "100px", height: "20px", width: "20px" }}></div>
              <div> Daily/Weekly/Monthly/Device-Wise Reports.</div>
            </div>
            <div className='d-flex  gap-3 align-items-center p-3 fs-3'>
              <div className=' bg-dark ' style={{ borderRadius: "100px", height: "20px", width: "20px" }}></div>
              <div className=''>Creation, Completion, and Update of Maintenance <p>Schedules Using Real-Time Mobile Camera Input.</p></div>
            </div>
            <div className='d-flex  gap-3 align-items-center p-3 fs-3'>
              <div className=' bg-dark ' style={{ borderRadius: "100px", height: "20px", width: "20px" }}></div>
              <div>Even History, Data Logs and comparative Data analytics.</div>
            </div>
          </div>
        </section>
        <div>
          <LeftText></LeftText>
          <RightText></RightText>
        </div>
      </div>
      <div className="d-md-flex justify-content-around  ">
        <div className='d-flex flex-column align-items-center'>
          <img src={secured} alt="secured" className="img-fluid" style={{ height: "200px", width: "300px" }} />
          <p className='fs-3'> Secured Data Storage on Cloud</p>
        </div>
        <div className='d-md-flex flex-md-column' style={{ paddingBottom: "60px" }}>
          <div className='d-flex flex-row justify-content-center'>
            <img style={{ height: "200px", width: "100px" }} src={Excel} alt="loading" />
            <img style={{ height: "200px", width: "100px" }} src={Pdf} alt="loading" />
            <img style={{ height: "200px", width: "100px" }} src={gsheet} alt="loading" />
          </div>
          <p className='fs-3 d-flex justify-content-center'> Data Available for Download in CSV,Excel & PDF</p>
        </div>
      </div>
      <div>
        <div className='d-flex flex-column  align-items-center '>
          <div className='IEMSbutton border border-primary d-flex flex-column  ' style={{ background: '#edf6f7' }}>
            <p className='fw-bold fs-1' style={{ color: '#0d2c54' }} >Benefits of IEMS</p>
          </div>
        </div>
        <section className='d-flex justify-content-center pt-5'>
          <div className='d-flex flex-column align-items-start'>
            <div className='d-flex  gap-3 align-items-center  p-3 fs-3' >
              <div className=' bg-dark ' style={{ borderRadius: "100px", height: "20px", width: "20px" }}></div>
              <div>Reduce utility bills by identifying and eliminating energy waste.
              </div>
            </div>
            <div className='d-flex  gap-3 align-items-center p-3 fs-3'>
              <div className=' bg-dark ' style={{ borderRadius: "100px", height: "20px", width: "20px" }}></div>
              <div> Enhance operational efficiency.
              </div>
            </div>
            <div className='d-flex  gap-3 align-items-center p-3 fs-3'>
              <div className=' bg-dark ' style={{ borderRadius: "100px", height: "20px", width: "20px" }}></div>
              <div> Reduce carbon footprint and ensure regulatory compliance.
              </div>
            </div>
            <div className='d-flex  gap-3 align-items-center p-3 fs-3'>
              <div className=' bg-dark ' style={{ borderRadius: "100px", height: "20px", width: "20px" }}></div>
              <div className=''>Extend equipment lifespan.
              </div>
            </div>
            <div className='d-flex  gap-3 align-items-center p-3 pb-5 fs-3'>
              <div className=' bg-dark ' style={{ borderRadius: "100px", height: "20px", width: "20px" }}></div>
              <div>Support strategic planning for future plant expansion.</div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default IemsDashBoard
