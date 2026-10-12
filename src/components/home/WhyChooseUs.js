/** @format */

import { CURRENT_YEAR } from "../../helpers/Constant";
import filedManagement from "../../media/download/fieldForce.svg.png";
import pie from "../../media/fieldForce/pie-chart.png";
import team from "../../media/fieldForce/team.png";

const WhyChooseUs = () => {
  // ★★★ কোম্পানি প্রতিষ্ঠার বছর ও মাস সেট করা (১ জুলাই ২০১৭) ★★★
  const startYear = 2017;
  const startMonth = 6; // জুলাই = 6 (জাভাস্ক্রিপ্টে জানুয়ারি = 0)

  // বর্তমান তারিখ
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  // লজিক: যদি বর্তমান মাস জুলাই (6) এর চেয়ে ছোট হয় (অর্থাৎ জানুয়ারি-জুন), তবে ১ বছর বিয়োগ হবে
  // অন্যথায় (জুলাই-ডিসেম্বর) সঠিক বছর দেখাবে।
  let experienceYears = currentYear - startYear;
  if (currentMonth < startMonth) {
    experienceYears = experienceYears - 1;
  }

  return (
    <section
      className="container-fluid whychooseus"
      id="WhyChooseUs"
      style={{
        // width: "100vw",
        backgroundColor: "rgb(255, 255, 255)",
        backgroundPosition: "center",
        backgroundRepeat: "none",
      }}
    >
      <div className="row">
        <div
          className="col-xl-6 px-5 d-flex justify-content-center"
          style={{
            // background: "#fff",
            // backgroundPosition: "center",
            // backgroundRepeat: "none",
            // paddingTop: "70px",
            // paddingBottom: "30px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
        >
          <img
            className=" mt-5 mt-md-0 pt-md-0"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              paddingTop: "10px",
            }}
            src={filedManagement}
            alt="filedManagement"
            data-aos="zoom-in-right"
          />
        </div>
        <div
          className="col-xl-6 choose-content"
          // data-aos="fade-up"
        >
          <h5
            className="mb-3"
            style={{
              fontWeight: "600",
              color: "#0072bc",
              fontSize: "2rem",
            }}
          >
            Why Choose Us
          </h5>
          
          {/* ★★★ এখানে শুধু {CURRENT_YEAR - 2017} এর জায়গায় {experienceYears} + বসানো হয়েছে ★★★ */}
          <h2
            className="mb-4"
            style={{
              fontSize: "3.5rem",
              fontWeight: "700",
              color: "#071c4d",
            }}
          >
            We are working with <br /> {experienceYears}+ years experience
          </h2>

          <p className="mb-5" style={{ fontSize: "15px" }}>
            We consist of a great team of professional and highly skilled
            engineers with excellent technical knowledge and experience for
            developing quality software.
          </p>
          <div className="row mb-5">
            <div
              className="col-xl-6 col-md-12 mb-4 mb-md-0 about-icon-box"
              style={{
                color: "#071c4d",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <img src={pie} className="img-fluid me-2" alt="pie" />
              Client Focused
            </div>
            <div
              className="col-xl-6 col-md-12 about-icon-box"
              style={{
                color: "#071c4d",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <img src={team} className="img-fluid me-2" alt="team" />
              Next Gen Technology Provider
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-md-6 col-sm-6">
              <ul className="chooseList">
                <li className="py-3">
                  <i class="fas fa-check-circle  #0072bc !important text-primary py-1 "></i>
                  24/7 support service
                </li>
                <li className="py-3">
                  <i class="fas fa-check-circle #0072bc !important text-primary py-1 "></i>
                  On-time Delivery
                </li>
                <li className="py-3">
                  <i class="fas fa-check-circle #0072bc !important text-primary py-1"></i>
                  Within Budget
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6">
              <ul className="chooseList">
                <li className="py-3">
                  <i class="fas fa-check-circle  #0072bc !important text-primary py-1"></i>
                  Creating ideas with passion
                </li>
                <li className="py-3">
                  <i class="fas fa-check-circle  #0072bc !important text-primary py-1"></i>
                  Assure best quality
                </li>
                <li className="py-3">
                  <i class="fas fa-check-circle  #0072bc !important text-primary py-1"></i>
                  Solution for revolution
                </li>
              </ul>
            </div>
          </div>
          <a href="#our-company">
            <button className="btn btn-primary border-0 nav-btn" type="submit">
              Learn More <i class="fas fa-arrow-right"></i>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;