import interConnectBill from "../../../media/InterConnectBilling/iterconnectBilling.svg";

const InterConnectBillingIntro = () => {
  return (
    <div className="interconnect-billing-intro" id="interconnect-billing-starting" style={{ padding: "50px 0px" }}>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-center px-5">
          <div className="col-md-5" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img src={interConnectBill} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />

          </div>
          <div className="col-md-5" data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h1 style={{ fontSize: "28px", fontWeight: "500" }}>Interconnect Billing Solutions</h1>
            <p className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>As operators move deeper into next-generation services and content-driven service environments, revenue assurance becomes both more complex and more critical. Product portfolios are expanding, networks, services, operations and revenue chains are becoming increasingly complicated. Due to their growth, operators have to deal with large volumes of data, control points, KPIs involving time consuming and repetitive investigations. In today’s dynamic communications environment, a successful revenue assurance practice requires a highly mature revenue assurance solution – one that not only enables proactive and ongoing revenue recovery but simplifies RA by visually aiding telecom operators and guiding them to improve performance.</p>

          </div>

        </div>


      </div>

    </div>
  )
}

export default InterConnectBillingIntro
