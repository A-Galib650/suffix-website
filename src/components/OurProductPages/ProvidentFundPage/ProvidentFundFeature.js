const ProvidentFundFeature = ({ data }) => {
  return (
    <div className="Feature" style={{ height: 'auto', background: "rgb(252, 252, 252)" }}>
      <div className="container-fluid" style={{ padding: "40px 0px" }}>
        <h1 className="text-center" style={{ fontSize: "28px", fontWeight: "600" }}>Key <span style={{ color: "#609dce" }}>Features</span></h1>
        {/* <p className="text-center" style={{ fontSize: "20px", fontWeight: "400" }}>Store in-depth, detailed information about your</p> */}
        <div className="row d-flex justify-content-center " style={{ paddingTop: "50px", paddingBottom: "50px" }}>
          {
            data.map((item, index) => {
              return (
                <div className="box-wrapper col-lg-5 text-center pt-5 px-4">
                  <div key={index} className="box">
                    <div className="front-face d-flex flex-column align-items-center justify-content-center px-4">
                      <img src={item?.img} alt="" style={{ height: "85px", width: "85px", objectFit: "contain" }} />
                      <h2 style={{ fontSize: "22px", fontWeight: "600" }} className="pt-2">{item?.title}</h2>

                    </div>
                    <div className="back-face d-flex flex-column align-items-center justify-content-center ">

                      <h2 style={{ fontSize: "22px", fontWeight: "600" }} className="pb-2">{item?.title}</h2>
                      <p style={{ fontSize: "15px", fontWeight: "400" }}>{item?.desc}</p>

                    </div>


                  </div>
                </div>
              )
            })
          }

        </div>

      </div>
    </div>
  )
}

export default ProvidentFundFeature
