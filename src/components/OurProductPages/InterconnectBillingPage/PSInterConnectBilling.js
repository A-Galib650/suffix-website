import psInterConnectBill from '../../../media/InterConnectBilling/Accountant-pana.svg';

const PSInterConnectBilling = () => {
  return (
    <div className="ps-interconnect-billing" style={{ padding: "50px 0px", background: "rgb(252, 252, 252)", height: "auto", backgroundPosition: "center", backgroundRepeat: "none", backgroundSize: "cover" }}>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-center px-5">

          <div className="col-md-5" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h1 style={{ fontSize: "28px", fontWeight: "500" }}>A1PS Interconnect Billing</h1>
            <p className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>The wholesale market today is increasingly aggressive and deregulated. Competition is fierce, margins are threatened, billions of different types of events require rating and analysis, agreements are complex and quality of service requires constant vigilance. In such an environment, operators need a partner settlement solution which efficiently accommodates new service launches with their tariff plans and complex revenue-share agreements. The solution, apart from simply billing and rating accurately, also needs to provide advanced and detailed information about the entire wholesale business for voice as well as content; thereby helping service providers make informed decisions.</p>

          </div>
          <div className="col-md-5" data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img src={psInterConnectBill} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />

          </div>

        </div>


      </div>

    </div>
  )
}

export default PSInterConnectBilling
