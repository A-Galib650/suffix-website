import React from 'react';

const MoreInfoERP = () => {
    return (
        <div className="Procurement" style={{ paddingBottom: "0px", height: "auto", background: "rgb(252, 252, 252)", backgroundPosition: "center", backgroundRepeat: "none", backgroundSize: "cover" }}>
            <div className="container-fluid">
                <h1 style={{ fontSize: "28px", fontWeight: "500", textAlign: "center", paddingTop: "40px" }}>More <span style={{ color: "#609dce" }}>Information</span></h1>
                <div className="row d-flex justify-content-around align-items-center px-5" style={{paddingBottom: "80px"}}>

                    <div className="col-md-10" >
                        <h1 style={{ fontSize: "26px", fontWeight: "500" }}>Accounts Receivable</h1>
                        <li className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>Accounts Receivable controls all outstanding invoices, cash received and outstanding customer accounts. It is the center of your customer universe with all information and inquiries relating to outstanding accounts, sales history, sales pricing and more.</li>

                    </div>

                    <div className="col-md-10" >
                        <h1 style={{ fontSize: "26px", fontWeight: "500" }}>Accounts Payable</h1>
                        <li className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>Automating Accounts Payable is one of the most important tasks you should undertake to control your outstanding accounts. This full-featured, multi-currency ‘Accounts Payable’ module gives you cash flow control and visibility over all accruals and expenses and includes many features that save time and money.</li>

                    </div>

                    <div className="col-md-10">
                        <h1 style={{ fontSize: "26px", fontWeight: "500" }}>Bank Book</h1>
                        <li className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>The Bank Book is the hub to all cash flow within the Rupantor ERP system. Bank Book contains the details of all bank accounts used for bank and statement reconciliations. Rupantor’s Bank Book is an independent module rather than being incorporated into the General Ledger as some other packages are. Use this module for all bank accounts, credit lines and credit cards with the specific ‘bank account” functionality built into the system.</li>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default MoreInfoERP;