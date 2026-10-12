import React from "react";
import { ScrollUp } from "../../../helpers/ScrollUp";
import Banner from "../../ReuseableComponent/Banner";
import bannerImage from "../../../media/powerCooling/bannerImage.png";
import preformanceImage from "../../../media/powerCooling/preformanceImage.png";
import energy from "../../../media/powerCooling/energy.png";
import cooling from "../../../media/powerCooling/cooling.png";
import power from "../../../media/powerCooling/power.png";
import { PowerCoolHeader } from "./PowerCoolHeader";
import FutureProof from "./FutureProof";
import CommitmentSuccess from "../../ReuseableComponent/CommitmentSuccess";
import Footer from "../../Footer/Footer";
import SEOComponent from "../../common/SEOComponent";
const PowerCooling = () => {
  ScrollUp();
  return (
    <div className="overflow-hidden">
      <SEOComponent keyWords="suffix, suffixit, Rupantar, Rupantar HCM, Rupantar HR, Rupantar Payroll, HCM, HR, Payroll, HCM Rupantar, HR Rupantar, Payroll Rupantar, Provident Fund, Suffix Provident Fund, Suffix PF, Rupantar ERP, REP, ERP Rupantar, Suffix ERP, Suffix E-commerce, E-commerce, Ecommerce, Ecommerce Suffix, Suffix FFMS, FFMS, Field Force, Field Force Management System, Suffix Interconnect Billing, Interconnect Billing, Billing, Suffix Hotel, Suffix Hotel Booking System, Hotel Booking System, Booking System, Domain, Hosting, Domain and Hosting, Web And Ecommerce, Storage, Backup Services, Storage and Backup Services, Cloud, Cloud Hosting, Suffix Bulk SMS, SMS, Bulk SMS, ERP Consulting, Applications, Custom Applications, Mobile, Mobile Applications, Mobile apps, inventory, Inventory Management, Sales Orders, Invoicing, Procurement, Accounting and financial Management, software company in Bangladesh,software development in Bangladesh,Mobile App development company in Bangladesh,Android App Development,iOS App Development,software development company in Bangladesh,website developer company in Bangladesh,create software program,best hosting company in Bangladesh,web hosting company in Bangladesh,domain hosting Bangladesh,seo service provider company in Bangladesh,best website design company in Bangladesh,erp software company in Bangladesh,pos software company in Bangladesh,pos software company in bd,accounting software company in Bangladesh,leading software company in Bangladesh,software company in bangladesh list,top 10 software development company in Bangladesh,Graphics Design,Inventory,Library Software,IT,bd,bangladesh, webmeeting, suffix webmeeting, pos, smart pos, smart pos and billing, pos solution, smart pos and billing system, pos system" />
      <Banner
        title="Data Center Power & Cooling Built for Reliability and Efficiency"
        backgroundImg={bannerImage}
        textColor="white"
      />

      <div
        className="container-fluid d-flex align-items-center mt-40"
        style={{
          backgroundColor: "white",
          backgroundPosition: "center",
          backgroundRepeat: "none",
          height: "auto",

        }}
      >
        <div
          className="erp-content"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          <div className="d-flex justify-content-around align-items-center row px-5">
            <div
              className="col-md-5 "
              data-aos="fade-right"
              data-aos-offset="-20"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <img
                src={preformanceImage}
                alt="ERP"
                style={{ width: "100%", objectFit: "contain" }}
              />
            </div>
            <section className="d-md-none ">
              <p className="my-4" style={{ fontSize: "18px", fontWeight: "bold", textAlign: "center" }}>
                Our Power & Cooling Solutions
              </p>

              <div className="d-flex flex-column align-items-center my-4">
                <img src={power} alt="" className=" w-75" />
                <div>
                  <ul className="text-left">
                    <li style={{ fontSize: "15px" }} className="d-flex align-items-center"><i class="fa-solid fa-circle m-1 text-warning"></i><span> Uninterruptible Power Supply (UPS)</span> </li>
                    <li style={{ fontSize: "15px" }} className="d-flex align-items-center"><i class="fa-solid fa-circle m-1 text-warning"></i><span> Power Distribution Units (PDU)</span> </li>
                    <li style={{ fontSize: "15px" }} className="d-flex align-items-center"><i class="fa-solid fa-circle m-1 text-warning"></i><span> Generator Backup Systems</span></li>
                    <li style={{ fontSize: "15px" }} className="d-flex align-items-center"><i class="fa-solid fa-circle m-1 text-warning"></i><span> Power Monitoring and Management</span></li>
                  </ul>
                </div>
              </div>

              <div className="d-flex flex-column align-items-center my-4 ">
                <img src={cooling} alt="" className=" w-75" />
                <div>
                  <ul className="text-left">
                    <li style={{ fontSize: "15px" }} className="d-flex align-items-center"><i class="fa-solid fa-circle m-1 text-info"></i><span> Precision Air Conditioning</span> </li>
                    <li style={{ fontSize: "15px" }} className="d-flex align-items-center"><i class="fa-solid fa-circle m-1 text-info"></i><span> In-Row Cooling</span> </li>
                    <li style={{ fontSize: "15px" }} className="d-flex align-items-center"><i class="fa-solid fa-circle m-1 text-info"></i><span> Chilled Beam and Radiant Cooling</span></li>
                    <li style={{ fontSize: "15px" }} className="d-flex align-items-center"><i class="fa-solid fa-circle m-1 text-info"></i><span> Hot Aisle/Cold Aisle Containment</span></li>
                  </ul>
                </div>
              </div>

              <div className="d-flex flex-column align-items-center my-4 ">
                <img src={energy} alt="" className=" w-75" />
                <div>
                  <ul className="text-left">
                    <li style={{ fontSize: "15px" }} className="d-flex align-items-center"><i class="fa-solid fa-circle m-1 text-danger"></i><span> Energy-Efficient Cooling Systems</span> </li>
                    <li style={{ fontSize: "15px" }} className="d-flex align-items-center"><i class="fa-solid fa-circle m-1 text-danger"></i><span> Green Data Center Solutions</span> </li>
                    <li style={{ fontSize: "15px" }} className="d-flex align-items-center"><i class="fa-solid fa-circle m-1 text-danger"></i><span> Thermal Energy Storage</span></li>

                  </ul>
                </div>
              </div>
            </section>

            <div
              className="col-md-6 pb-4 "
              data-aos="fade-left"
              data-aos-offset="-20"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <h1 className="text-left" style={{ color: "#609dce" }}>
                Ensuring Uninterrupted Performance and Reliability
              </h1>
              <p className="text-justify" style={{ fontSize: "15px" }}>
                In today’s digital landscape, data centers are the backbone of
                business operations, housing critical infrastructure and
                sensitive data. Ensuring optimal power and cooling is essential
                to maintaining the reliability, efficiency, and performance of
                your data center. At Suffix IT Limited, we specialize in
                providing top-tier power and cooling solutions designed to
                maximize uptime, minimize operational costs, and enhance energy
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block ">
        <PowerCoolHeader />
      </div>

      <FutureProof />
      <CommitmentSuccess />
      <Footer />


    </div>
  );
};

export default PowerCooling;
