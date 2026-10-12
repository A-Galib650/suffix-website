import React from 'react';
// import '../../assets/css/app.css';
import logo from "../../assets/img/Suffix-Logo.png";

const Navigations = () => {
  return (
    <div classname="navbar-items" style={{ zIndex: "50 !important" }}>
      <header className="site-header header-five header_trans-fixed" data-top={992}>
        <div className="container">
          <div className="header-inner">
            <div className="toggle-menu">
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </div>
            {/* /.toggle-menu */}
            <div className="site-mobile-logo">
              <a href="index.php" className="logo">
                <img src={logo} alt="site logo" className="main-logo" />
                <img src={logo} alt="site logo" className="sticky-logo" />
              </a>
            </div>
            <nav className="site-nav">
              <div className="close-menu">
                <span>Close</span>
                <i className="ei ei-icon_close" />
              </div>
              <div className="site-logo">
                <a href="index.html" className="logo">
                  <img src="assets/img/Suffix-Logo.png" alt="site logo" className="main-logo" />
                  <img src="assets/img/Suffix-Logo.png" alt="site logo" className="sticky-logo" />
                </a>
              </div>
              {/* /.site-logo */}
              <div className="menu-wrapper" data-top={992}>
                <ul className="site-main-menu">
                  <li className="menu-item-has-children">
                    <a href="index.php">Home</a>
                  </li>
                  <li><a href="about.html">About</a></li>
                  <li className="menu-item-has-children">
                    <a href="#">Pages</a>
                    <ul className="sub-menu">
                      <li><a href="about.html">About</a></li>
                      <li><a href="service.html">Service</a></li>
                      <li><a href="team.html">Our Team</a></li>
                      <li><a href="pricing.html">Pricing</a></li>
                      <li className="menu-item-has-children">
                        <a href="portfolio.html">Portfolio</a>
                        <ul className="sub-menu">
                          <li><a href="portfolio-one.html">Style One</a></li>
                          <li><a href="portfolio-two.html">Style Two</a></li>
                          <li><a href="portfolio-three.html">Style Three</a></li>
                          <li><a href="portfolio-single.html">Portfolio Single</a></li>
                        </ul>
                      </li>
                      <li><a href="faq.html">Faq's</a></li>
                      <li><a href="error.html">Error 404</a></li>
                      <li><a href="signin.html">Sing In</a></li>
                      <li><a href="signup.html">Sing Up</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a href="career.html">Career</a></li>
                </ul>
              </div>
              {/* /.menu-wrapper */}
            </nav>{/* /.site-nav */}
          </div>{/* /.header-inner */}
        </div>{/* /.container */}
      </header>{/* /.site-header */}
    </div>

  )
}

export default Navigations;
