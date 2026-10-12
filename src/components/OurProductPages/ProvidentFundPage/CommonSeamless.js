import React from 'react';

const CommonSeamless = ({ color = "#FFFF", alignment = "", description = "", title = "", img = "" }) => {
    return (
        <>
            <div className="payroll-hr-module d-flex align-items-center" id="payroll-intro" style={{ padding: "0px", background: `${color}`, backgroundPosition: "center", backgroundRepeat: "none", backgroundSize: "cover", minHeight: "70vh" }}>
                <div className="container-fluid">
                    {
                        alignment == "left" ? <div className="row d-flex justify-content-around align-items-center px-5">
                            <div className="col-md-5" data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <img src={img} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />

                            </div>
                            <div className="col-md-5" data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <h1 style={{ fontSize: "28px", fontWeight: "500" }}>{title}</h1>
                                <p className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>{description}</p>

                            </div>

                        </div>
                            :
                            <div className="row d-flex justify-content-around align-items-center px-5">
                                <div className="col-md-5"
                                    data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <h1 style={{ fontSize: "28px", fontWeight: "500" }}>{title}</h1>
                                    <p className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>{description}</p>

                                </div>
                                <div className="col-md-5"

                                    data-aos="fade-left"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img src={img} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />

                                </div>


                            </div>
                    }


                </div>

            </div>

        </>
    );
};

export default CommonSeamless;