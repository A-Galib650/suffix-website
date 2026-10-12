import React from 'react';
import user from '../../../media/hospitalmanagement/user-interface.png';
import sideImage from '../../../media/hospitalmanagement/Medicine-amico.svg';

const HospitalManagementUsability = () => {
    return (
        <div className="hospital-management-usability" style={{ backgroundColor: "rgb(252, 252, 252)", backgroundPosition: "center", backgroundRepeat: "none", height: "auto", padding: "150px 0px" }}>
            <div className=" container">
                <div className="row d-flex justify-content-around px-5" >
                    <div className="col-md-5 d-flex align-items-center" data-aos="fade-right"
                        data-aos-duration="3000">
                        <img src={sideImage} alt="" style={{ width: '100%', objectFit: "contain" }} />
                    </div>
                    <div className="col-md-5  text-justify" data-aos="fade-left"
                        data-aos-duration="3000">
                        <div className="d-flex">
                            <img src={user} alt="" style={{ width: '55px', height: '55px', objectFit: "contain" }} />
                            <h1 className="px-2" style={{ fontWeight: "500", fontSize: "20px" }}>Usability The Movement and User Interface.</h1>
                        </div>
                        <div className="pt-3 ">
                            <p style={{ fontSize: "14px" }}>
                                Suffix Hospital Management System has a user interface that is very easy and quick to use, and that suits different users from different IT backgrounds. It's easy to navigate with only a few clicks to the appropriate pages, using Information Cards to show priority-based information and highlight the important details.<br />

                                It has several data analysis tools to view results over their clinic visits as growth map, BMI map, and very useful patient tracking time.<br />

                                Follow-up description on drugs. It is one of doctors 'most popular and featured devices to keep track of patient medicines.
                            </p>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    );
};

export default HospitalManagementUsability;