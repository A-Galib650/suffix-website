import data from "./ErpDetailsData"
const ErpDetails = () => {

  return (
    <div style={{ backgroundColor: "rgba(253,253,253,253)", backgroundPosition: "center", backgroundRepeat: "none"}}>
      <div className="container-fluid d-flex align-items-center" >
        <div className="erp-detail-content" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
          <h1 className="text-center pb-5" style={{ fontSize: "30px", fontWeight: "600" }}>Key <span style={{ color: "#609dce" }}>Features</span></h1>
          <div className="row px-5">
            {
              data.map((item, index) => {
                return <div className="col-md-6 py-5 px-5" key={index} data-aos="fade-up" data-aos-offset="-20" data-aos-easing="ease-in-sine" data-aos-duration="2000">
                  <h1 style={{ color: "#609dce" }}><img className="px-2" src={`${item?.img}`} alt="erpIcon" style={{ width: "48px", objectFit: "contain" }} />{item?.title}</h1>
                  <p className="text-justify" style={{ fontSize: "17px" }}>{item?.description}</p>
                </div>

              })
            }


          </div>

        </div>

      </div>
    </div>
  )
}

export default ErpDetails
