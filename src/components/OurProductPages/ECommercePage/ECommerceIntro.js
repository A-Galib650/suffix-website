import eCommerceImg from "../../../media/e-commerce/e-commerce-intro.svg";
const ECommerceIntro = () => {
  
return (
  <div className="e-commerce-intro" id="e-commerce-init" style={{ paddingBottom: "80px" }}>
    <div className="container-fluid">
      <div className="row d-flex justify-content-around align-items-center px-5">
        <div className="col-md-5" data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <img src={eCommerceImg} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />

        </div>
        <div className="col-md-5" data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <h1 style={{ fontSize: "28px", fontWeight: "500" }}>E-Commerce Solutions</h1>
          <p className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>Suffix IT approach focuses on building an integrated, customized e-business solution for customers. We follow multi-phase, process-driven methodology for our e-commerce/e-business solutions including requirement analysis and definition, data modeling, site security, application testing and quality assurance.<br />
            Our practice involves expertise in portal development frameworks, content management solutions, application servers, middleware integration built by using latest technology platforms.</p>

        </div>

      </div>


    </div>
  </div>
)
}

export default ECommerceIntro
