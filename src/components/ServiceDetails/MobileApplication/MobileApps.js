import React from "react";
import { ScrollUp } from "../../../helpers/ScrollUp";
import mobileApps from "../../../media/download/App installation-cuate.svg";
import img from "../../../media/download/mobile-apps-in-business-copy-5.jpg";
import tech from "../../../media/mobileApps/Binary code-pana.svg";
import offerService from "../../../media/mobileApps/Mobile testing-cuate.svg";
import serve from "../../../media/mobileApps/Mobile testing-pana.svg";
import FieldForceDemo from "../../../Shared/FieldForceDemo";
import Footer from "../../Footer/Footer";
import Banner from "../../ReuseableComponent/Banner";
import LeftContentRightImage from "../../ReuseableComponent/Products/LeftContentRightImage";
import RightContentLeftImage from "../../ReuseableComponent/Products/RightContentLeftImage";
import serveData from "../MobileApplication/OfferServiceData";
import offerServiceData from "../MobileApplication/ServeIndustriesData";
import technologyData from "../MobileApplication/UsedTechnology";

const MobileApps = () => {
  ScrollUp();
  return (
    <div className="overflow-hidden">
      <Banner
        title="Mobile Application"
        backgroundImg={img}
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
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="d-flex justify-content-around align-items-start row px-5">
            <div
              className="col-md-5"
              data-aos="fade-right"
              data-aos-offset="-20"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <img
                src={mobileApps}
                alt="custom-app"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div
              className="col-md-6 pb-4 pt-5"
              data-aos="fade-left"
              data-aos-offset="-20"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <h1
                className="text-left"
                style={{
                  color: "#609dce",
                  fontSize: "30px",
                  fontWeight: "600",
                }}
              >
                Mobile Application
              </h1>
              <p className="text-justify" style={{ fontSize: "15px" }}>
                We know how to transfer our solutions into the result of your
                business success, thanks to our extensive portfolio of
                industry-leading mobile application development services. We
                develop mobile apps that are cross-platform and responsive.
                Where others fail, we succeed in creating the most appealing
                user interface and secure backend. Suffix IT offers cutting-edge
                mobile app development to a wide range of industries and client.
                <br />
                Our developers create enterprise-grade mobile apps that are
                tailored to your company's needs. We build a consistent digital
                presence and improve consumer engagement for you by integrating
                stylish and smart notification features and safe payment
                gateways. Our team has already created specialized mobile apps
                for the consumer product industries. .
              </p>
            </div>
          </div>
        </div>
      </div>
      <LeftContentRightImage
        title="The Service We Offer"
        data={offerServiceData}
        bgColor="rgb(252, 252, 252)"
        image={offerService}
      />
      <RightContentLeftImage
        title="Industries We Serve "
        image={serve}
        bgColor="rgb(255, 255, 255)"
        data={serveData}
      />
      <LeftContentRightImage
        title="The Technologies We Use"
        data={technologyData}
        bgColor="rgb(252, 252, 252)"
        image={tech}
      />
      <FieldForceDemo />
      <Footer />
    </div>
  );
};

export default MobileApps;
