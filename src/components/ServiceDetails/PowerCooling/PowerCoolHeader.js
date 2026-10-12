import React from "react";
import img from "../../../media/systemIntegrator/lineImage.png";
import bannerImage from "../../../media/powerCooling/powercoolImage.png";
export const PowerCoolHeader = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="fw-bold mb-3">Our Power & Cooling Solutions</h1>
      <div className="">
        <img src={img} alt={img}></img>
      </div>

      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"50px"
        }}
      >
        <img
          src={bannerImage}
          alt="bannerImage"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};
