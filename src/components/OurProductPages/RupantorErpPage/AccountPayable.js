import payableImg from '../../../media/RupantorErp/accountPayable.svg';

const AccountPayable = () => {
  return (
    <div className="rupantor-erp-module" id="rupantor-erp-intro" style={{ padding: "70px 0px", minHeight: "auto" }}>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-center px-5">

          <div className="col-md-5" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h1 style={{ fontSize: "28px", fontWeight: "500" }}>Accounts Payable</h1>
            <p className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>Automating Accounts Payable is one of the most important tasks you should undertake to control your outstanding accounts. This full-featured, multi-currency ‘Accounts Payable’ module gives you cash flow control and visibility over all accruals and expenses and includes many features that save time and money. The ‘Accounts Payable’ module has both an invoice registration system and a goods-received-not-yet-invoiced (GRN) accrual system. The system also caters for “inter-company” transactions that allow you to cut down substantially on the number of paper transactions between multiple companies in the same group.</p>

          </div>

          <div className="col-md-5" data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img src={payableImg} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />

          </div>

        </div>


      </div>

    </div>
  )
}

export default AccountPayable
