import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowSize } from "../../helpers/WindowSize";
import logo from "../../media/download/Asset.png";

const CareerDetailContent = ({ CareerDetailContentData }) => {
  const {
    title,
    jobType,
    deadline,
    category,
    modalLocation,
    offeredSalary,
    festivalBonus,
    experience,
    gender,
    email,
    responsibility,
    requirements,
    whatWeOffer, 
  } = CareerDetailContentData;

  const [height, width] = useWindowSize();

  
  const renderListItems = (items) => {
   
    return (
      <ul style={{ listStyleType: 'disc' }}> 
        {items.map((item, index) => {
          
          const isSubBullet = item.startsWith("  • ");
          
          const isStrongUnderstanding = item.includes("Strong understanding of:");
          

          const content = isSubBullet ? item.substring(4) : item;

         
          const listItemStyle = isSubBullet 
            ? { 
                marginLeft: '25px', 
                listStyleType: 'circle', 
                marginBottom: '5px',
                fontWeight: 'normal', 
              }
            : { 
                marginLeft: '0px',
                listStyleType: 'disc', 
                marginBottom: '5px',
                
                fontWeight: isStrongUnderstanding ? 'bold' : 'normal', 
              };

          return (
            <li 
              key={index}
              style={listItemStyle}
            >
              {content}
            </li>
          );
        })}
      </ul>
    );
  };
  
  const renderSimpleList = (items) => {
    return (
        <ul style={{ listStyleType: 'disc' }}>
            {items.map((item, index) => (
                <li key={index} style={{ marginBottom: '5px' }}>{item}</li>
            ))}
        </ul>
    );
  };

  
  const renderOfferList = (items) => {
    
    if (!items || items.length === 0) return null;

    return (
        <ul style={{ listStyleType: 'disc' }}>
            {items.map((item, index) => (
                <li key={index} style={{ marginBottom: '5px' }}>{item}</li>
            ))}
        </ul>
    );
  };


  return (
    <div
      className="careerContentInformation d-flex justify-content-center text-left"
      style={{ padding: "50px 20px" }}
    >
      <div
        className="container"
        style={{
          padding: "10px 20px 60px 20px",
          height: "auto",
          background: `linear-gradient(rgba(254,254,254),rgba(254,254,254) ) center center/cover no-repeat`,
          boxShadow: "10px 10px 40px rgba(232,232,232)",
        }}
      >
        <div className="row  d-flex justify-content-between  align-items-center px-5">
          <div className="col-md-2 d-none d-md-block mb-5 mb-md-0"> 
              <img
                  src={logo}
                  alt="suffix-logo"
                  style={{ width: "80%", objectFit: "contain"}}
              />
          </div>
          <div className="col-md-4 pt-4">
            <h3 style={{ fontSize: "1.3rem", lineHeight: "2.5rem" }}>
              {title} ({jobType})
            </h3>
            <h3
              className="py-2"
              style={{ fontSize: "1.3rem", lineHeight: "2.5rem" }}
            >
              <FontAwesomeIcon icon={faCalendarAlt} /> Application Deadline:{" "}
              {deadline}
            </h3>
          </div>
        </div>
        <hr />
        
        <div class="row d-flex justify-content-around px-5">
          <div class="col-xl-7">
            <div class="job-list mb-50 mt-40">
              <h4>Responsibilities</h4>
             
              {renderSimpleList(responsibility)}
            </div>
            <div class="job-list mb-50 mt-40">
              <h4>Requirements</h4>
             
              {renderListItems(requirements)} 
            </div>
            
            {whatWeOffer && (
              <div class="job-list mb-50 mt-40">
                <h4>What We Offer</h4>
                {renderOfferList(whatWeOffer)} 
              </div>
            )}
            
          </div>
          <div class="col-xl-5">
            <div class="team__job mt-15 mb-30">
              <h4>Job Information</h4>
              <ul>
                <li class="row">
                  <h5>Job Type</h5>
                  <span style={{ color: "#667488" }}>{jobType}</span>
                </li>
                <li class="row">
                  <h5>Category</h5>
                  <span style={{ color: "#667488" }}>{category}</span>
                </li>
                <li class="row">
                  <h5>Location</h5>
                  <span style={{ color: "#667488" }}>{modalLocation}</span>
                </li>
                <li class="row">
                  <h5>Offered Salary</h5>
                  <span style={{ color: "#667488" }}>{offeredSalary}</span>
                </li>
                <li class="row">
                  <h5>Festival Bonus</h5>
                  <span style={{ color: "#667488" }}> {festivalBonus}</span>
                </li>
                <li class="row">
                  <h5>Experience</h5>
                  <span style={{ color: "#667488" }}>{experience}</span>
                </li>
                <li class="row">
                  <h5>Gender</h5>
                  <span style={{ color: "#667488" }}>{gender}</span>
                </li>
                <li class="row">
                  <h5>Email</h5>
                  <span style={{ color: "#667488" }}>{email}</span>
                </li>

                <li class="row">
                  <h5>Application Ends</h5>
                  <span style={{ color: "#667488" }}>{deadline}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`career-button d-flex ${
            width <= 768 ? "justify-content-center" : "justify-content-end"
          }`}
        >
          <a href="https://forms.gle/qc1GUGA9mgsTbUcz8" target="_blank">
            <span></span>APPLY
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareerDetailContent;