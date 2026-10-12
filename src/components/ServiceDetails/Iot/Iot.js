import React from "react";
import { ScrollUp } from "../../../helpers/ScrollUp";
import iotThings from "../../../media/Iot/internet-things.jpg";
import iot from "../../../media/Iot/iot.png";
import iotbanner from "../../../media/Iot/iotbanner.jpg";
import FieldForceDemo from "../../../Shared/FieldForceDemo";

import SEOComponent from "../../common/SEOComponent";
import Footer from "../../Footer/Footer";
import Banner from "../../ReuseableComponent/Banner";
import LeftContentRightImage from "../../ReuseableComponent/Products/LeftContentRightImage";
import RightContentLeftImage from "../../ReuseableComponent/Products/RightContentLeftImage";
import PlcData from "./PlcData";
import Products from "./Products";
import ScadaFeatures from "./ScadaFeatures";
const Iot = () => {
  ScrollUp();
  return (
    <div className="overflow-hidden">
      <SEOComponent keyWords="suffix,IoT,Plc,scada,AI,system automation,factory automation,industry automation,industry automation,condition monitoring system,machine learning,embedded system, suffixit, Rupantar, Rupantar HCM, Rupantar HR, Rupantar Payroll, HCM, HR, Payroll, HCM Rupantar, HR Rupantar, Payroll Rupantar, Provident Fund, Suffix Provident Fund, Suffix PF, Rupantar ERP, REP, ERP Rupantar, Suffix ERP, Suffix E-commerce, E-commerce, Ecommerce, Ecommerce Suffix, Suffix FFMS, FFMS, Field Force, Field Force Management System, Suffix Interconnect Billing, Interconnect Billing, Billing, Suffix Hotel, Suffix Hotel Booking System, Hotel Booking System, Booking System, Domain, Hosting, Domain and Hosting, Web And Ecommerce, Storage, Backup Services, Storage and Backup Services, Cloud, Cloud Hosting, Suffix Bulk SMS, SMS, Bulk SMS, ERP Consulting, Applications, Custom Applications, Mobile, Mobile Applications, Mobile apps, inventory, Inventory Management, Sales Orders, Invoicing, Procurement, Accounting and financial Management, software company in Bangladesh,software development in Bangladesh,Mobile App development company in Bangladesh,Android App Development,iOS App Development,software development company in Bangladesh,website developer company in Bangladesh,create software program,best hosting company in Bangladesh,web hosting company in Bangladesh,domain hosting Bangladesh,seo service provider company in Bangladesh,best website design company in Bangladesh,erp software company in Bangladesh,pos software company in Bangladesh,pos software company in bd,accounting software company in Bangladesh,leading software company in Bangladesh,software company in bangladesh list,top 10 software development company in Bangladesh,Graphics Design,Inventory,Library Software,IT,bd,bangladesh, webmeeting, suffix webmeeting, pos, smart pos, smart pos and billing, pos solution, smart pos and billing system, pos system" />
      <Banner
        title="Industrial Automation & IoT"
        backgroundImg={iotbanner}
        textColor="white"
      />
      <div
        className="container-fluid d-flex align-items-center"
        style={{
          backgroundColor: "white",
          backgroundPosition: "center",
          backgroundRepeat: "none",
          height: "auto",
          minHeight: "100vh",
        }}
      >
        <div
          className="erp-content"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          <div className="d-flex justify-content-around align-items-center row px-5 pt-5 pb-5 py-5 ">
            <div
              className="col-md-5"
              data-aos="fade-right"
              data-aos-offset="-20"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <img
                src={iotThings}
                alt="IOT"
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: "contain",
                  borderRadius: "3%",
                }}
              />
            </div>
            <div
              className="col-md-6 pb-4 "
              data-aos="fade-left"
              data-aos-offset="-20"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <h1
                className="text-left"
                style={{
                  color: "#609dce",

                  fontWeight: "600",
                }}
              >
                IOT(Internet of Things)
              </h1>
              <p className="text-justify" style={{ fontSize: "15px" }}>
                IOT is Internet Of things,The next generation of devices &
                technologies where your devices will be interconnected. Worlds
                devices & technologies expert expect that there will be more
                than 14 billion networked devices by 2021, making it vital to
                adopt new set of technologies and devices. Here's how we can
                help you embrace them. The idea of IOT is latest in modern world
                for smart internet based management and supervision of
                electornics, where legacy device were not well managed and not
                efficient due to lack of controlling, monitoring and management
                mechanism.
              </p>
            </div>
          </div>

          <ScadaFeatures />

          <LeftContentRightImage
            title="PLC Programing Features"
            data={PlcData}
            isVideo
            bgColor="rgb(252, 252, 252)"
            isIcon
            image={"https://www.youtube.com/embed/5Z-Ky4h4tag"}
          />

          <RightContentLeftImage
            title="Our Focusing area & Products"
            image={iot}
            bgColor="rgb(255, 255, 255)"
            data={Products}
            isIcon
          />
          <div className="d-flex justify-content-around align-items-center row px-5 pb-5">
            <div
              className="col-md-5 bg-light
            "
            >
              <iframe
                width="100%"
                height="300"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/r35gYMaj0tM"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <FieldForceDemo />
      <Footer />
    </div>
  );
};

export default Iot;
