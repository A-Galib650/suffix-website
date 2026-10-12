

import React, { useState } from "react";
import { GrCheckboxSelected } from "react-icons/gr";

function FeatureCard({ title, description, features, image }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="col-12 col-md-6 col-lg-4 d-flex justify-content-center position-relative mt-0 mb-3 mb-sm-5 mx-4 mx-sm-3" // Added horizontal margins (mx) for all screen sizes
    >
      <div
        className="card text-center"
        style={{
          width: "100%",
          border: "1px solid #352885",
          backgroundColor: isHovered ? "#352885" : "white", 
          color: isHovered ? "white" : "black", 
          transition: "background-color 0.3s ease, color 0.3s ease",
          fontSize:"14px"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card-body">
          <h5 className="card-title mt-5 fw-bold">{title}</h5>
          <p className="card-text fs-5 px-4 py-0">{description}</p>
          <ul className="list-unstyled text-start px-4 pt-0 pb-4">
            {features.map((feature, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center",fontWeight:"bold"}}>
                <GrCheckboxSelected
                  style={{ marginRight: "8px"}}
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="position-absolute"
        style={{
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          backgroundColor: "#ffff",
          border: "1px solid #352885",
          marginTop: "-25px",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: "50px", height: "50px", padding: "10px" }}
        />
      </div>
    </div>
  );
}

export default FeatureCard;
