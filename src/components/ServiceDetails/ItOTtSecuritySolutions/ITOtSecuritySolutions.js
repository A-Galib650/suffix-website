import React from "react";
import { ScrollUp } from "../../../helpers/ScrollUp";
import Banner from "../../ReuseableComponent/Banner";
import bannerImage from "../../../media/iT&OTSecuritySolutions/banner.png";
import protectingImage from "../../../media/iT&OTSecuritySolutions/protectingImage.png";
import { FocusAreasHeader } from "./FocusAreasHeader";
import KeyFocusAreas from "./KeyFocusAreas";
import ExpertSection from "./ExpertSection";
import CommitmentSuccess from "../../ReuseableComponent/CommitmentSuccess";
import Footer from "../../Footer/Footer";
import SEOComponent from "../../common/SEOComponent";
const ITOtSecuritySolutions = () => {
  ScrollUp();
  return (
    <div className="overflow-hidden">
      <SEOComponent keyWords="suffix, suffixit, Rupantar, Rupantar HCM, Rupantar HR, Rupantar Payroll, HCM, HR, Payroll, HCM Rupantar, HR Rupantar, Payroll Rupantar, Provident Fund, Suffix Provident Fund, Suffix PF, Rupantar ERP, REP, ERP Rupantar, Suffix ERP, Suffix E-commerce, E-commerce, Ecommerce, Ecommerce Suffix, Suffix FFMS, FFMS, Field Force, Field Force Management System, Suffix Interconnect Billing, Interconnect Billing, Billing, Suffix Hotel, Suffix Hotel Booking System, Hotel Booking System, Booking System, Domain, Hosting, Domain and Hosting, Web And Ecommerce, Storage, Backup Services, Storage and Backup Services, Cloud, Cloud Hosting, Suffix Bulk SMS, SMS, Bulk SMS, ERP Consulting, Applications, Custom Applications, Mobile, Mobile Applications, Mobile apps, inventory, Inventory Management, Sales Orders, Invoicing, Procurement, Accounting and financial Management, software company in Bangladesh,software development in Bangladesh,Mobile App development company in Bangladesh,Android App Development,iOS App Development,software development company in Bangladesh,website developer company in Bangladesh,create software program,best hosting company in Bangladesh,web hosting company in Bangladesh,domain hosting Bangladesh,seo service provider company in Bangladesh,best website design company in Bangladesh,erp software company in Bangladesh,pos software company in Bangladesh,pos software company in bd,accounting software company in Bangladesh,leading software company in Bangladesh,software company in bangladesh list,top 10 software development company in Bangladesh,Graphics Design,Inventory,Library Software,IT,bd,bangladesh, webmeeting, suffix webmeeting, pos, smart pos, smart pos and billing, pos solution, smart pos and billing system, pos system" />
      <Banner
        title="Comprehensive IT & OT Security Solutions"
        backgroundImg={bannerImage}
        textColor="white"
      />
      <div
        className="container-fluid d-flex align-items-center"
        style={{
          backgroundColor: "white",
          backgroundPosition: "center",
          backgroundRepeat: "none",
          height: "auto",
          marginTop:"80px"
        }}
      >
        <div
          className="erp-content"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          <div className="d-flex justify-content-around align-items-center row px-5">
            <div
              className="col-md-5"
              data-aos="fade-right"
              data-aos-offset="-20"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <img
                src={protectingImage}
                alt="ERP"
                style={{ width: "100%", objectFit: "contain" }}
              />
            </div>
            <div
              className="col-md-6 pb-4 "
              data-aos="fade-left"
              data-aos-offset="-20"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <h1 className="text-left" style={{ color: "#609dce" }}>
                Protecting Your Digital and Operational Assets
              </h1>
              <p className="text-justify" style={{ fontSize: "15px" }}>
                In an era where cyber threats are ever-evolving, ensuring robust
                security across your IT and OT systems is no longer optional.
                it’s essential. At Suffix IT Limited, we provide comprehensive
                security solutions to safeguard your digital infrastructure and
                operational technologies, enabling you to operate confidently
                and securely.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop:"100px"}}>

      <FocusAreasHeader/>
      </div>
      <KeyFocusAreas/>
      <ExpertSection/>
      <CommitmentSuccess/>
      <Footer />
    </div>
  );
};

export default ITOtSecuritySolutions;
