/** @format */

import { Link } from "react-router-dom";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./OurProductsData";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const OurProducts = () => {
  return (
    <div
      className="container ourProduct-swiper "
      style={{ width: "76vw", minHeight: "80vh", paddingTop: "50px" }}
      id="products"
    >
      <div className="ourProductsTitle text-center">
        <h1
          style={{ color: "#525252", fontSize: "28px", paddingBottom: "" }}
        >
          <strong>
            Our <span style={{ color: "#609dce" }}>Products</span>
          </strong>
        </h1>
        <p className="text-secondary" style={{ fontSize: "18px" }}>
          We offer a diverse spectrum of products for your specific company
          requirements. We implement rigorous quality testing as a
          technologically process-driven firm to assure seamless,
          round-the-clock, and global performance. We are very much enthusiastic
          about developing innovative software solutions merging with the
          current technological advancement.
        </p>
      </div>
      <div
        className="ourProductsSwiper "
        style={{ paddingTop: "50px", paddingBottom: "60px" }}
      >
        <Swiper
          // effect={"coverflow"}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          freeMode={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper"
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide
                style={{
                  paddingTop: "15px",
                  paddingBottom: "10px",
                  paddingLeft: "15px",
                }}
              >
                <Link to={`/product/${item?.detailPage}`}>
                  <div
                    className="d-flex justify-content-center flex-column align-items-center pt-2 shadow product-card"
                    style={{
                      borderRadius: "3px",
                      height: "300px",
                      width: "300px",
                    }}
                    key={index}
                  >
                    <span></span>
                    <img src={item?.img} alt="" />
                    <div className="px-4">
                      <h2
                        style={{
                          fontSize: "22px",
                          fontWeight: "500",
                          color: "#609DCE",
                        }}
                        className="pt-3 text-center"
                      >
                        {item?.title}
                      </h2>
                      <p
                        style={{ fontSize: "15px" }}
                        className="text-center pt-2"
                      >
                        {item?.description}
                        {/* {item?.description.length < 80
                          ? item?.description
                          : item?.description.slice(0, 80) + "..."} */}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default OurProducts;
