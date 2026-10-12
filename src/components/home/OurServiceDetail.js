import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";


const OurServiceDetail = ({ singleServiceData }) => {
  const { icon, name, description, serviceTitle } = singleServiceData;
  return (
    <div class="card service-single-card  bounce-to-bottom-service col-md-3 mx-4 shadow " style={{ width: "22rem" }} >
      <div className="icon">
        <i className={icon} />
      </div>

      <div class="card-body pt-3 px-3">
        <p style={{ fontSize: "18px", fontWeight: "600" }}>{name}</p>
        <p className=" text-left " style={{ fontSize: "14px", fontWeight: "400" }}>{description}</p>
      </div>
      <Link to={`/service/${serviceTitle}`} >
        <div className="serviceButtonDiv service-button " >
          <FontAwesomeIcon icon={faArrowRight} className="d-flex justify-content-center text-light" />
        </div>
      </Link>
    </div>
  )
}

export default OurServiceDetail
