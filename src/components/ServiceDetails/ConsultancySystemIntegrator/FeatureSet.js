// import React from "react";
// import featureImage1 from "../../../media/systemIntegrator/featureImage1.png";
// import featureImage2 from "../../../media/systemIntegrator/featureImage2.png";
// import featureImage3 from "../../../media/systemIntegrator/featureImage3.png";
// import featureImage4 from "../../../media/systemIntegrator/featureImage4.png";
// import { GrCheckboxSelected } from "react-icons/gr";

// function FeatureSet() {
//   return (
//     <div className="container d-flex flex-column align-items-center justify-content-center">
//       <div className="row justify-content-center gap-5 mt-5">
//         {/* First Row */}
//         <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center position-relative mt-0">
//           <div
//             className="card text-center"
//             style={{ width: "400px", border: "1px solid #352885" }}
//           >
//             <div className="card-body">
//               <h5 className="card-title mt-5 fw-bold">
//                 Special title treatment
//               </h5>
//               <p className="card-text fs-6 px-4 py-0">
//                 With supporting text below as a natural lead-in to additional
//                 content.
//               </p>
//               <ul className="list-unstyled text-start px-4 pt-0 pb-4">
//                 <li style={{ display: "flex", alignItems: "center" }}>
//                   <GrCheckboxSelected
//                     style={{ color: "black", marginRight: "8px" }}
//                   />
//                   Proactive Monitoring
//                 </li>
//                 <li style={{ display: "flex", alignItems: "center" }}>
//                   <GrCheckboxSelected
//                     style={{ color: "black", marginRight: "8px" }}
//                   />
//                   24/7 Support
//                 </li>
//                 <li style={{ display: "flex", alignItems: "center" }}>
//                   <GrCheckboxSelected
//                     style={{ color: "black", marginRight: "8px" }}
//                   />
//                   Customized Solutions
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div
//             className="position-absolute"
//             style={{
//               height: "50px",
//               width: "50px",
//               borderRadius: "50%",
//               backgroundColor: "#ffff",
//               border: "1px solid #352885",
//               marginTop: "-25px",
//             }}
//           >
//             <img
//               src={featureImage1}
//               alt="network"
//               style={{ width: "50px", height: "50px", padding: "10px" }}
//             />
//           </div>
//         </div>

//         <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center position-relative mt-0">
//           <div
//             className="card text-center"
//             style={{ width: "400px", border: "1px solid #352885" }}
//           >
//             <div className="card-body">
//               <h5 className="card-title mt-5 fw-bold">IT Audit</h5>
//               <p className="card-text fs-6 px-4 py-0">
//                 Gain deeper insights into your IT environment and identify areas
//                 for improvement.
//               </p>
//               <ul className="list-unstyled text-start px-4 pt-0 pb-4">
//                 <li style={{ display: "flex", alignItems: "center" }}>
//                   <GrCheckboxSelected
//                     style={{ color: "black", marginRight: "8px" }}
//                   />
//                   Comprehensive Assessments
//                 </li>
//                 <li style={{ display: "flex", alignItems: "center" }}>
//                   <GrCheckboxSelected
//                     style={{ color: "black", marginRight: "8px" }}
//                   />
//                   Risk Mitigation
//                 </li>
//                 <li style={{ display: "flex", alignItems: "center" }}>
//                   <GrCheckboxSelected
//                     style={{ color: "black", marginRight: "8px" }}
//                   />
//                   Optimization Opportunities
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div
//             className="position-absolute"
//             style={{
//               height: "50px",
//               width: "50px",
//               borderRadius: "50%",
//               backgroundColor: "#ffff",
//               border: "1px solid #352885",
//               marginTop: "-25px",
//             }}
//           >
//             <img
//               src={featureImage2}
//               alt="network"
//               style={{ width: "50px", height: "50px", padding: "10px" }}
//             />
//           </div>
//         </div>
//       </div>

