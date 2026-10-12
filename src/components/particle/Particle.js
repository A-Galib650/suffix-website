import { Suspense } from 'react';
import headerImg from '../../media/download/Website Creator-amico.svg';


import AnimationCanvas from './AnimationCanvas';

const Particle = () => {
  return (
    <div className='particle-container' >
      {/* <div style={{ minHeight: '100vh', background: 'red', zIndex: '999' }}> */}


      <div className="particle">

        <div className="particle-animation" >
          <Suspense fallback={<div>Loading...</div>}>
            <AnimationCanvas />
          </Suspense>

        </div>

      </div>

      <div className='particle-content ' >
        <div style={{ width: '90vw' }}>

          <div className=" row d-flex align-items-center justify-content-center">

            <div className="col-lg-11 col-md-6" >
              <div data-aos="fade-up" data-aos-duration="3000">
                <h2 className=" text-light text-center display-1" style={{ fontSize: "5.5rem" }}>Suffix IT Limited</h2>
                <h4 className=" text-light text-center" style={{ fontSize: "2.5rem" }}>Ultimate Solutions</h4>
              </div>
              <div className="buttonDown">
                <a href={`#products`}>
                  <div className="header-button" ></div>
                </a>
              </div>
            </div>
            {/* <div className="col-lg-5 col-md-5 pt-5 " data-aos="fade-left"
              data-aos-duration="3000">
              <img src={headerImg} alt="" style={{ width: '100%', objectFit: "cover" }}></img>
            </div> */}
          </div>

        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Particle;
