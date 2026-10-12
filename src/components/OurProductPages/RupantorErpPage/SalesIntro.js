import sales from '../../../media/RupantorErp/Invoice-rafiki.svg';
const SalesIntro = () => {
  return (
    <div className="rupantor-erp-module" id="rupantor-erp-intro" style={{ padding: "50px 0px", minHeight: "auto", background: "rgb(252, 252, 252)", backgroundPosition: "center", backgroundRepeat: "none", backgroundSize: "cover" }}>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-center px-5">
          <div className="col-md-5" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img src={sales} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />

          </div>
          <div className="col-md-5" data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h1 style={{ fontSize: "28px", fontWeight: "500" }}>Saled orders & invoicing</h1>
            <p className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>The Sales Orders module is a very powerful and flexible system designed to cater for multiple types of sales types. Examples include quotations, normal sales, billings, back-orders, direct/drop shipments, inter-branch transfers, inter-company sales and scheduled orders. Of significance in the Sales Orders system is a built-in configurator. The configurator is setup using the Product Definition module and allows you to develop a step by step configuration process. The configuration system is designed for businesses that need to build configurable products on the fly and produce quotes for customers. The system caters for multiple methods of sales pricing including; simple pricing, coded pricing, quantity discount pricing, extended pricing, buying groups and contract pricing. The system also caters for merchandise and non-merchandise sales, service charges, miscellaneous charges and freight charges.</p>

          </div>

        </div>


      </div>

    </div>
  )
}

export default SalesIntro
