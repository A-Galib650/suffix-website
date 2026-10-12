/** @format */
import { useState } from "react";
import ModalVideo from 'react-modal-video';
import banner_dot from "../../assets/img/banner_dot.png";
import banner from "../../assets/img/banner_image.png";
import button from "../../assets/img/button.png";
import hero from "../../assets/img/hero-9-img.png";

const HeroSection = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <section
      className="hero-it-solution hero-nine-bg ptb-120 hero-wrapper hero-class"
      style={{ background: `url(${hero})no-repeat center center` }}
    >
      <div className="container">
        <div className="row align-items-center px-5 px-md-0">
          <div className="col-lg-6 col-md-10 order-1 order-lg-0">
            <div className="hero-content-wrap px-5 mt-5 mt-lg-0 mt-xl-0">
              <h1
                className="fw-bold display-5 "
                data-aos="zoom-in-up"
                style={{ fontWeight: "700", fontSize: "4rem" }}
              >
                We care about the IT Solution you need
              </h1>
              <p
                className="lead"
                style={{ fontSize: "1.7rem ", fontWeight: "400px" }}
              >
                Suffix IT provides best and prominent Software & Hardware
                solutions to ensure your business
              </p>
              <div className="action-btn mt-5 align-items-center d-flex d-block d-sm-flex d-lg-flex d-md-flex">
                <a href="#WhyChooseUs" className="me-5">
                  <button
                    className="btn btn-primary border-0 nav-btn text-uppercase"
                    type="submit"
                  >
                    Let's Explore
                  </button>
                </a>

                {/* {/ eslint-disable-next-line jsx-a11y/anchor - is - valid /} */}
                <ModalVideo className="modalVideoIframeWrap" channel='custom' isOpen={isOpen} onClose={() => setOpen(false)} >
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/t9XYLboQdSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ModalVideo >
               
                <button
                  href="#"
                  className="request-loader youtube text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-lg-0 mt-md-0 text-primary ml-3"
                  onClick={() => setOpen(true)}
                >
                  <span>
                    <img src={button} alt="demo" className="mb-2 mb-sm-0"/>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 " data-aos="fade-left">
            <div className="hero-img position-relative md:mt-5 mt-lg-0 text-center">
              <img 
                src={banner}
                alt="hero hero-it-solution "
                className="img-fluid"
              />
              <div className="dots">
                <img src={banner_dot} alt="dot" className="dot-1" />
                <img src={banner_dot} alt="dot" className="dot-2" />
              </div>
              <div className="bubble">
                <span className="bubble-1"></span>
                <span className="bubble-2"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
