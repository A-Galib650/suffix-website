import Footer from "../Footer/Footer";
import banner from "../../media/banner/manner-marketing.png";
import mpckup from "../../media/banner/banner-nine.png";
import jobListBG from "../../media/background/job-list-bg.jpg";
import { ScrollUp } from "../../helpers/ScrollUp";
import data from "./CareerFakeData";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SEOComponent from "../common/SEOComponent";


const Career = () => {
  ScrollUp();
  return (
    <div>
      <SEOComponent />

      <section className="banner banner-nine" style={{ background: `url(${banner}) center center/cover no-repeat` }}>
        <div className="container-fluid">
          <h2 className="banner-title wow pixFadeUp text-center" data-wow-delay="0.3s" >
            Career
          </h2>
          <div className="promo-mockup wow pixFadeUp text-center " data-wow-delay="0.9s">
            <img src={mpckup} alt="mpckup" style={{ width: "100%", objectFit: "contain" }} />
          </div>
        </div>
      </section>
     
      <section className="joblists" style={{ background: `url(${jobListBG}) top center/cover no-repeat` }}>
        <div className="container">
          <div className="section-title style-four text-center">
            <h2 className="title wow pixFadeUp" data-wow-delay="0.3s">Find a job</h2>
            <h3 className="sub-title wow pixFadeUp">Choose from the list of most popular categories.</h3>
          </div>
          <div className="saaspik__jobs" >
            {
              data.map((item, index) => {
                const { id, title, img, vacancy, jobType, location } = item;
                return (
                  <Link to={`/career-detail/${id}`}>
                    <div className="job__list" key={index} style={{ cursor: "pointer" }} >


                      <div className="job-info">
                        <div className="company-logo">
                          <img src={img} alt="saspik job" style={{ width: "100%", height: "auto" }} />
                        </div>
                        <div className="info">
                          <h4 className="job-title" data-toggle="modal">{title}</h4>
                          <p className="designation">{vacancy}</p>
                        </div>
                      </div>
                      <div className="job-time d-none d-md-block d-sm-block">
                        <span>{jobType}</span>
                      </div>
                      <div className="job-location d-none d-md-block d-sm-block">
                        <span>{location}</span>
                      </div>
                    </div>
                  </Link>
                )
              })
            }

          </div>
          {/* /.saaspik__jobs */}
          {/* <div className="job-pagination-wrapper">
            <div className="showing-result">
              <p className="show-result">Showing <span>10</span> of <span>1300</span> Latest Jobs</p>
            </div>
            <ul className="job-pagination">
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">....</a></li>
              <li><a href="#">30</a></li>
            </ul>
          </div> */}

        </div>

      </section>


      <Footer />
    </div>



  )
}

export default Career
