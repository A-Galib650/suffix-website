
import posImg from '../../../media/PosBilling/Wallet-amico.svg';
const POSBillingIntro = () => {
  return (
    <div className="interconnect-billing-intro" id="interconnect-billing-starting" style={{ padding: "90px 0px" }}>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-center px-5">
          <div className="col-md-5" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img src={posImg} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />

          </div>
          <div className="col-md-5" data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h1 style={{ fontSize: "28px", fontWeight: "500" }}>What is Smart POS & Billing System?</h1>
            <p className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>Smart POS & billing system is a easy to use point of sales system for retail store, super shop and restaurants. You can use it in any device such as your phone , laptop or desktop computer. By connecting POS printer, bar-code scanner and cash drawer you can make it a full functional Point Of Sales system. It has almost all the facility including inventory management system, sales and purchase management system, customer and employee management system which can automate your organization the way you never did before. With real time reporting you can get a clear view of your business anytime you want.</p>

          </div>

        </div>


      </div>

    </div>
  )
}

export default POSBillingIntro
