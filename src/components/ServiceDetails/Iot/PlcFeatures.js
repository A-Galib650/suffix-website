import React from "react";

const PlcFeatures = ({ data, image, title, bgColor }) => {
  return (
    <div
      className="CommonIntegrate"
      style={{
        minHeight: "auto",
        padding: "90px 0px",
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
            <h1
              style={{ fontSize: "30px", fontWeight: "600", color: "#609dce" }}
            >
              {title}
            </h1>
            {data.map((item, index) => {
              return (
                <li
                  className="pt-3"
                  style={{
                    fontSize: "15px",
                    textAlign: "left",
                    paddingLeft: "20px",
                  }}
                  key={index}
                >
                  {item?.list || item}
                </li>
              );
            })}
          </div>

          <div
            className="col-md-5"
            data-aos="fade-left"
            data-aos-offset="-20"
            data-aos-easing="ease-in-sine"
          >
            <div>
              <iframe
                title={title}
                className="w-100 mt-5 mt-md-0"
                height="315"
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlcFeatures;
