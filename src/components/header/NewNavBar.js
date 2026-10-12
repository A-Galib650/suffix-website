/**
  / eslint-disable jsx-a11y/img-redundant-alt
 *
 * @format
 */

/**
  / eslint-disable jsx-a11y/img-redundant-alt
 *
 * @format
 */

import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  IotPic,
  NAV_FEATURE_PRODUCT,
  NAV_FEATURE_SERVICE,
  NAV_LOGO
} from "../../assets/ImageAssets/Navbar";
import closeBtn from "../../assets/img/close.png";
import LinkNav, {
  LeftMegaNavLink,
  LinkNavMob,
  RightMegaNavLink,
  SideNavMenu
} from "../common/LinkNav";
import {
  IOT_LIST_LINK,
  PRODUCT_LIST_LINK,
  SERVICE_LIST_LINK
} from "./../../Navigation/ListLink";

const NewNavBar = () => {
  const history = useHistory();
  const [color, setColor] = useState(false);
  const location = useLocation();
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className="haha-bg">
      <div className={color ? "new-nav-bar " : "headerBG new-nav-bar"}>
        <nav
          className={`${location.pathname === "/" || location.pathname === "/home"
            ? `navbar navbar-expand-lg fixed-top ${color ? "nav-home-after-scroll " : "nav-home-before-scroll"
            }`
            : `navbar navbar-expand-lg fixed-top nav-home-after-scroll }`
            }`}
        >
          <div className="container-fluid container py-3 py-md-0">
            <Link className="navbar-brand" to="/">
              <img src={NAV_LOGO} alt="logo" className="img-fluid" />
            </Link>

            <button
              class="navbar-toggler toggleCustom"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="fa-solid fa-align-right"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar-content">
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0 mx-auto">
                <li className="nav-item">
                  <LinkNav to="/" title="Home" />
                </li>
                <li className="nav-item">
                  <LinkNav
                    to="/about"
                    title="About"
                    className={
                      location.pathname === "/about" ? "navbar-icon-color" : ""
                    }
                  />
                </li>

                <li className="nav-item dropdown dropdown-mega dropdown-hover position-static">
                  <LinkNav
                    to="!#"
                    title="Products"
                    className="dropdown-toggle"
                  />

                  <div className="dropdown-menu dropdown-menu-two shadow border-0 pt-0 pb-0">
                    <div className="mega-content px-0">
                      <div
                        className="container-fluid"
                        style={{ paddingLeft: "8px" }}
                      >
                        <div className="row">
                          <div
                            className="col-12 col-sm-12 col-md-4 py-4 card-image px-4"
                            style={{ borderRadius: " 1rem 0rem 0rem 1rem" }}
                          >
                            <div className="card ">
                              <img
                                src={NAV_FEATURE_PRODUCT}
                                className="img-fluid rounded-img"
                                alt="navimage"
                              />
                            </div>
                          </div>

                          <div className="col-12 col-sm-12 col-md-4 py-4">
                            <LeftMegaNavLink data={PRODUCT_LIST_LINK} />
                          </div>
                          <div className="col-12 col-sm-12 col-md-4 py-4">
                            <RightMegaNavLink data={PRODUCT_LIST_LINK} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* IOT nav */}
                <li className="nav-item dropdown dropdown-mega dropdown-hover position-static">
                  <LinkNav
                    to="!#"
                    title="IoT"
                    className="dropdown-toggle"
                  />
                  <div className="dropdown-menu dropdown-menu-two shadow  border-0 pt-0 pb-0" 
                 >
                    <div className="mega-content px-0">
                      <div
                        className="container-fluid"
                        style={{ paddingLeft: "8px" }}
                      >
                        <div className="row ">
                          <div
                            className="col-12 col-sm-12 col-md-4 py-4 card-image px-4"
                            style={{ borderRadius: " 1rem 0rem 0rem 1rem" }}
                          >
                            <div className="card ">
                              <img
                                src={IotPic}
                                className="img-fluid rounded-img"
                                alt="navimage"
                              />
                            </div>
                          </div>

                          <div className="col-12 col-sm-12 col-md-4 py-4">
                            <LeftMegaNavLink data={IOT_LIST_LINK} />
                          </div>
                          <div className="col-12 col-sm-12 col-md-4 py-4">
                            <RightMegaNavLink data={IOT_LIST_LINK} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="dropdown-menu dropdown-menu-three shadow border-0 pt-0 pb-0" style={{width:"300px"}}>

                    <div className="mega-content px-0">
                      <div
                        className="container-fluid"
                        style={{ paddingLeft: "8px" }}
                      >
                        <div className="row">
                          <div
                            className="col-12 col-sm-12 col-md-4 py-4 card-image px-4"
                            style={{ borderRadius: " 1rem 0rem 0rem 1rem" }}
                          >
                            <div className="card ">
                              <img
                                src={NAV_FEATURE_PRODUCT}
                                className="img-fluid rounded-img"
                                alt="navimage"
                              />
                            </div>
                          </div>

                          <div className="col-12 mt-4">
                            <LeftMegaNavLink data={IOT_LIST_LINK} />
                          </div>
                          <div className="col-12">
                            <RightMegaNavLink data={IOT_LIST_LINK} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </li>
                <li className="nav-item dropdown dropdown-mega dropdown-hover position-static">
                  <LinkNav
                    to="!#"
                    title="Services"
                    className="dropdown-toggle"
                  />

                  <div className="dropdown-menu dropdown-menu-one shadow border-0 pt-0 pb-0">
                    <div className="mega-content px-0">
                      <div
                        className="container-fluid"
                        style={{ paddingRight: "8px" }}
                      >
                        <div className="row">
                          <div className="col-12 col-sm-12  col-md-4 py-4">
                            <LeftMegaNavLink data={SERVICE_LIST_LINK} />
                          </div>
                          <div className="col-12 col-sm-12 col-md-4 py-4">
                            <RightMegaNavLink data={SERVICE_LIST_LINK} />
                          </div>
                          <div
                            className="col-12 col-sm-12 col-md-4 py-4 card-image px-4"
                            style={{ borderRadius: " 0rem 1rem 1rem 0rem" }}
                          >
                            <div className="card ">
                              <img
                                src={NAV_FEATURE_SERVICE}
                                className="img-fluid rounded-img"
                                alt="navimage"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <LinkNav
                    to="/career"
                    title="Career"
                    className={
                      location.pathname === "/career" ? "navbar-icon-color" : ""
                    }
                  />
                </li>
              </ul>
              <form className="d-flex ms-auto">
                <div className="input-group">
                  <button
                    className="btn btn-primary border-0 nav-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      history.push("/contact");
                    }}
                  >
                    Contact
                  </button>
                </div>
              </form>
            </div>

            {/*===== offcanvas -section ======*/}
            <div
              className="offcanvas offcanvas-start navbar-toggler collapsed navbarTwo"
              data-bs-scroll="true"
              data-bs-backdrop="false"
              tabindex="-1"
              id="offcanvasScrolling"
              aria-labelledby="offcanvasScrollingLabel"
            >
              <div className="offcanvas-header">
                <Link className="navbar-brand secondLogo" href="/">
                  <img
                    src={NAV_LOGO}
                    alt="logo"
                    className="img-fluid"
                    width="120"
                  />
                </Link>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  style={{ backgroundImage: `url(${closeBtn})` }}
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <div className="accordion" id="accordionExample">
                  <LinkNavMob to="/" title="Home" />
                  <LinkNavMob to="/about" title="About" />

                  <div className="accordion-item border-0">
                    <h1 className="accordion-header " id="headingOne">
                      <button
                        className="accordion-button collapsed accordion-button-cstm"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Products
                      </button>
                    </h1>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <SideNavMenu data={PRODUCT_LIST_LINK} />
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0">
                    <h1 className="accordion-header " id="headingTwo">
                      <button
                        className="accordion-button collapsed accordion-button-cstm"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        IoT
                      </button>
                    </h1>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <SideNavMenu data={IOT_LIST_LINK} />
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h1 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button-cstm accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Services
                      </button>
                    </h1>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <SideNavMenu data={SERVICE_LIST_LINK} />
                      </div>
                    </div>
                  </div>
                  <LinkNavMob to="/career" title="Career" />
                  <LinkNavMob to="/contact" title="Contact" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NewNavBar;
