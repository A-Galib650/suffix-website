
import partner from '../../../media/InterConnectBilling/Sponsor-rafiki.svg';
const PartnerSettlement = () => {
  return (
    <div className="partnerSettlement" style={{ padding: "50px 0px" }}>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-center px-5">

          <div className="col-md-5" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img src={partner} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />
          </div>

          <div className="col-md-5" data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h1 style={{ fontSize: "28px", fontWeight: "500" }}>a1Partner Settlement</h1>
            <p className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>a1Partner Settlement allows operators to quickly and accurately settle charges with their network and content partners. It helps operators improve efficiency through light touch and automation, accurate billing and settlement and prudent accrual provisioning. Catering to the need for visibility of each deal's impact on an operator's bottom line owing to shrinking margins, the solution provides strong coverage in all areas from order to cash. It enables operators to manage costs and revenues on interconnect and partner agreements with domestic and international operators as well as content partners on a day-to-day, and hour-to-hour basis. New types of complex agreements in areas such as IP and content-based services require new system capabilities to ensure that operators have accurate data available to assure revenues.</p>

          </div>



          <div className="col-md-11" >

            <p className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>a1Partner Settlement's flexibility, scalability and ease of use empower all types of service providers, fixed or mobile, national incumbent or new entrant, giving them the edge needed to prosper in today's market.</p>

          </div>

        </div>


      </div>

    </div>
  )
}

export default PartnerSettlement
