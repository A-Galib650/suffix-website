import React from "react";

import serviceone from "../../media/callcenter/service1.gif";
import servicetwo from "../../media/callcenter/service2.gif";
import servicethree from "../../media/callcenter/service3.gif";

const CallCenter = () => {
  return (
    <div
      className="container-fluid callcenter"
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        backgroundPosition: "center",
        backgroundRepeat: "none",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <div className="brand-title text-center">
        <h1 style={{ color: "#525252", fontSize: "28px", paddingBottom: "" }}>
          <strong>
            Our <span style={{ color: "#609dce" }}>Call Center Service</span>
          </strong>
        </h1>
        <p
          className="text-secondary"
          style={{ fontSize: "18px", paddingBottom: "30px" }}
        >
          {" "}
          We never say no to anything! We are here for all your needs. All you
          have to do is tell.
        </p>
      </div>
      <div>
        <div className="row" style={{ paddingBottom: "60px" }}>
          <div className="col-md-4  text-center  ">
            <div
              className="m-2 border border-2 p-5 shadow-sm p-3 mb-5 bg-body rounded"
              style={{ border: "#609dce" }}
            >
              <img
                src={serviceone}
                className="img-fluid"
                style={{ maxWidth: "50%" }}
              ></img>
              <h2
                style={{
                  fontSize: "22px",
                  paddingBottom: "10px",
                  fontWeight: "500",
                  color: "#609dce",
                }}
              >
                Inbound Call
              </h2>
              <p style={{ fontSize: "16px", paddingBottom: "20px" }}>
                Dedicated and hardworking agents who are working tirelessly to
                answer all queries about your company.
              </p>
            </div>
          </div>
          <div className="col-md-4  text-center  ">
            <div
              className="m-2 border border-2 p-5 shadow-sm p-3 mb-5 bg-body rounded"
              style={{ border: "#609dce" }}
            >
              <img
                src={servicetwo}
                className="img-fluid"
                style={{ maxWidth: "40%" }}
              ></img>
              <h2
                style={{
                  fontSize: "22px",
                  paddingBottom: "10px",
                  fontWeight: "500",
                  color: "#609dce",
                  paddingTop: "30px",
                }}
              >
                Outbound Call
              </h2>
              <p style={{ fontSize: "16px", paddingBottom: "20px" }}>
                Let customers know about your products/services via our charming
                agents.
              </p>
            </div>
          </div>
          <div className="col-md-4  text-center  ">
            <div
              className="m-2 border border-2 p-5 shadow-sm p-3 mb-5 bg-body rounded"
              style={{ border: "#609dce" }}
            >
              <img
                src={servicethree}
                className="img-fluid"
                style={{ maxWidth: "50%" }}
              ></img>
              <h2
                style={{
                  fontSize: "22px",
                  paddingBottom: "10px",
                  fontWeight: "500",
                  color: "#609dce",
                }}
              >
                Live Chat Support
              </h2>
              <p style={{ fontSize: "16px", paddingBottom: "20px" }}>
                Group of smart and charismatic agents are always online to
                provide live chat services.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center" style={{ paddingBottom: "50px" }}>
          <a
            href="http://suffixcallcenter.com/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary border-0 nav-btn "
          >
            More Info <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallCenter;
