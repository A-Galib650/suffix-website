import React from 'react';
import install from "../../../media//hospitalmanagement/install-support.png";
import integration from "../../../media/hospitalmanagement/module-integration.png";
import security from "../../../media/hospitalmanagement/strong-security.png";
import trouble from "../../../media/hospitalmanagement/trouble-offline.png";

const ReasonHospitalManagement = () => {
    return (
        <div className="hospital-management-reason container" style={{ paddingTop: "50px" }}>
            <h1 className="text-center" style={{ fontSize: "30px", fontWeight: "500", color: "#525252" }}>Why Suffix Hospital Management System</h1>
            <div className="row d-flex justify-content-around hospital-management-reason-content text-center px-5" style={{ paddingTop: "50px", paddingBottom: "50px" }} data-aos="fade-up"
                data-aos-duration="3000">
                <div className="col-md-3 col-xs-12 col-sm-6 d-flex flex-column align-items-center">
                    <img src={install} alt="" style={{ width: '50%', height: "50%", objectFit: "contain" }} />
                    <h2 className="pt-4" style={{ fontSize: '16px' }}>Installation, configuration, and support</h2>

                </div>
                <div className="col-md-3 col-xs-12 col-sm-6 d-flex flex-column align-items-center ">
                    <img src={integration} alt="" style={{ width: '50%', height: "50%", objectFit: "contain" }} />
                    <h2 className="pt-4" style={{ fontSize: '16px' }}>Modules and Integrations</h2>

                </div>
                <div className="col-md-3 col-xs-12 col-sm-6  d-flex flex-column align-items-center ">
                    <img src={security} alt="" style={{ width: '50%', height: "50%", objectFit: "contain" }} />
                    <h2 className="pt-4" style={{ fontSize: '16px' }}>High Security Ensure</h2>

                </div>
                <div className="col-md-3 col-xs-12 col-sm-6 d-flex flex-column align-items-center ">
                    <img src={trouble} alt="" style={{ width: '50%', height: "50%", objectFit: "contain" }} />
                    <h2 className="pt-4" style={{ fontSize: '16px' }}>Link troubles? Using Module Offline</h2>

                </div>

            </div>

        </div>
    );
};

export default ReasonHospitalManagement;