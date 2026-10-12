/** @format */

import filedManagement from "../../media/download/field-force.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import data from "./FieldManagementData";
const FieldForceManagement = () => {
  const data1 = data.slice(0, 4);
  const data2 = data.slice(4);
  return (
    <div
      className=" field-force-management-section"
      style={{padding:"50px 0px"}}
    >
      
      <div>
        <div className=" fieldForceMainContent " >

          <div
            // data-aos="zoom-in-left"
            className=" fieldListMain"
            
          >
            <h1>
              We are working with <br /> Field Force Management

            </h1>
            <div className="fieldForceListContent" >
              <ul style={{ fontSize: "15px" }}>
                {data1.map((item, index) => {
                  return (
                    <div className="d-flex ">
                      <i class="fas fa-check-circle  #0072bc !important text-primary py-2 p-2"></i>
                      <li className="pb-4" style={{ fontSize: "17px" }}>
                        {item?.list}
                      </li>
                    </div>
                  );
                })}
              </ul>
              <ul style={{ fontSize: "15px" }}>
                {data2.map((item, index) => {
                  return (
                    <div className="d-flex ">
                      <i class="fas fa-check-circle  #0072bc !important text-primary py-2 p-2"></i>
                      <li className="pb-4" style={{ fontSize: "17px" }}>
                        {item?.list}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="">
              {/* <Link to="/product/filed-force-management">
                <span></span>View More Details
              </Link> */}
              <Link to="/product/field-force-management" className="border-0">
                  <button
                    className="btn btn-primary border-0 mt-5 nav-btn text-uppercase"
                    type="submit"
                  >
                    View More Details
                  </button>
                </Link>
            </div>
          </div>

          <div
            className="px-5 pt-5 mt-5 pt-md-0 mt-md-0"
            style={{
              // background: "linear-gradient( 135deg, #095797, #609dce)",
              backgroundPosition: "center",
              backgroundRepeat: "none",
              paddingTop: "0px",

            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              src={filedManagement}
              alt="filedManagement"
              data-aos="zoom-in-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldForceManagement;
