import React from "react";

const ImageComponent = ({ image, altText, style }) => {
  return (
    <div
      // className="col-md-2 col-sm-3 col-4 d-flex justify-content-center d-none d-md-flex" 
      className="col-md-2 col-sm-3 col-4 d-flex justify-content-center d-none d-lg-flex" 
      style={{
        position: "absolute",
        top: "15%",
        left: "25%",
        transform: "translate(-50%, -50%)",
        zIndex: "3",
        ...style, // Allow custom styles to be merged
      }}
    >
      <img
        src={image}
        alt={altText}
        className="img-fluid"
        style={{
          maxHeight: "100px", 
          width: "auto", // Maintain aspect ratio
        }}
      />
    </div>
  );
};

export default ImageComponent;
