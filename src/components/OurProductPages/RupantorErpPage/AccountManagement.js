import { faChartPie } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LedgerFeature from "./LedgerFeature"
import LedgerIntegrate from "./LedgerIntegrate"

const AccountManagement = () => {
  return (
    <div className="account-management" style={{ padding: "50px 0px", background: "rgb(252, 252, 252)", height: "auto", backgroundPosition: "center", backgroundRepeat: "none", backgroundSize: "cover" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "500", textAlign: "center" }}>Accounting And <span style={{color: "#609dce"}}>Financial Management</span></h1>
      {/* <div className="container-fluid px-4" >
        <div className="row d-flex justify-content-around">
          <div className="col-md-10" style={{ padding: "30px 0px" }}>
            <h1 style={{ fontSize: "26px", fontWeight: "500" }}><FontAwesomeIcon icon={faChartPie} /> General Ledger</h1>
            
          </div>

        </div>
      </div> */}
      <LedgerIntegrate />
      <LedgerFeature />

    </div>
  )
}

export default AccountManagement
