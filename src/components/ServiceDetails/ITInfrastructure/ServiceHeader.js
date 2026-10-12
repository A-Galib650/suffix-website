import React from "react";
import img from '../../../media/ITInfrastructure/serviceImg.png';

const ServiceHeader = () => {
 

  return (
    <div className="container text-center my-5">
      <h1 className="fw-bold mb-3">Our IT Infrastructure Services</h1>
      <p className="text-muted mb-4">
        Explore how we design, implement, and manage tailored IT infrastructure
        solutions. <br/> To power your business operations seamlessly and securely
      </p>
      <div className="">
      <img src={img} alt={img}></img>
      </div>
    </div>
  );
};

export default ServiceHeader;