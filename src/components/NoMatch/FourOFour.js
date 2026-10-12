import React from "react";
import { F04Image_HUman } from "../../assets/ImageAssets/Navbar";

const FourOFour = () => {
  return (
    <div
      style={{ height: "100vh", background: "#E8EFFF" }}
      className="d-flex align-items-center justify-content-center flex-column"
    >
      <div className="py-5">
        <div className="row align-items-center justify-content-center py-5">
          <div className="col-md-6 align-items-center justify-content-center d-flex field-force-demo">
            <img src={F04Image_HUman} alt="ima" className="d-none d-md-block" />
          </div>
          <div className="col-md-6">
            <h1
              style={{ fontSize: "50px", fontWeight: "500" }}
              className="text-primary text-capitalize text-center"
            >
              <i className="fas fa-not-equal"></i>
            </h1>
            <h1
              style={{ fontSize: "50px", fontWeight: "500" }}
              className="text-primary text-capitalize text-center"
            >
              <i className="fas fa-not-equal"></i> 404{" "}
              <i className="fas fa-not-equal"></i>
            </h1>
            <h1
              style={{ fontSize: "50px", fontWeight: "500" }}
              className="text-primary text-capitalize text-center"
            >
              <i className="fas fa-not-equal" />
            </h1>
            <p className="text-center text-uppercase text-primary fw-bold">
              Page not found
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourOFour;
