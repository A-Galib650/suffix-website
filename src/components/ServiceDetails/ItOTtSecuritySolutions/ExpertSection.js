import React from 'react';
import { Link } from 'react-router-dom';
import expertImage from "../../../media/iT&OTSecuritySolutions/OBJECTS.png";
import expertImage2 from "../../../media/iT&OTSecuritySolutions/BACKGROUND.png";

const ExpertSection = () => {
  return (
    <>
      <style>{`
        
        .container-fluid {
          height: auto;
        }

        
        @media (max-width: 767px) {
          .right-column {
            background-color: #4537CC;
            padding: 20px;
            width: 100%; 
            border-radius: 5px;
          }

          .left-column img {
            margin-bottom: 100px;
          }

          .fs-5 {
            text-align: center; 
          }

          .btn {
            font-size: 10px;
            padding: 6px 18px;
          }
        }
      `}</style>

      <div
        className="container-fluid d-flex flex-column flex-md-row mb-5 mt-5 expert-section"
        style={{
          backgroundImage: `url(${expertImage2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        
        <div className="col-12 col-md-6 left-column d-flex justify-content-center align-items-center p-4">
          <img
            src={expertImage}
            alt="Placeholder"
            className="img-fluid"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

       
        <div className="col-12 col-md-6 right-column d-flex flex-column justify-content-center align-items-center text-center text-md-left px-4 py-3">
          <p className="fs-5 text-white text-justify">
            Don’t leave your IT and OT systems vulnerable to attacks. Partner with
            Suffix IT Limited for state-of-the-art security solutions designed to
            protect your digital and operational assets. Contact us now to discuss
            how we can help secure your business.
          </p>
          <div className="d-flex justify-content-center justify-content-md-start w-100 mt-3 pb-3">
          <Link to='/contact'>
        <button className="btn btn-light rounded-pill px-4 py-3 mt-3 fw-bold">
          Get a Free Consultation
        </button>
        </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertSection;
