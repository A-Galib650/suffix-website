import React from 'react';
import data from './PayrollBenefitsData';
import benefitsImg from '../../../media/payroll/Audit-rafiki.svg';

const PayRollBenefits = () => {
    return (
        <div className="payroll-benefits" style={{ padding: "100px 0px"}}>
              <div className="container-fluid">
            <div className="row d-flex justify-content-around align-items-center px-5">

            <div className="col-md-5" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <img src={benefitsImg} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />

                </div>

                <div className="col-md-5" data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h1 style={{ fontSize: "28px", fontWeight: "500" }}>Benefits of HR & Payroll</h1>
                    {
                        data.map((item, index) => {
                            return (
                                <li className="pt-3" style={{ fontSize: "15px", textAlign: "left" ,paddingLeft: "20px"}} key={index}>{item?.list}</li>
                            )
                        })
                    }

                </div>
               

            </div>
            </div>

        </div>

   
    );
};

export default PayRollBenefits;