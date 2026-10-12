import React from "react";

const BannerWithTittleImage = ({
  title,
  backgroundImg,
  titleColor,
  backgroundColor,
}) => {
  const containerStyle = {
    backgroundImage: backgroundColor
      ? backgroundColor
      : `url(${backgroundImg})`, // Use gradient or image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: titleColor,
    height: "100vh",
  };

  return (
    <div className="container-fluid" style={containerStyle}>
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-4" style={{ color: titleColor }}>
            {title}
          </h1>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
         
          <img
            src={backgroundImg}
            className="img-fluid"
            alt={title}
            style={{
              height: "90%", // Set your desired height
              // width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerWithTittleImage;