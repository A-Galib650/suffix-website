/** @format */

import React from "react";
import FieldForceFeatureDetails from "./FieldForceFeatureDetails";
import data from "./FieldForceFakeData";

const FieldForceFeature = () => {
  return (
    <div className="field-force-feature" style={{ padding: "50px 0px" }}>
      <div>
        {/* <i class="fas fa-check-circle  #0072bc !important text-primary py-1 "></i> */}
        <h1
          className="text-center"
          style={{ fontSize: "35px", fontWeight: "500", paddingBottom: "30px" }}
        >
          Key <span style={{ color: "#609dce" }}>Features</span>
        </h1>
      </div>
      <div className="container-fluid px-5">
        <div className="row  d-flex justify-content-center">
          {data.map((feature) => (
            <FieldForceFeatureDetails feature={feature} key={feature.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FieldForceFeature;
