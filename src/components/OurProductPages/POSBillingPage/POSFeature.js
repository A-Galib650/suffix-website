import data from './POSFeatureData';

const POSFeature = () => {
  return (
    <div>
      <div className="pos-feature " style={{ backgroundColor: "rgb(248,248,248)", backgroundPosition: "center", backgroundRepeat: "none", height: "auto" }}>
        <div className="container-fluid" style={{ padding: "80px 0px"}}>
          <div>
            <h1 className="text-center" style={{ fontSize: "30px", fontWeight: "500", color: "#525252" }}>Key Features</h1>
          </div>
          <div className="row d-flex justify-content-around" style={{ paddingTop: "40px", paddingBottom: "60px" }} data-aos="fade-up"
            data-aos-duration="3000">
            {data.map((item, index) => {
              return (
                <div className="col-lg-5 pos-feature-content pt-5" key={index}>

                  <div className="px-4">
                    <img className="pos-image" src={item?.img} alt="pos-feature" />
                  </div>
                  <div className="px-4">
                    <h1 style={{ fontWeight: '500', color: "#609dce" }}>{item?.title}</h1>
                    {item?.list?.map((item2, index) => {
                      return (
                        <li style={{fontSize:"14px"}}>{item2}</li>
                      )
                    })}

                  </div>



                </div>
              )
            })}

          </div>
        </div>

      </div>
    </div>
  )
}

export default POSFeature
