import React from "react";
import { ScrollUp } from "../../helpers/ScrollUp";
import cover from "../../media/topTenSoftwareCompany/banner.jpg";
import brainStationImg from "../../media/topTenSoftwareCompany/brain-station-23-ltd.jpg";
import datasoft from "../../media/topTenSoftwareCompany/datasoft.jpg";
import kaz from "../../media/topTenSoftwareCompany/kaz.jpg";
import leadSoftImg from "../../media/topTenSoftwareCompany/leadsoft.jpg";
import nasceniaImg from "../../media/topTenSoftwareCompany/nascenia.jpg";
import reve from "../../media/topTenSoftwareCompany/reve.jpg";
import southtech from "../../media/topTenSoftwareCompany/southtech.jpg";
import spectrumImg from "../../media/topTenSoftwareCompany/spectrum.jpg";
import suffixIT from "../../media/topTenSoftwareCompany/suffixIT.png";
import tigerit from "../../media/topTenSoftwareCompany/tigerit.jpg";
import FieldForceDemo from "../../Shared/FieldForceDemo";
import SEOComponent from "../common/SEOComponent";
import Footer from "../Footer/Footer";
import {
  bdtask,
  brainStation,
  dataSoft,
  kazSoftware,
  leadSoft,
  nascenia,
  reveSystems,
  southtechGroup,
  spectrum,
  tigerIt,
} from "./CompaniesListData";
import TopCompainesRightContentLeftImage from "./TopCompainesRightContentLeftImage";
import TopCompaniesleftContentRightImage from "./TopCompaniesleftContentRightImage";
const TopSoftwareCompaniesList = () => {
  const c = console.log.bind(document);

  c(brainStation.title);

  ScrollUp();
  return (
    <div className="overflow-hidden">
      <SEOComponent keyWords="suffix,IoT,Plc,scada,AI,system automation,factory automation,industry automation,industry automation,condition monitoring system,machine learning,embedded system, suffixit, Rupantar, Rupantar HCM, Rupantar HR, Rupantar Payroll, HCM, HR, Payroll, HCM Rupantar, HR Rupantar, Payroll Rupantar, Provident Fund, Suffix Provident Fund, Suffix PF, Rupantar ERP, REP, ERP Rupantar, Suffix ERP, Suffix E-commerce, E-commerce, Ecommerce, Ecommerce Suffix, Suffix FFMS, FFMS, Field Force, Field Force Management System, Suffix Interconnect Billing, Interconnect Billing, Billing, Suffix Hotel, Suffix Hotel Booking System, Hotel Booking System, Booking System, Domain, Hosting, Domain and Hosting, Web And Ecommerce, Storage, Backup Services, Storage and Backup Services, Cloud, Cloud Hosting, Suffix Bulk SMS, SMS, Bulk SMS, ERP Consulting, Applications, Custom Applications, Mobile, Mobile Applications, Mobile apps, inventory, Inventory Management, Sales Orders, Invoicing, Procurement, Accounting and financial Management, software company in Bangladesh,software development in Bangladesh,Mobile App development company in Bangladesh,Android App Development,iOS App Development,software development company in Bangladesh,website developer company in Bangladesh,create software program,best hosting company in Bangladesh,web hosting company in Bangladesh,domain hosting Bangladesh,seo service provider company in Bangladesh,best website design company in Bangladesh,erp software company in Bangladesh,pos software company in Bangladesh,pos software company in bd,accounting software company in Bangladesh,leading software company in Bangladesh,software company in bangladesh list,top 10 software development company in Bangladesh,Graphics Design,Inventory,Library Software,IT,bd,bangladesh, webmeeting, suffix webmeeting, pos, smart pos, smart pos and billing, pos solution, smart pos and billing system, pos system" />

      <div
        className="d-flex justify-content-around align-items-center row px-5 pb-5"
        style={{
          backgroundColor: "white",
          backgroundPosition: "center",
          backgroundRepeat: "none",
          height: "auto",
          paddingTop: "10vh",
        }}
      >
        <div
          className="col-md-8 
          "
          style={{ textAlign: "center" }}
        >
          <img src={cover} alt="cover" style={{ width: "80%" }} />
          <h1
            style={{
              color: "#609dce",

              fontWeight: "600",
            }}
          >
            Top 10 Leading Software Companies in Bangladesh
          </h1>
          <p
            className="text-justify"
            style={{ fontSize: "15px", textAlign: "justify" }}
          >
            The software company has been playing an easy lifestyle. It creates
            a huge impact on the economy and social life. New Technology and
            innovation make life easier and save money and time. Now I am
            creating a list of the top 10 software companies in Bangladesh. My
            focus area is a new technology, innovation, quality software, and
            after-sales service. Given below, is the list of the top 10 Software
            companies in Bangladesh. Read through the article to know in detail-
          </p>
        </div>
      </div>

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
          <TopCompainesRightContentLeftImage
            image={suffixIT}
            data={bdtask?.list}
            passageData={bdtask?.para}
            title={bdtask?.title}
          />
          <TopCompaniesleftContentRightImage
            image={leadSoftImg}
            data={brainStation?.list}
            passageData={brainStation?.para}
            title={brainStation?.title}
          />
          <TopCompainesRightContentLeftImage
            image={datasoft}
            data={dataSoft?.list}
            passageData={dataSoft?.para}
            title={dataSoft?.title}
          />
          <TopCompaniesleftContentRightImage
            image={brainStationImg}
            data={tigerIt?.list}
            passageData={tigerIt?.para}
            title={tigerIt?.title}
          />
          <TopCompainesRightContentLeftImage
            image={tigerit}
            data={leadSoft?.list}
            passageData={leadSoft?.para}
            title={leadSoft?.title}
          />
          <TopCompaniesleftContentRightImage
            image={kaz}
            data={reveSystems?.list}
            passageData={reveSystems?.para}
            title={reveSystems?.title}
          />
          <TopCompainesRightContentLeftImage
            image={southtech}
            data={southtechGroup?.list}
            passageData={southtechGroup?.para}
            title={southtechGroup?.title}
          />
          <TopCompaniesleftContentRightImage
            image={spectrumImg}
            data={spectrum?.list}
            passageData={spectrum?.para}
            title={spectrum?.title}
          />
          <TopCompainesRightContentLeftImage
            image={reve}
            data={kazSoftware?.list}
            passageData={kazSoftware?.para}
            title={kazSoftware?.title}
          />
          <TopCompaniesleftContentRightImage
            image={nasceniaImg}
            data={nascenia?.list}
            passageData={nascenia?.para}
            title={nascenia?.title}
          />
        </div>
      </div>
      <FieldForceDemo />
      <Footer />
    </div>
  );
};

export default TopSoftwareCompaniesList;
