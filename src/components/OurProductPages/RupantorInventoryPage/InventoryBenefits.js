import data from './InventoryBenefitsData';
import benefitImg from '../../../media/RupantarInventory/businessBenefits.svg';

const InventoryBenefits = () => {
  return (
    <div className="inventory-control" style={{ padding: "80px 0px", background: "rgb(252, 252, 252)", height: "auto", backgroundPosition: "center", backgroundRepeat: "none", backgroundSize: "cover" }}>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-center px-5">

          <div className="col-md-5" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h1 style={{ fontSize: "28px", fontWeight: "500" }}>Benefits of Inventory Control</h1>
            {
              data.map((item, index) => {
                return (
                  <li className="pt-3" style={{ fontSize: "15px", textAlign: "left" ,paddingLeft:"20px" }} key={index}>{item?.list}</li>
                )
              })
            }

          </div>
          <div className="col-md-5" data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img src={benefitImg} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />

          </div>

        </div>


      </div>

    </div>
  )
}

export default InventoryBenefits
