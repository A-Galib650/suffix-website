import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import Moyeen from "../../media/testimonial/1.jpg";
import rafique from "../../media/testimonial/2.jpg";
import rana from "../../media/testimonial/3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { useWindowSize } from "../../helpers/WindowSize";

const Testimonial = () => {
  SwiperCore.use([Pagination, Navigation]);
  const [height, width] = useWindowSize();

  return (
    <div className="testimonial">
      <div
        className="container"
        style={{ width: "76vw", paddingTop: "20px", paddingBottom: "20px" }}
      >
        <div className="text-center pt-5">
          <h1 style={{ color: "white", fontSize: "28px" }}>
            <strong>What They Said!</strong>
          </h1>
          <p style={{ color: "white", fontSize: "15px" }}>
            Customer satisfaction is our top priority. Client’s positive
            feedback inspire and motivate our team and business
          </p>
        </div>
        <div
          className="ourProductsSwiper"
          style={{ paddingTop: "50px", paddingBottom: "60px" }}
        >
          <Swiper
            slidesPerView={width < 700 ? 1 : width < 900 ? 2 : 2}
            centeredSlides={false}
            spaceBetween={10}
            freeMode={true}
            navigation={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
            style={{ cursor: "pointer" }}
          >
            <SwiperSlide>
              <div className="text-light testimonial-card">
                <h2>
                  <FontAwesomeIcon icon={faQuoteRight} />
                </h2>
                <h1 className="text-light">"Super Support!"</h1>
                <h3 className="text-light text-left ">
                  "SuffixIT- A reliable Part has with great satisfaction been
                  working with Suffixit since 2015. Suffix is always delivering
                  honest,rock-solid work of good quality." Regards
                </h3>
                <div className="d-flex flex-column justify-content-center pt-4 pb-5">
                  <img src={Moyeen} alt="Moyeen"></img>
                  <div className="pt-3 ">
                    <h4 className="text-light">Md. Ahsanul Moyeen</h4>
                    <h5 className="text-light">
                      Senior Manager CrossWorld Telecom Ltd.
                    </h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-light testimonial-card">
                <h2>
                  <FontAwesomeIcon icon={faQuoteRight} />
                </h2>
                <h1 className="text-light">"Awesome Design"</h1>
                <h3 className="text-light text-left ">
                  "SuffixIT brings all together software platform.It measures,
                  analyzes and improves customer satisfaction.leading company
                  for Customer Support & Service Software.
                </h3>
                <div className="d-flex flex-column justify-content-center pt-4 pb-5">
                  <img src={rafique} alt="rafique"></img>
                  <div className="pt-3 ">
                    <h4 className="text-light">Kazi Anowarul Rafique</h4>
                    <h5 className="text-light">
                      Head of Operations New Generation Telecom Ltd.
                    </h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="text-light testimonial-card">
                <h2>
                  <FontAwesomeIcon icon={faQuoteRight} />
                </h2>
                <h1 className="text-light">"Great Flexibility"</h1>
                <h3 className="text-light text-left ">
                  "SuffixIT Essentials makes it easy for small businesses and
                  startups build stronger customer relationships with an
                  all-in-one sales and support solution that is easy to use
                </h3>
                <div className="d-flex flex-column justify-content-center pt-4 pb-5">
                  <img src={rana} alt="rana"></img>
                  <div className="pt-3">
                    <h4 className="text-light">Md. Ashif Imran Rana</h4>
                    <h5 className="text-light">
                      Chief Technical Officer Mother Telecommunication{" "}
                    </h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
