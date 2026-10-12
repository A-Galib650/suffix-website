import moreInfoImg from '../../../media/e-commerce/moreInfo.svg';

const MoreInfo = () => {
  return (
    <div className="e-commerce-intro" id="e-commerce-init" style={{ padding: "50px 0px" }}>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-center px-5">
          <div className="col-md-5" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img src={moreInfoImg} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />

          </div>
          <div className="col-md-5" data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h1 style={{ fontSize: "28px", fontWeight: "500" }}>More <span style={{ color: "#609dce" }}>Information</span></h1>
            <li className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>Rapidly growing competition and ever-changing marketplace trends have elevated the requirement of efficient shopping cart software program application.There is no finish to attractive and accessible features that a successful e commerce solution must have. But you must be considerate about your budget as well as business needs. Suffix IT offers you an exciting yet affordable range of e commerce solution that can help you achieve your desired profitability, motivating customer service, reducing overheads, and revenues that you dream of.</li>

          </div>
          <div className="col-md-11">

            <li className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>Suffix IT supplies a complete end-to-end e commerce solution with regard to businesses and businesses looking for in order to launch and keep the expert and effective store existence on the Web. All of us have a variety of e-commerce options available and due to the vast choice of abilities, this works extremely well to create each shop conceivable, from a little shop to an whole on the internet mall.</li>

          </div>

        </div>


      </div>
    </div>
  )
}

export default MoreInfo
