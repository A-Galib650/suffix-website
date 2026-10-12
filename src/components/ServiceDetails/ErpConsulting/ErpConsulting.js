import React, { useEffect } from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../../ReuseableComponent/Banner';
import erp from "../../../media/download/Visual data-cuate.svg";
import { ScrollUp } from '../../../helpers/ScrollUp';
import img from '../../../media/download/erpConsalting.jpg';
import FieldForceDemo from '../../../Shared/FieldForceDemo';
import ErpDetails from './ErpDetails';

const ErpConsulting = () => {
    ScrollUp();

    return (

        <div className="overflow-hidden">
            <Banner title="ERP System & Consulting " backgroundImg={img} textColor="white" />
            <div className="container-fluid d-flex align-items-center" style={{ backgroundColor: "white", backgroundPosition: "center", backgroundRepeat: "none", height: "auto" }}>
                <div className="erp-content" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                    <div className="d-flex justify-content-around align-items-center row px-5">
                        <div className="col-md-5" data-aos="fade-right" data-aos-offset="-20" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <img src={erp} alt="ERP" style={{ width: "100%", objectFit: "contain" }} />

                        </div>
                        <div className="col-md-6 pb-4 " data-aos="fade-left" data-aos-offset="-20" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <h1 className="text-left" style={{ color: "#609dce" }}> ERP Implementation</h1>
                            <p className="text-justify" style={{ fontSize: "15px" }}>We provide IT consulting services which includes project management, application development, web design and development, telecom services, Infrastructure and maintenance services.</p>
                        </div>

                    </div>
                </div>

            </div>
            <ErpDetails />
            <FieldForceDemo />
            <Footer />
        </div>
    );
};

export default ErpConsulting;