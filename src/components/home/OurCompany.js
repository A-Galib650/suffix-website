import software from "../../media/company/software.svg";
import team from "../../media/company/team.svg";
import web from "../../media/company/web.svg";
const OurCompany = () => {
  return (
    <div
      className="d-flex align-items-center"
      style={{
        backgroundColor: "rgb(252, 252, 252)",
        backgroundPosition: "center",
        backgroundRepeat: "none",
        paddingTop: "50px",
        paddingBottom: "0px",
        minHeight: "auto",
      }}
    >
      <div className="container-fluid" id="our-company" >
        <div className="ourProductsTitle text-center ">
          <h1 style={{ color: "#525252", fontSize: "28px", paddingBottom: "" }}>
            <strong>
              Our <span style={{ color: "#609dce" }}>Company</span>
            </strong>
          </h1>
          <p className="text-secondary" style={{ fontSize: "18px" }}>
            At Suffix IT, we develop innovative and creative products and
            services that provide total <br /> communication and information
            solutions. Satisfied clients around the globe bear <br />
            testimony to the quality of our work.
          </p>
        </div>
        <div
          className="ourCompanyMainContent"
          style={{ paddingTop: "50px", paddingBottom: "60px" }}
        >
          <div className="d-flex justify-content-center row px-5">
            <div
              className="card company-single-card bounce-to-bottom-company col-md-3 shadow-sm"
              style={{ width: "22rem" }}
            >
              <img
                src={team}
                className="card-img-top"
                alt="payroll"
                style={{ height: "200px" }}
              />
              <div className="card-body pt-3">
                <p style={{ fontSize: "18px", fontWeight: "500" }}>
                  Team Of Highly Experienced Professionals
                </p>
              </div>
            </div>

            <div
              className="card company-single-card bounce-to-bottom-company col-md-3 mx-5 shadow-sm"
              style={{ width: "22rem" }}
            >
              <img
                src={software}
                className="card-img-top"
                alt="payroll"
                style={{ height: "200px" }}
              />
              <div className="card-body pt-3">
                <p style={{ fontSize: "18px", fontWeight: "500" }}>
                  Working In Software Industry Since 2017
                </p>
              </div>
            </div>

            <div
              className="card company-single-card bounce-to-bottom-company col-md-3 shadow-sm"
              style={{ width: "22rem" }}
            >
              <img
                src={web}
                className="card-img-top"
                alt="payroll"
                style={{ height: "200px" }}
              />
              <div className="card-body pt-3">
                <p style={{ fontSize: "18px", fontWeight: "500" }}>
                  We Dream Big and <br /> Win Together
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
