import React from 'react';
import payroll from "../../../media/payroll/illustration-payroll.svg";

const PayrollIntro = ({ color }) => {
    return (
        <div className="payroll-hr-module d-flex align-items-center" id="payroll-intro" style={{ padding: "0px", background: `${color}`, backgroundPosition: "center", backgroundRepeat: "none", backgroundSize: "cover" ,minHeight:"70vh"}}>
            <div className="container-fluid">
                <div className="row d-flex justify-content-around align-items-center px-5">
                    <div className="col-md-5" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img src={payroll} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />

                    </div>
                    <div className="col-md-5" data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h1 style={{ fontSize: "28px", fontWeight: "500" }}>HR & Payroll Modules</h1>
                        <p className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>The ‘HR & Payroll’ module is an extremely flexible and effective payroll module fully integrated into the Rupantor ERP system. The payroll caters for all the standard earnings, benefits and deductions. Payroll includes user-defined earnings, deductions, and benefits descriptors which allow you to setup your own earnings, deductions and benefits based on your companies’ particular needs. Each of the descriptors can be setup to attract, if necessary and taxes.</p>

                    </div>

                </div>


            </div>

        </div>
    );
};

export default PayrollIntro;