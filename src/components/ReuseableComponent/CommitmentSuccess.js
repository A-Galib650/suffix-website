import React from "react";
import img from "../../media/ITInfrastructure/Line.png";
import successImage1 from "../../media/ITInfrastructure/successImage1.png";
import successImage2 from "../../media/ITInfrastructure/successImage2.png";
import successImage3 from "../../media/ITInfrastructure/successImage3.png";
import successImage4 from "../../media/ITInfrastructure/successImage4.png";
import CardComponent from "./CardComponent";
import ImageComponent from "./ImageComponent";


const CommitmentSuccess = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#F5F6FB" }}>
      <div
        className="container text-center py-5"
        style={{ position: "relative", backgroundColor: "#F5F6FB" }}
      >
        <h1 className="mb-3 fw-bold">Our Commitment To Your Success</h1>
        <p className="text-muted mb-5">
          Solutions That Grow With Your Vision And Goals
        </p>
        <div
          className="row align-items-center"
          style={{ position: "relative" }}
        >
          

          <CardComponent
            image={successImage1}
            title="Expertise"
            description="Our team comprises seasoned professionals with extensive experience in IT infrastructure services."
          />

          

          <ImageComponent
            image={img}
            altText="Divider"
            style={{
              top: "20%",
              left: "25%",
            }}
          />

          
          <CardComponent
            image={successImage2}
            title="Customized Solutions"
            description="We tailor our services to meet the unique requirements of your business."
          />

         

          <ImageComponent
            image={img}
            altText="Divider"
            style={{
              top: "20%",
              left: "50%",
            }}
          />

          
          <CardComponent
            image={successImage3}
            title="Proactive Approach"
            description="We emphasize proactive monitoring and maintenance to prevent issues before they arise."
          />

         

          <ImageComponent
            image={img}
            altText="Divider"
            style={{
              top: "20%",
              left: "75%",
            }}
          />

          
          <CardComponent
            image={successImage4}
            title="Client-Centric Focus"
            description="Your business success is our priority; we work closely with you to achieve your IT goals."
          />
        </div>
      </div>
    </div>
  );
};

export default CommitmentSuccess;
