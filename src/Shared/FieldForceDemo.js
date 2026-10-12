import { Link } from "react-router-dom"
import demo from "../media/download/Telecommuting-rafiki.svg"
const FieldForceDemo = () => {
  return (
    <div className="field-force-demo" >
      <div>
        <div className="row" style={{ padding: "80px 0px" }}>
          <div className="col-md-12 d-flex  flex-column align-items-center">
            <img src={demo} alt="Field Force Demo" style={{ width: "300px", objectFit: "contain" }} />
            <h1 className=" text-center demoTitle px-5" style={{ fontSize: "30px", color: "#05ace9" }}>Schedule a Live Demo</h1>
            <h3 style={{ fontSize: "16px" }} className="text-center px-5">Go for a free practical demonstration in order to experience the user friendly platform of Suffix Field Force Management.</h3>
            <div className="force-demo-button d-flex justify-content-start">
              <Link to="/contact" ><span></span>Request For a Demo</Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default FieldForceDemo
