import { Link } from "react-router-dom";
import { ScrollUp } from "../../helpers/ScrollUp";

const DomainHostingDetail = ({ domainInfo }) => {
  const { type, ram, cpu, price, storage, bandWidth1, bandWidth2, bandWidth3, priceHeader } = domainInfo;

  ScrollUp();
  return (
    <div className="col-xl-3 col-lg-4 col-sm-5 mx-4 " data-aos="fade-up"
      data-aos-duration="3000">
      <div className="pricing-card">
        <h3 className={`${priceHeader}`}>{type}</h3>
        <div className="price"><sup>$</sup>{price}<span>/MO</span></div>
        <ul>
          <li>{ram} </li>
          <li>{cpu}</li>
          <li>{storage}</li>
          <li>{bandWidth1}</li>
          <li>{bandWidth2}</li>
          <li>{bandWidth3}</li>
        </ul>
        <Link to="/contact" className="order-btn">Order Now </Link>

      </div>
    </div>
  )
}

export default DomainHostingDetail
