import pf from "../../../media/ProductPages/ProvidentFund/Suffix_PF_Features.jpg";

const ProvidentFundIntro = () => {
  return (
    <div style={{ padding: "80px 0px" }} id="providentFundIntro">
      <div className="container">

        <div className="row d-flex justify-content-center flex-column align-items-center">
          <div className="col-md-6">
            <img src={pf} alt="" style={{ width: '100%', objectFit: "contain" }} />

          </div>
          <div className="col-md-10">
            <p className="pt-5" style={{ fontSize: '15px' }}>Suffix Provident Fund Management an advance way to handle your employee’s funding management with PF software</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default ProvidentFundIntro
