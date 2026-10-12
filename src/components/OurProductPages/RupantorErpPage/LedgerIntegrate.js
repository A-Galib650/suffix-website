import data from "./LedgerIntegrateData";
import integrateImg from "../../../media/RupantorErp/Online document-rafiki.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";

const LedgerIntegrate = () => {
  return (
    <div
      className="LedgerIntegrate"
      style={{ paddingTop: "0px ", minHeight: "auto" }}
    >
      <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-center px-5">
          <div
            className="col-md-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="py-3">
              <h1 style={{ fontSize: "26px", fontWeight: "500" }}>
                <FontAwesomeIcon icon={faChartPie} /> General Ledger
              </h1>
              <p
                className="pt-3"
                style={{ fontSize: "15px", textAlign: "justify" }}
              >
                For larger enterprises, Rupantor’s General Ledger offers a
                built-in inter-company transaction feature that includes
                self-balancing, inter-company loan accounts which substantially
                reduce administration of these transaction types. With options
                such as unlimited history and drill down capabilities to source
                detail transactions, Rupantor’s General Ledger and financial
                sub-modules are a powerful financial system.
              </p>
            </div>
            <h1 style={{ fontSize: "24px", fontWeight: "500" }}>
              The ‘General Ledger’ module integrates to
            </h1>
            {data.map((item, index) => {
              return (
                <li
                  className="pt-3"
                  style={{ fontSize: "15px", textAlign: "left",paddingLeft:"20px" }}
                  key={index}
                >
                  {item?.list}
                </li>
              );
            })}
          </div>
          <div
            className="col-md-5"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={integrateImg}
              alt="interconnect billing"
              style={{ width: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LedgerIntegrate;
