import React from 'react';
import bannerImage from '../../media/IndustrialEnergy/E_Banner.jpg';
import Banner from '../ReuseableComponent/Banner';
import '../../assets/css/app.css'
const IndustrialBanner = () => {
  return (
    <>
      <div className='d-flex flex-column'>
        <div>
          <Banner
            title="Industrial Energy Monitoring System"
            backgroundImg={bannerImage}
            textColor="white"
          />
        </div>
        <div className='bannerid  '>
          <div style={{
            paddingBottom: '7rem', paddingTop: '5rem'
          }}>
            <div className='  d-flex flex-column align-items-center'>
              <p className='display-4 fw-bold' style={{ color: '#0d2c54' }}>INDUSTRIAL ENERGY</p>
              <p className='display-4 fw-bold' style={{ color: '#ec8420' }}>MONITORING SYSTEM</p>
              <p className='fs-4 pt-3' style={{ color: '#0d2c54' }}>Monitor. Detect Faults. Analyze Energy Meters</p>
            </div>

          </div>

          {/* <div className='bannerDownBox d-flex '>
                      <div className='textWarp d-flex align-items-center'>
                            
                      </div>
                  </div> */}

        </div>
      </div>
    </>
  );
};

export default IndustrialBanner;