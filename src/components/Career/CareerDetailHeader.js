import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../media/career/Website designer-amico.svg';

const careerDetailHeader = ({ headlineData }) => {
  const { title, deadline, jobType } = headlineData;
  return (
    <div className="careerDetailHeader" style={{ margin: "0px" }}>
      <div className="career-detail-header" style={{ padding: "100px 0px" }}>
        {/* Header Curve Svg */}
        <div class="custom-shape-divider-bottom-1635934862">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>

        {/* Header content */}
        <div className="container-fluid career-content ">
          <div className=" row d-flex  align-items-center justify-content-evenly">

            <div className="col-lg-6 col-md-6 order-1 order-lg-0">
              <h3 className=" text-light text-center" style={{ fontSize: "35px" }}>{title}</h3>

              <h3 className=" text-light text-center py-3" style={{ fontSize: "22px" }}><FontAwesomeIcon icon={faCalendarAlt} /> Application Deadline: {deadline}</h3>

            </div>
            <div className="col-lg-6 col-md-6">
              <img src={img} alt="" style={{ width: "80%", objectFit: "contain" }}></img>
            </div>
          </div>

        </div>
      </div>
    </div>



  )
}

export default careerDetailHeader
