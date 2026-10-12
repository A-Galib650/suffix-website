import React from "react";
import Dashbord1 from '../../media/IndustrialEnergy/Dashboard_1.jpg'
const LeftText = ({
  bgColor,
  isVideo = false,
  isIcon = false,
}) => {
  return (
    <div
      className="CommonIntegrate"
      style={{
        minHeight: "auto",
        padding: "50px 0px",
        background: `${bgColor}`,
        backgroundPosition: "center",
        backgroundRepeat: "none",
        backgroundSize: "cover",
      }}
    >
      <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-center px-5">
          <div
            className="col-md-5"
            data-aos="fade-right"
            data-aos-offset="-20"
            data-aos-easing="ease-in-sine"
          >
            <h1 
            className="animationTextSmall"
              style={{ fontWeight: "600", color: "#609dce" }}
            >
              Monitor & Analyze Real-Time
              Energy Consumption
            </h1>
          </div>

          <div
            className="col-md-5"
            data-aos="fade-left"
            data-aos-offset="-20"
            data-aos-easing="ease-in-sine"
          >
            {
              <img
                src={Dashbord1}
                alt="Loading"
                style={{ width: "100%", objectFit: "contain" }}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftText;
