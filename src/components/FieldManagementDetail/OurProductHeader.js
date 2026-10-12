import field from "../../media/download/field.svg";

const OurProductHeader = ({ title, headerParagraph, hyperRef, img, imgWidth }) => {
  return (
    <div className="OurProductHeader" style={{ margin: "0px" }}>
      <div className="fieldForce-header" style={{ padding: "100px 0px" }}>
        {/* Header Curve Svg */}
        <div class="custom-shape-divider-bottom-1633004606">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ marginBottom: "-1px" }}>
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
        </div>

        {/* Header content */}
        <div className="container-fluid fieldContent ">
          <div className=" row d-flex align-items-center justify-content-evenly">

            <div className="col-lg-6 col-md-6 order-1 order-lg-0">
              <h1 className=" text-light text-center" style={{ fontSize: "35px" }}>{title}</h1>
              <h2 className=" text-light text-center" style={{ fontSize: "25px" }}>{headerParagraph}</h2>
              <a href={`/product/${hyperRef}`}>
                <div className="header-button mt-4" ></div>
              </a>
            </div>
            <div className="col-lg-6 col-md-6">
              <img src={img ? img : field} alt="" style={{ width: imgWidth ? imgWidth : "100%", objectFit: "contain" }}></img>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OurProductHeader
