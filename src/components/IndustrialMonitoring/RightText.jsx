import React from "react";
import Dashbord2 from '../../media/IndustrialEnergy/Dashboard_2.jpg'
const RightText = ({
  image,
  title,
  bgColor,
  passageData = "",
  isIcon = false,
}) => {
  return (
    <div
      className="CommonIntegrate"
      style={{
        minHeight: "auto",
        padding: "0px 0px",
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
            <img
              src={Dashbord2}
              alt="interconnect billing"
              style={{ width: "100%", objectFit: "contain" }}
            />
          </div>
          <div
            className="col-md-5"
            data-aos="fade-left"
            data-aos-offset="-20"
            data-aos-easing="ease-in-sine"
          >
            <h1
              className="animationTextSmall"
              style={{  fontWeight: "600", color: "#609dce" }}
            >
              Alert on Dashboard when Failure to Received Data from any Meter / any Parameter exceds Range
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightText;
