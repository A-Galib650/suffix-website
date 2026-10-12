/** @format */

import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { evenOddRow } from "../../helpers/functions";

const LinkNav = ({ to = "", title = "", className = "" }) => {
  return (
    <Link to={to} className={`nav-link menu-item ${className}`}>
      {title}
    </Link>
  );
};
export const LinkNavMob = ({ to = "", title = "" }) => {

  const history = useHistory();
  return (
    <div className="accordion-item border-0">
      <h1 className="accordion-header" id="headingFour">
        <button
          className="accordion-button-cstm accordion-button accordion-single collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={(e) => {
            e.preventDefault();
            history.push(to);
          }}
        >
          {title}
        </button>
      </h1>
    </div>
  );
};
export const LeftMegaNavLink = ({ data = [] }) => {
  const location = useLocation();
  return (
    <div className="list-group">
      {data?.slice(0, evenOddRow(data))?.map((dataList) => (
        <Link
          to={dataList.to}
          className={`dropdown-item ${location.pathname} ${
            location.pathname === dataList.to ? "dropdownActive" : ""
          } align-content-center d-flex flex-wrap p-2`}
        >
          <span className="me-2"></span>
          <div className="drop-title">
            <i className={dataList.icon} />
            {dataList.title}
          </div>
        </Link>
      ))}
    </div>
  );
};
export const RightMegaNavLink = ({ data = [] }) => {
  const location = useLocation();
  return (
    <div className="list-group">
      {data?.slice(evenOddRow(data), data.length)?.map((dataList) => (
        <Link
          to={dataList.to}
          className={`dropdown-item ${location.pathname} ${
            location.pathname === dataList.to ? "dropdownActive" : ""
          } align-content-center d-flex flex-wrap p-2`}
        >
          <span className="me-2"></span>
          <div className="drop-title">
            <i className={dataList.icon}></i>
            {dataList.title}
          </div>
        </Link>
      ))}
    </div>
  );
};
export const SideNavMenu = ({ data = [] }) => {

  const location = useLocation();
  return (
    <ul className="navbar-nav">
      {data?.map((dataList) => (
        <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close" key={dataList.to}>
          <Link
            to={dataList.to}
            className={`dropdown-item align-content-center d-flex flex-wrap p-2 nav-link mb-3 ${
              location.pathname
            } ${location.pathname === dataList.to ? "dropdownActive" : ""}`}
          >
            <span className="me-2"></span>
            <div className="ps-6" style={{fontSize:"18px important"}}>
              <i className={dataList.icon}></i>
               {dataList.title}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default LinkNav;
