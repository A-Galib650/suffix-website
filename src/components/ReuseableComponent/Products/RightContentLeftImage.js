import React from "react";

const RightContentLeftImage = ({
  data,
  image,
  title,
  bgColor,
  passageData = "",
  isIcon = false,
}) => {
  return (
    <div
      className="CommonIntegrate"
      style={{
        minHeight: "auto",
        padding: "70px 0px",
        background: `${bgColor}`,
        backgroundPosition: "center",
        backgroundRepeat: "none",
        backgroundSize: "cover",
      }}
    >
      <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-center px-5">
          <div
            className="col-md-5"
            data-aos="fade-right"
            data-aos-offset="-20"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={image}
              alt="interconnect billing"
              style={{ width: "100%", objectFit: "contain" }}
            />
          </div>
          <div
            className="col-md-5"
            data-aos="fade-left"
            data-aos-offset="-20"
            data-aos-easing="ease-in-sine"
          >
            <h1
              style={{ fontSize: "30px", fontWeight: "600", color: "#609dce" }}
            >
              {title}
            </h1>
            {passageData ? (
              <p>{passageData}</p>
            ) : (
              data.map((item, index) => {
                return (
                  <li
                    className="pt-3"
                    style={{
                      fontSize: "15px",
                      textAlign: "left",
                      paddingLeft: "20px",
                      listStyle: isIcon ? "none" : "",
                    }}
                    key={index}
                  >
                    {isIcon && (
                      <i class="fas fa-check-circle  #0072bc !important text-primary py-1 px-2"></i>
                    )}
                    {item?.list || item}{" "}
                  </li>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContentLeftImage;
