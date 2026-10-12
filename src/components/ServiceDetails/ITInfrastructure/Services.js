import React from "react";
import networkImage from "../../../media/ITInfrastructure/networkImage.png";
import serverImage from "../../../media/ITInfrastructure/serverImage.png";
import cloudImage from "../../../media/ITInfrastructure/cloudImage.png";
import dataImage from "../../../media/ITInfrastructure/dataImage.png";
import CybersecurityServicesImage from "../../../media/ITInfrastructure/CybersecurityServicesImage.png";
import itSupportImage from "../../../media/ITInfrastructure/itSupportImage.png";


const Services = () => {
  return (
    <>
     

      <div className="container p-5 textsize">
        <div className="row align-items-center justify-content-center mb-5">
          {/* Left Column */}
          <div className="col-12 col-md-6 p-5">
            {/* New Component */}
            <div className="d-flex align-items-start">
              <div className="me-2">
                <div className="d-flex justify-content-center align-items-center icon-container">
                  <img
                    src={networkImage}
                    alt="network"
                    style={{ width: "50px", height: "50px", padding: "10px" }}
                  />
                </div>
              </div>
              <div>
                <h3 className="fw-bold fs-5 p-3">
                  Network Design and Implementation
                </h3>
              </div>
            </div>

            {/* Existing Component */}
            <div className="p-4 mt-5">
              <div className="d-flex flex-column description-container">
                {[
                  {
                    description:
                      "Developing scalable and secure network architectures tailored to your organizational needs",
                  },
                  {
                    description:
                      "Implementing high-performance wired and wireless networks to ensure seamless connectivity",
                  },
                ]
                .map((item, index) => (
                  <div key={index} className="position-relative">
                    <div className="position-absolute description-item-marker"></div>
                    <p className="ms-4 text-muted">{item.description}</p>
                  </div>
                ))
                }
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-6 p-5">
            {/* New Component */}
            <div className="d-flex align-items-start">
              <div className="me-2">
                <div className="d-flex justify-content-center align-items-center icon-container">
                  <img
                    src={serverImage}
                    alt="server"
                    style={{ width: "50px", height: "50px", padding: "10px" }}
                  />
                </div>
              </div>
              <div>
                <h3 className="fw-bold fs-5 p-3">Server Management</h3>
              </div>
            </div>

            {/* Existing Component */}
            <div className="p-4 mt-5">
              <div className="d-flex flex-column description-container">
                {[
                  {
                    description:
                      "Provisioning and maintaining physical and virtual servers to support your applications and services",
                  },
                  {
                    description:
                      "Ensuring optimal server performance through regular monitoring and updates",
                  },
                ].map((item, index) => (
                  <div key={index} className="position-relative">
                    <div className="position-absolute description-item-marker"></div>
                    <p className="ms-4 text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center justify-content-center mb-5">
          {/* Left Column */}
          <div className="col-12 col-md-6 p-5">
            {/* New Component */}
            <div className="d-flex align-items-start">
              <div className="me-2">
                <div className="d-flex justify-content-center align-items-center icon-container">
                  <img
                    src={cloudImage}
                    alt="cloud"
                    style={{ width: "50px", height: "50px", padding: "10px" }}
                  />
                </div>
              </div>
              <div>
                <h3 className="fw-bold fs-5 p-3">Cloud Services</h3>
              </div>
            </div>

            {/* Existing Component */}
            <div className="p-4 mt-5">
              <div className="d-flex flex-column description-container-two">
                {[
                  {
                    description:
                      "Assisting in the migration to cloud platforms for enhanced flexibility and scalability",
                  },
                  {
                    description:
                      "Managing cloud resources to optimize performance and cost-efficiency",
                  },
                ].map((item, index) => (
                  <div key={index} className="position-relative">
                    <div className="position-absolute description-item-marker"></div>
                    <p className="ms-4 text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-6 p-5">
            {/* New Component */}
            <div className="d-flex align-items-start">
              <div className="me-2">
                <div className="d-flex justify-content-center align-items-center icon-container">
                  <img
                    src={dataImage}
                    alt="data"
                    style={{ width: "50px", height: "50px", padding: "10px" }}
                  />
                </div>
              </div>
              <div>
                <h3 className="fw-bold fs-5 p-3">Data Storage Solutions</h3>
              </div>
            </div>

            {/* Existing Component */}
            <div className="p-4 mt-5">
              <div className="d-flex flex-column description-container-two">
                {[
                  {
                    description:
                      "Designing and implementing reliable data storage systems to safeguard your critical information",
                  },
                  {
                    description:
                      "Offering backup and disaster recovery solutions to ensure business continuity",
                  },
                ].map((item, index) => (
                  <div key={index} className="position-relative">
                    <div className="position-absolute description-item-marker"></div>
                    <p className="ms-4 text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center justify-content-center mb-5">
          {/* Left Column */}
          <div className="col-12 col-md-6 p-5">
            {/* New Component */}
            <div className="d-flex align-items-start">
              <div className="me-2">
                <div className="d-flex justify-content-center align-items-center icon-container">
                  <img
                    src={CybersecurityServicesImage}
                    alt="cybersecurity"
                    style={{ width: "50px", height: "50px", padding: "10px" }}
                  />
                </div>
              </div>
              <div>
                <h3 className="fw-bold fs-5 p-3">Cybersecurity Services</h3>
              </div>
            </div>

            {/* Existing Component */}
            <div className="p-4 mt-5">
              <div className="d-flex flex-column description-container-three">
                {[
                  {
                    description:
                      "Implementing robust security measures to protect your IT infrastructure from threats",
                  },
                  {
                    description:
                      "Conducting regular security assessments and compliance audits",
                  },
                ].map((item, index) => (
                  <div key={index} className="position-relative">
                    <div className="position-absolute description-item-marker"></div>
                    <p className="ms-4 text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-6 p-5">
            {/* New Component */}
            <div className="d-flex align-items-start">
              <div className="me-2">
                <div className="d-flex justify-content-center align-items-center icon-container">
                  <img
                    src={itSupportImage}
                    alt="IT support"
                    style={{ width: "50px", height: "50px", padding: "10px" }}
                  />
                </div>
              </div>
              <div>
                <h3 className="fw-bold fs-5 p-3">IT Support and Maintenance</h3>
              </div>
            </div>

            {/* Existing Component */}
            <div className="p-4 mt-5">
              <div className="d-flex flex-column description-container-three">
                {[
                  {
                    description:
                      "Providing 24/7 technical support to promptly address any IT issues",
                  },
                  {
                    description:
                      "Performing routine maintenance to ensure the longevity and reliability of your IT systems",
                  },
                ].map((item, index) => (
                  <div key={index} className="position-relative">
                    <div className="position-absolute description-item-marker"></div>
                    <p className="ms-4 text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
