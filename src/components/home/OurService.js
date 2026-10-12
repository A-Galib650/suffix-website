import serviceData from "../OurServiceFakeData/OurServiceFakeData.json";
import OurServiceDetail from "./OurServiceDetail";

const OurService = () => {

  return (
    <div style={{ backgroundColor: "rgb(252, 252, 252)", backgroundPosition: "center", backgroundRepeat: "none", minHeight: "auto" }}>
      <div className="container-fluid" style={{ paddingTop: "50px" }}>
        <div className="ourServiceTitle text-center">
          <h1 style={{ color: "#525252", fontSize: "28px", paddingBottom: "" }}><strong>Our <span style={{ color: "#609dce" }}>Services</span></strong></h1>
          <p className="text-secondary" style={{ fontSize: "18px" }}>As a leader in technology exploring, Suffix IT is committed to exporting quality software worldwide..</p>
        </div>
        <div className="ourServiceMainContent" style={{ paddingTop: "50px", paddingBottom: "60px" }} >
          <div className="d-flex justify-content-center row px-5">

            {
              serviceData.map((singleServiceData) => <OurServiceDetail singleServiceData={singleServiceData} key={singleServiceData.id}></OurServiceDetail>)
            }

          </div>
        </div>

      </div>
    </div>
  )
}

export default OurService
