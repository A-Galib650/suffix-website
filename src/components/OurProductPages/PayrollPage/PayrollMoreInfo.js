import { faClock, faCogs, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const PayrollMoreInfo = () => {
    return (
        <div className="e-commerce-intro" id="e-commerce-init" style={{ paddingTop: "50px", paddingBottom: "100px" }}>
            <div className="container-fluid">
                <h1 style={{ fontSize: "30px", fontWeight: "500", textAlign: "center", paddingBottom: "30px" }}>More <span style={{color:"#609dce"}}>Information</span> </h1>
                <div className="row d-flex justify-content-around align-items-center px-5">

                    <div className="col-md-5" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h1 style={{ fontSize: "28px", fontWeight: "500" }}><span style={{color:"#609dce"}}><FontAwesomeIcon icon={faClock} /> </span> Time & Attendance</h1>
                        <p className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>Employee Tracker Plus, designed to help control labor costs and improve payroll accuracy, is offered as an add-on module to Rupantor ERP’s core application. Customers can expect to save 2-5% of overall payroll costs by investing in this module.</p>

                    </div>
                    <div className="col-md-5" data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h1 style={{ fontSize: "28px", fontWeight: "500" }}><span style={{color:"#609dce"}}><FontAwesomeIcon icon={faCogs} /> </span> How it works ?</h1>
                        <p className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>Employee Tracker Plus improves payroll accuracy by automating the collection of employees’ times, correctly applying company pay policies, delivering time and attendance data to supervisors to allow faster decision-making regarding staff, and by providing access to real-time data to allow decision-making based on accurate labor cost data.</p>

                    </div>


                </div>


            </div>
        </div>
    );
};

export default PayrollMoreInfo;