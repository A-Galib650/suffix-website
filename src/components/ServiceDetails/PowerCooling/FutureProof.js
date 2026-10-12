
import futureImage from "../../../media/powerCooling/futureImage.png";
import { Link } from 'react-router-dom';


function FutureProof() {
  return (
    <div
      className="container-fluid p-0 position-relative"
      style={{
        marginTop: "50px",
        overflow: "hidden", 
      }}
    >
      <img
        src={futureImage}
        alt="bannerImage"
        className="w-100" 
        style={{
          height: "auto",
          objectFit: "cover",
        }}
      />
      <div
        className="position-absolute text-white"
        style={{
          left: "10%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <h1
          className="display-6 fw-bold mb-4 text-shadow"
          style={{
            color:"white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          Future-Proof Your Data Center Today
        </h1>
        
        <Link to='/contact'>
        <button className="btn btn-light rounded-pill px-4 py-3 mt-3 fw-bold">
          Get a Free Consultation
        </button>
        </Link>
        

      </div>
    </div>
  );
}

export default FutureProof;
