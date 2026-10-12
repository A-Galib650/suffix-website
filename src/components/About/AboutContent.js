import React from "react";

const AboutContent = () => {
  return (
    <section
      className="about text-secondary overflow-hidden"
      style={{ fontFamily: "calibri", paddingBottom: "60px" }}
      id="whoWeAre"
    >
      <div className="container-fluid px-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 order-1 order-lg-0" data-aos="fade-right">
            <div className="about-content">
              <div className="section-title">
                <h3 className="sub-title wow pixFadeUp">Our History</h3>
                <h2 className="title wow pixFadeUp" data-wow-delay="0.3s">
                  Who we are?
                </h2>
              </div>
              {/* /.section-title */}
              <p
                className="description wow pixFadeUp text-justify"
                data-wow-delay="0.4s"
                style={{ fontSize: "20px", fontWeight: "500" }}
              >
                At Suffix IT, we develop innovative and creative products and
                services that provide total communication and information
                solutions. Among a plethora of services, web design and
                development, tailor made applications, ERPs, CRMs, e-commerce
                solutions, business-to-business applications, business-to-client
                applications, managed hosting and internet portal management are
                few that we offer. Satisfied clients around the globe bear
                testimony to the quality of our work. As a leader in technology
                exploring, Suffix IT is committed to exporting quality software
                worldwide.
              </p>
              <div
                className="singiture wow pixFadeUp"
                data-wow-delay="0.5s"
                style={{ fontWeight: "bold" }}
              >
                <h4>Vision</h4>
                <p
                  className="description wow pixFadeUp"
                  data-wow-delay="0.4s"
                  style={{ fontSize: "20px", fontWeight: "500" }}
                >
                  Our goal is to become a well-known global ICT solution
                  provider that meets societal needs and contributes favorably
                  to humanity's interests.
                </p>
              </div>
              <div
                className="singiture wow pixFadeUp "
                data-wow-delay="0.5s"
                style={{ fontWeight: "bold" }}
              >
                <h4>Mission</h4>
                <p
                  className="description wow pixFadeUp"
                  data-wow-delay="0.4s"
                  style={{ fontSize: "20px", fontWeight: "500" }}
                >
                  To use our enthusiasm for technology to bring success and
                  happiness to our clients and staff thus also providing
                  high-growth possibilities for rewarding employment and thereby
                  serve humanity.
                </p>
              </div>
              {/* /.singiture */}
            </div>
            {/* /.about-content */}
          </div>
          {/* /.col-lg-7 */}
          <div
            className="col-lg-5 mb-5"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div
              className="about-thumb wow pixFadeRight"
              style={{ marginTop: 120 }}
              data-wow-delay="0.6s"
            >
              <img
                src="https://i.ibb.co/KN8Rb5c/IMG-4808.png"
                alt="about"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
