import erpImg from '../../../media/RupantorErp/istockphoto-1300043434-170667a-removebg-preview.png';

const RupantorErpIntro = () => {
  return (
    <div className="rupantor-erp-module" id="rupantor-erp-intro" style={{ padding: "0px 0px", minHeight: "auto" }}>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-center px-5">
          <div className="col-md-5" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img src={erpImg} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />

          </div>
          <div className="col-md-5" data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h1 style={{ fontSize: "28px", fontWeight: "500" }}>Rupantor ERP Module</h1>
            <p className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>Rupantor’s General Ledger module is multi-company, multi-division and multi-branch capable. The General Ledger is the core of the financial management system and integrates with all other financial modules in the system. Included with this module are powerful financial report writing capabilities that include aggregation capability as well as optional integration to third party financial report writers if required. Alternatively, all data can be sent to external programs such as Microsoft Excel, Access or similar tools for further reporting and data analysis. For companies working around the globe, all sub-modules are multi-currency capable.</p>

          </div>

        </div>


      </div>

    </div>
  )
}

export default RupantorErpIntro
