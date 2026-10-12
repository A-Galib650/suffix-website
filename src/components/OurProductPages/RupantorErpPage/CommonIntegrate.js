import data from './CommonIntegrateData';

const CommonIntegrate = ({ img, title, color }) => {
  return (
    <div className="CommonIntegrate" style={{ minHeight: "auto",padding: "70px 0px", background: `${color}`, backgroundPosition: "center", backgroundRepeat: "none", backgroundSize: "cover" }}>

      <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-center px-5">
          <div className="col-md-5" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img src={img} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />

          </div>

          <div className="col-md-5" data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h1 style={{ fontSize: "28px", fontWeight: "500" }}>{title}</h1>
            {
              data.map((item, index) => {
                return (
                  <li className="pt-3" style={{ fontSize: "15px", textAlign: "left",paddingLeft:"20px" }} key={index}>{item?.list}</li>
                )
              })
            }

          </div>


        </div>


      </div>

    </div>
  )
}

export default CommonIntegrate
