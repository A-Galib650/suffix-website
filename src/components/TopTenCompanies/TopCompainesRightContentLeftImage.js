import React from "react";

const TopCompainesRightContentLeftImage = ({
  data,
  image,
  passageData = "",
  title = "",
  // bgColor,
}) => {
  return (
    <div className="d-flex justify-content-around align-items-center row px-5 pt-5 pb-5 py-5 ">
      <div
        className="col-md-5"
        data-aos="fade-right"
        data-aos-offset="-20"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <img
          src={image}
          alt="IOT"
          style={{
            width: "100%",
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
          {title}
        </h1>
        <p
          className="text-justify"
          style={{ fontSize: "15px", textAlign: "justify" }}
        >
          {passageData}
          {data?.map((item, index) => {
            return (
              <li
                key={index}
                className="pt-3"
                style={{
                  fontSize: "15px",
                  textAlign: "left",

                  listStyle: "none",
                }}
              >
                <i class="fas fa-check-circle  #0072bc !important text-primary py-1 px-2"></i>
                <span style={{ fontWeight: "bold" }}>{item?.list}</span>
              </li>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default TopCompainesRightContentLeftImage;
