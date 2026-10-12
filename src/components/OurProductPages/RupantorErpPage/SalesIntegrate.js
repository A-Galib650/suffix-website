import data from './SalesIntegrateData';
import salesImg from '../../../media/RupantorErp/undraw_Order_delivered_re_v4ab.svg';

const SalesIntegrate = () => {
  return (
    <div className="LedgerIntegrate" style={{ paddingTop: "50px ", minHeight: "auto" }}>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-center px-5">

          <div className="col-md-5" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h1 style={{ fontSize: "28px", fontWeight: "500" }}>The ‘Sales Orders’ module integrates to</h1>
            {
              data.map((item, index) => {
                return (
                  <li className="pt-3" style={{ fontSize: "15px", textAlign: "left",paddingLeft:"20px" }} key={index}>{item?.list}</li>
                )
              })
            }

          </div>
          <div className="col-md-5" data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img src={salesImg} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />

          </div>

        </div>


      </div>

    </div>
  )
}

export default SalesIntegrate
