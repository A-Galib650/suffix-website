import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination, Navigation, EffectFade
} from 'swiper';


const HomeHeader = () => {

  SwiperCore.use([Pagination, Navigation, EffectFade]);

  return (
    <div className="swiper-head">
      <Swiper
        pagination={{
          "clickable": true
        }}

        freeMode={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        speed={1000}
        effect='fade'
        loop={true}
        className="mySwiper"

      >


        <SwiperSlide

          style={{ minHeight: '100vh', background: `linear-gradient(rgba(0,0,0, 0.3),rgba(0,0,0, 0.3) ),url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80") center center/cover no-repeat` }}
          className="slide-1"

        >
          <div className="slider-content">
            <div className="inner">
              <h1 className={`slider-title py-3`}>Vulputate Mollis Ultricies Fermentum Parturient</h1>
              <p className="slider-sub-title">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.</p>
              <button className="slider-buttton">Read More</button>
            </div>

          </div>

        </SwiperSlide>
        <SwiperSlide
          className="slide-2"
          style={{ minHeight: '100vh', background: `linear-gradient(rgba(0,0,0, 0.3),rgba(0,0,0, 0.3) ),url("https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80") center center/cover no-repeat` }}
        >
          <div className="slider-content">
            <div className="inner">
              <h1 className="slider-title py-3">Tortor Dapibus Commodo Aenean Quam</h1>
              <p className="slider-sub-title">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.</p>
              <button className="slider-buttton">Read More</button>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide
          className="slide-3"
          style={{ minHeight: '100vh', background: `linear-gradient(rgba(0,0,0, 0.3),rgba(0,0,0, 0.3) ),url("https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80") center center/cover no-repeat` }}
        >
          <div className="slider-content">
            <div className="inner">
              <h1 className="slider-title py-3">Phasellus volutpat metus</h1>
              <p className="slider-sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
              <button className="slider-buttton">Read More</button>
            </div>

          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default HomeHeader
