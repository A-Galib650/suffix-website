
import React from "react";

const CardComponent = ({ image, title, description }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <div className="card border-0" style={{ maxWidth: "300px", width: "100%" }}>
        <div className="card-body text-center">
          {/* Card Image */}
          <div
            className="mb-3 mx-auto shadow"
            style={{
              height: "80px",
              width: "80px",
              borderRadius: "10%",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={image}
              alt={title}
              className="img-fluid"
              style={{
                padding: "15px",
                objectFit: "cover",
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />
          </div>

          {/* Text Content */}
          <h2 className="card-title fw-bold fs-4 mt-4">{title}</h2>
          <p
            className="card-text text-muted mt-3"
            style={{
              height: "auto",
              width: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
