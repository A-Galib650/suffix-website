import React from "react";
import { ScrollUp } from "../../../helpers/ScrollUp";
import img from "../../../media/ITInfrastructure/itInfrastructureBannerImg.png";
import visionimg from "../../../media/ITInfrastructure/visionImge.png";
import Banner from "../../ReuseableComponent/Banner";
import ServiceHeader from "./ServiceHeader";
import Services from "./Services";
import CommitmentSuccess from "../../ReuseableComponent/CommitmentSuccess";
import Footer from "../../Footer/Footer";
import SEOComponent from "../../common/SEOComponent";




const ITInfrastructure = () => {
  ScrollUp();
  return (
    
    <div className="overflow-hidden">
         <SEOComponent keyWords="suffix, suffixit, Rupantar, Rupantar HCM, Rupantar HR, Rupantar Payroll, HCM, HR, Payroll, HCM Rupantar, HR Rupantar, Payroll Rupantar, Provident Fund, Suffix Provident Fund, Suffix PF, Rupantar ERP, REP, ERP Rupantar, Suffix ERP, Suffix E-commerce, E-commerce, Ecommerce, Ecommerce Suffix, Suffix FFMS, FFMS, Field Force, Field Force Management System, Suffix Interconnect Billing, Interconnect Billing, Billing, Suffix Hotel, Suffix Hotel Booking System, Hotel Booking System, Booking System, Domain, Hosting, Domain and Hosting, Web And Ecommerce, Storage, Backup Services, Storage and Backup Services, Cloud, Cloud Hosting, Suffix Bulk SMS, SMS, Bulk SMS, ERP Consulting, Applications, Custom Applications, Mobile, Mobile Applications, Mobile apps, inventory, Inventory Management, Sales Orders, Invoicing, Procurement, Accounting and financial Management, software company in Bangladesh,software development in Bangladesh,Mobile App development company in Bangladesh,Android App Development,iOS App Development,software development company in Bangladesh,website developer company in Bangladesh,create software program,best hosting company in Bangladesh,web hosting company in Bangladesh,domain hosting Bangladesh,seo service provider company in Bangladesh,best website design company in Bangladesh,erp software company in Bangladesh,pos software company in Bangladesh,pos software company in bd,accounting software company in Bangladesh,leading software company in Bangladesh,software company in bangladesh list,top 10 software development company in Bangladesh,Graphics Design,Inventory,Library Software,IT,bd,bangladesh, webmeeting, suffix webmeeting, pos, smart pos, smart pos and billing, pos solution, smart pos and billing system, pos system" />
      <Banner title="IT Infrastructure" backgroundImg={img} textColor="white" />

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
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="d-flex justify-content-around align-items-center row px-5" >
            <div
              className="col-md-6 pb-4 "
              data-aos="fade-right"
              data-aos-offset="-20"                              
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <h1 className="text-left" style={{ color: "#609dce" }}>
               
              </h1>

              <p className="text-justify" style={{ fontSize: "15px" }}>
              In today's digital era, a robust IT infrastructure forms the
                backbone of successful enterprises. At Suffix IT Limited,we
                specialize in designing, implementing, and managing
                comprehensive IT infrastructure solutions that drive efficiency,
                scalability, and security
              </p>
            </div>
            <div
              className="col-md-5"
              data-aos="fade-left"
              data-aos-offset="-20"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <img src={visionimg} alt="custom-app"
               style={{ width: "100%", objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </div>
      
      <ServiceHeader/>
      <Services/>
     
      <CommitmentSuccess/>
      <Footer />

    </div>
  );
};

export default ITInfrastructure;
