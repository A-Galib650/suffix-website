import React from "react";
import scada from "../../../media/Iot/scada.jpg";
const ScadaFeatures = () => {
  return (
    <>
      <div className="d-flex justify-content-around align-items-center row px-5 pt-5 pb-5 py-5 ">
        <div
          className="col-md-5 "
          data-aos="fade-right"
          data-aos-offset="-20"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <iframe
            width="100%"
            height="300"
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/wufBLKnsFLE"
          ></iframe>
        </div>
        <div
          className="col-md-4 pb-4 "
          data-aos="fade-left"
          data-aos-offset="-20"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <h1
            className="text-center pb-5"
            style={{ fontSize: "30px", fontWeight: "600" }}
          >
            SCADA <span style={{ color: "#609dce" }}>Features</span>
          </h1>
          <img
            src={scada}
            alt="scada"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </>
  );
};

export default ScadaFeatures;
