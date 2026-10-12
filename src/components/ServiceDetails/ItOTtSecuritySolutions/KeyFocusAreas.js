import React from "react";
import networkImage from "../../../media/iT&OTSecuritySolutions/networkImage.png";
import securityImage from "../../../media/iT&OTSecuritySolutions/securityImage.png";
import cyberImage from "../../../media/iT&OTSecuritySolutions/cyberImage.png";
import applicationImage from "../../../media/iT&OTSecuritySolutions/applicationImage.png";
import operationalImage from "../../../media/iT&OTSecuritySolutions/operationalImage.png";



const KeyFocusAreas = () => {
  return (
    <>
      <style>
        {`
        .icon-container {
          width: 50px;
          height: 50px;
          background-color: #e6e6ff;
          border-radius: 50%;
          
        }

        .description-container {
         border-left: 2px solid #5a5a9d;
          padding-left: 8px;
          gap: 15px;
          width: 100%;
          height:130px;
          display: flex;
          flex-direction: column;
        
        }

        .description-container-two {
         border-left: 2px solid #5a5a9d;
          padding-left: 8px;
          gap: 15px;
          width: 100%;
          height:130px;
          display: flex;
          flex-direction: column;
        }

         .description-container-three {
         border-left: 2px solid #5a5a9d;
          padding-left: 8px;
          gap: 15px;
          width: 100%;
          height:130px;
          display: flex;
          flex-direction: column;
        }
       
        .description-item-marker {
        left: -16px;
        top: 0;
        width: 16px;
        height: 16px;
        background-color: #ffff;
        border-radius: 50%;
        border: 2px solid #5a5a9d; 
        }

        @media (max-width: 993px) {
          .description-container {
           height: 120px;
          }
          .description-container-two {
            height: 124px;
          }
          .description-container-three{
            height: 122px;
          }
          
        }

         @media (max-width: 1180px) {
          .description-container{
          height: 120px;
          }
          .description-container-two {
            height: 120px;
          }
          .description-container-three {
            height: 120px;
          }
          
        }
          @media (max-width: 992px) {
          .description-container {
           height: 118px;
          }
          .description-container-two {
            height: 118px;
          }
        }

         @media (max-width: 991px) {
          .description-container {
           height: 140px;
          }
          .description-container-two {
            height: 120px;
          }
        }

        @media (max-width: 769px) {
          .description-container {
          height: 140px;
          }
          .description-container-two {
            gap: 10px;
            height: 120px;
          }
          .icon-container {
            width: 40px;
            height: 40px;
          }
           div p{
          font-size:1.6rem;
          }
        }

         @media (max-width: 768px) {
          .description-container {
          height: 140px;
          }
          .description-container-two {
            gap: 10px;
            height: 120px;
          }
          .icon-container {
            width: 40px;
            height: 40px;
          }
           div p{
          font-size:1.2rem;
          }
        }

         @media (max-width: 767px) {
          .description-container {
          height: 118px;
          }
          .description-container-two {
            gap: 10px;
            height: 107px;
          }
          .description-container-three {
            gap: 10px
            height:116px;
          }
          .icon-container {
            width: 40px;
            height: 40px;
          }
          div p{
          font-size:1.8rem;
          }
        }

       
        @media (max-width: 577px) {
          .description-container {
          height: 120px;
          }
          .description-container-two {        
            height: 120px;
          }         
        }

        @media (max-width: 447px) {
          .description-container {
          height: 120px;
          }
          .description-container-two{        
            height: 102px;
            }
          .description-container-two div p { 
            font-size: 1.7rem;
          }         
        }

        @media (max-width: 430px) {
          .description-container {
          height: 118px;
          }
           .description-container div p { 
            font-size: 1.5rem;
          }  
          .description-container-two{        
            height: 102px;
            }
          .description-container-two div p { 
            font-size: 1.5rem;
          }    
          .description-container-three{ 
            height:102px;
          }    
          .description-container-three div p { 
            font-size: 1.5rem;
          }    
        }

          @media (max-width: 394px) {
          .description-container {
          height: 113px;
          }
           .description-container div p { 
            font-size: 1.4rem;
          }  
          .description-container-two{        
            height: 103px;
            }
          .description-container-two div p { 
            font-size: 1.4rem;
          }    
          .description-container-three{ 
            height:102px;
          }    
          .description-container-three div p { 
            font-size: 1.4rem;
          }    
        }
           @media (max-width: 376px) {
          .description-container {
          height: 108px;
          }
           .description-container div p { 
            font-size: 1.3rem;
          }  
          .description-container-two{        
            height: 98px;
            }
          .description-container-two div p { 
            font-size: 1.3rem;
          }    
          .description-container-three{ 
            height:102px;
          }    
          .description-container-three div p { 
            font-size: 1.3rem;
          }    
        }

          @media (max-width: 340px) {
          .description-container {
          height: 103px;
          }
           .description-container div p { 
            font-size: 1.2rem;
          }  
          .description-container-two{        
            height: 94px;
            }
          .description-container-two div p { 
            font-size: 1.2rem;
          }    
          .description-container-three{ 
            height:102px;
          }    
          .description-container-three div p { 
            font-size: 1.2rem;
          }    
        }

         @media (max-width: 323px) {
          .description-container {
          height: 94px;
          }
           .description-container div p { 
            font-size: 1rem;
          }  
          .description-container-two{        
            height: 83px;
            }
          .description-container-two div p { 
            font-size: 1rem;
          }    
          .description-container-three{ 
            height:94px;
          }    
          .description-container-three div p { 
            font-size: 1rem;
          }    
        }

         @media (max-width: 321px) {
          .description-container {
          height: 94px;
          }
           .description-container div p { 
            font-size: 1.1rem;
          }  
          .description-container-two{        
            height: 95px;
            }
          .description-container-two div p { 
            font-size: 1.1rem;
          }    
          .description-container-three{ 
            height:94px;
          }    
          .description-container-three div p { 
            font-size: 1.1rem;
          }    
        }

        `}
      </style>

      <div className="container p-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-6 p-5">
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
                <h3 className="fw-bold fs-5 p-3">Network Security</h3>
              </div>
            </div>

           
            <div className="p-4 mt-5">
              <div className="d-flex flex-column description-container">
                {[
                  {
                    description:
                      "Firewall Implementation: Advanced firewalls to monitor and control network traffic.",
                  },
                  {
                    description:
                      "Intrusion Detection & Prevention: Real-time threat detection and response mechanisms.",
                  },
                  {
                    description:
                      "Secure VPN Solutions: Enable safe remote access for your team.",
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

          
          <div className="col-12 col-md-6 p-5">
            <div className="d-flex align-items-start">
              <div className="me-2">
                <div className="d-flex justify-content-center align-items-center icon-container">
                  <img
                    src={securityImage}
                    alt="server"
                    style={{ width: "50px", height: "50px", padding: "10px" }}
                  />
                </div>
              </div>
              <div>
                <h3 className="fw-bold fs-5 p-3">Endpoint Security</h3>
              </div>
            </div>


            <div className="p-4 mt-5">
              <div className="d-flex flex-column description-container">
                {[
                  {
                    description:
                      "Antivirus & Malware Protection: Advanced tools to detect and eliminate threats.",
                  },
                  {
                    description:
                      "Patch Management: Regular updates to keep devices secure and compliant.",
                  },
                  {
                    description:
                      "Device Encryption: Safeguard data stored on endpoints.",
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

        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-6 p-5">
            <div className="d-flex align-items-start">
              <div className="me-2">
                <div className="d-flex justify-content-center align-items-center icon-container">
                  <img
                    src={cyberImage}
                    alt="cloud"
                    style={{ width: "50px", height: "50px", padding: "10px" }}
                  />
                </div>
              </div>
              <div>
                <h3 className="fw-bold fs-5 p-3">Application Security</h3>
              </div>
            </div>

            <div className="p-4 mt-5">
              <div className="d-flex flex-column description-container-two">
                {[
                  {
                    description:
                      "Web Application Firewalls (WAF): Protect against web-based attacks like SQL injection and XSS.",
                  },
                  {
                    description:
                      "Code Review & Testing: Identify and fix security loopholes in your applications.",
                  },
                  {
                    description:
                      "Secure Development Practices: Build secure applications from the ground up.",
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

          <div className="col-12 col-md-6 p-5">
            <div className="d-flex align-items-start">
              <div className="me-2">
                <div className="d-flex justify-content-center align-items-center icon-container">
                  <img
                    src={applicationImage}
                    alt="data"
                    style={{ width: "50px", height: "50px", padding: "10px" }}
                  />
                </div>
              </div>
              <div>
                <h3 className="fw-bold fs-5 p-3">Cybersecurity</h3>
              </div>
            </div>

            <div className="p-4 mt-5">
              <div className="d-flex flex-column description-container-two">
                {[
                  {
                    description:
                      "Threat Intelligence: Stay ahead of attackers with proactive threat identification.",
                  },
                  {
                    description:
                      "Incident Response: Swift action to minimize the impact of breaches.",
                  },
                  {
                    description:
                      "Compliance Management: Ensure adherence to cybersecurity regulations and standards.",
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

        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-6 p-5">
            <div className="d-flex align-items-start">
              <div className="me-2">
                <div className="d-flex justify-content-center align-items-center icon-container">
                  <img
                    src={operationalImage}
                    alt="cybersecurity"
                    style={{ width: "50px", height: "50px", padding: "10px" }}
                  />
                </div>
              </div>
              <div>
                <h3 className="fw-bold fs-5 p-3">Operational Technology (OT) Security</h3>
              </div>
            </div>


            <div className="p-4 mt-5">
              <div className="d-flex flex-column description-container-three">
                {[
                  {
                    description:
                      "SCADA System Security: Safeguard critical control systems in industrial environments.",
                  },
                  {
                    description:
                      "Real-Time Monitoring: Detect and mitigate threats to operational technologie.",
                  },
                  {
                    description:
                      "Network Segmentation: Isolate critical OT systems from potential attack vectors.",
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
           <div className="col-12 col-md-6 p-3">
          </div>

        
        </div>
      </div>
    </>
  );
};

export default KeyFocusAreas;