//       <div
//         className="row justify-content-center gap-5"
//         style={{ marginTop: "70px" }}
//       >
//         {/* Second Row */}
//         <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center position-relative mt-0">
//           <div
//             className="card text-center"
//             style={{ width: "400px", border: "1px solid #352885" }}
//           >
//             <div className="card-body">
//               <h5 className="card-title mt-5 fw-bold">
//                 Forensic Investigation
//               </h5>
//               <p className="card-text fs-6 px-4 py-0">
//                 Protect your business by uncovering and addressing potential
//                 cybersecurity breaches.
//               </p>
//               <ul className="list-unstyled text-start px-4 pt-0 pb-4">
//                 <li style={{ display: "flex", alignItems: "center" }}>
//                   <GrCheckboxSelected
//                     style={{ color: "black", marginRight: "8px" }}
//                   />
//                   Incident Response
//                 </li>
//                 <li style={{ display: "flex", alignItems: "center" }}>
//                   <GrCheckboxSelected
//                     style={{ color: "black", marginRight: "8px" }}
//                   />
//                   Digital Evidence Gathering
//                 </li>
//                 <li style={{ display: "flex", alignItems: "center" }}>
//                   <GrCheckboxSelected
//                     style={{ color: "black", marginRight: "8px" }}
//                   />
//                   Compliance Support
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div
//             className="position-absolute"
//             style={{
//               height: "50px",
//               width: "50px",
//               borderRadius: "50%",
//               backgroundColor: "#ffff",
//               border: "1px solid #352885",
//               marginTop: "-25px",
//             }}
//           >
//             <img
//               src={featureImage3}
//               alt="network"
//               style={{ width: "50px", height: "50px", padding: "10px" }}
//             />
//           </div>
//         </div>

//         <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center position-relative mt-0">
//           <div
//             className="card text-center"
//             style={{ width: "400px", border: "1px solid #352885" }}
//           >
//             <div className="card-body">
//               <h5 className="card-title mt-5 fw-bold">IT Implementation</h5>
//               <p className="card-text fs-6 px-4 py-0">
//                 Seamlessly integrate new technologies into your existing
//                 infrastructure.
//               </p>
//               <ul className="list-unstyled text-start px-4 pt-0 pb-4">
//                 <li style={{ display: "flex", alignItems: "center" }}>
//                   <GrCheckboxSelected
//                     style={{ color: "black", marginRight: "8px" }}
//                   />
//                   Project Planning
//                 </li>
//                 <li style={{ display: "flex", alignItems: "center" }}>
//                   <GrCheckboxSelected
//                     style={{ color: "black", marginRight: "8px" }}
//                   />
//                   System Deployment
//                 </li>
//                 <li style={{ display: "flex", alignItems: "center" }}>
//                   <GrCheckboxSelected
//                     style={{ color: "black", marginRight: "8px" }}
//                   />
//                   Training & Support
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div
//             className="position-absolute"
//             style={{
//               height: "50px",
//               width: "50px",
//               borderRadius: "50%",
//               backgroundColor: "#ffff",
//               border: "1px solid #352885",
//               marginTop: "-25px",
//             }}
//           >
//             <img
//               src={featureImage4}
//               alt="network"
//               style={{ width: "50px", height: "50px", padding: "10px" }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FeatureSet;

import React from "react";
import featuresData from "./featuresData"; 
import FeatureCard from "./FeatureCard";

function FeatureSet() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      {/* First Row */}
      <div className="row justify-content-center gap-5 mt-5">
        {featuresData.slice(0, 2).map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            features={feature.features}
            image={feature.image}
          />
        ))}
      </div>

      {/* Second Row */}
      <div
        className="row justify-content-center gap-5"
        style={{ marginTop: "70px" }}
      >
        {featuresData.slice(2).map((feature, index) => (
          <FeatureCard
            key={index + 2}
            title={feature.title}
            description={feature.description}
            features={feature.features}
            image={feature.image}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureSet;
