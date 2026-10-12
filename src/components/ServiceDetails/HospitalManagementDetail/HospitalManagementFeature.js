import hospitalFeatureData from "./HospitalManagementData"

const HospitalManagementFeature = () => {
  return (
    <div className="hospital-management-feature " style={{ backgroundColor: "rgb(252, 252, 252)", backgroundPosition: "center", backgroundRepeat: "none", height: "auto" }}>
      <div className="container" style={{ padding: "80px 0px" }}>
        <div>
          <h1 className="text-center" style={{ fontSize: "30px", fontWeight: "500", color: "#525252" }}>Key Features</h1>
        </div>
        <div className="row " style={{ paddingTop: "40px", paddingBottom: "60px" }} data-aos="fade-up"
          data-aos-duration="3000">
          {hospitalFeatureData.map((item, index) => {
            return (
              <div className="col-lg-6  hospital-feature-content pt-5 px-5" key={index}>

                <div className="px-5">
                  <img className="hospitalFeatureImage" src={item?.img} alt="hospital-feature" />
                </div>
                <div>
                  <h1 style={{ fontWeight: '500', color: "#609dce" }}>{item?.title}</h1>
                  <p style={{ fontSize: "15px" }}>{item?.desc}</p>
                </div>



              </div>
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default HospitalManagementFeature
