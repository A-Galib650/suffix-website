import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination, Navigation
} from 'swiper';

import data from './ClientBrandData';
import { useWindowSize } from '../../../helpers/WindowSize';




const ClientBrand = () => {

  SwiperCore.use([Pagination, Navigation]);
  const [height, width] = useWindowSize();


  return (
    <>
      <div className="brand container" style={{ cursor: 'pointer', width: "76vw", paddingTop: "50px" }}>
        <div className="brand-title text-center">
          <h1 style={{ color: "#525252", fontSize: "28px" }}><strong>Our Happy Clients</strong></h1>
          <p className="text-secondary" id="brand-paragraph">We Work Only For <span style={{ color: "#609dce" }}>The Best.</span></p>
        </div>
        {/* <div className="brandSwiper" style={{ paddingTop: "50px", paddingBottom: "60px" }}>
          <Swiper
            slidesPerView={width < 1000 ? 3 : 6}
            endedSlides={false}
            spaceBetween={width < 1000 ? 12 : 10}
            freeMode={true}
            speed={6000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false
            }}
            loop={true}
            navigation={true}
            className="mySwiper px-3 py-5"

          >

            {
              data.map((item, index) => {
                return (
                  <SwiperSlide key={index} >

                    <img src={item?.img} alt=""  ></img>

                  </SwiperSlide>
                )

              })
            }

          </Swiper>
        </div> */}

      </div >
      <section>
        <div className="container my-5">
          <div className="row justify-content-center align-items-center">
            {data.map((item, index) => (
              <div key={index} className="col-6  col-lg-1-7 g-3 mb-4 d-flex justify-content-center">
                <img
                  src={item?.img}
                  alt={`logo-${index}`}
                  className="img-fluid"
                  style={{
                    maxHeight: '100px',
                    maxWidth: '120px',
                    objectFit: 'contain'
                  }}

                />
              </div>
            ))}
          </div>
        </div>
      </section>


    </>


  )
}

export default ClientBrand;
