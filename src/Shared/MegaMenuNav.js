import { faOpencart, faUncharted, faWeixin } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faHospital } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faCogs, faDatabase, faDollarSign, faDollyFlatbed, faFileInvoiceDollar, faGraduationCap, faHotel, faMobileAlt, faMoneyBillAlt, faServer, faShoppingCart, faSms, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation } from 'react-router';
import { Link } from "react-router-dom";
import logo2 from '../assets/img/Suffix-Logo-white.png';
import logo1 from '../assets/img/Suffix-Logo.png';
import { useWindowSize } from "../helpers/WindowSize";
import megaImgProduct from '../media/download/Mobile Marketing-rafiki.svg';
import megaImgService from '../media/download/Server status-rafiki.svg';


const MegaMenuNav = () => {
  const [height, width] = useWindowSize();
  const [displayMegaMenu, setDisplayMegaMenu] = useState(false);
  const location = useLocation();


  const [scrollStyle, setScrollStyle] = useState(false);

  const changeBackground = () => {

    if (window.scrollY > 100) {
      setScrollStyle(true)
    } else {
      setScrollStyle(false)
    }
  }
  window.addEventListener('scroll', changeBackground);

  const handleDisplayMenu = () => {
    setDisplayMegaMenu(true)

  }

  const handleHamburger = () => {
    setDisplayMegaMenu(false)

  }
  const handleHoverDisplay = () => {
    setDisplayMegaMenu(false)
  }

  return (
    <div className="mega-menu-nav">

      <nav className={`${((width > 1111) && ((location.pathname === '/') || (location.pathname === '/home')) && !scrollStyle) ? 'nav-home-before-scroll' : 'nav-home-after-scroll'}`}>
        <div className="wrapper">
          <div className="logo "><Link to="/" className="a"><img src={`${((width > 1111) && ((location.pathname === '/') || (location.pathname === '/home')) && !scrollStyle) ? logo1 : logo1}`} alt="" style={{ width: "110px", objectFit: "contain" }} /></Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links" style={{ display: (width <= 1111 && displayMegaMenu) && "none" }}>
            <label for="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
            <li><Link to="/" className="a" onClick={handleDisplayMenu}>Home</Link></li>
            <li><Link to="/about" className="a" onClick={handleDisplayMenu}>About</Link></li>

            {/* Product */}
            <li onMouseOver={handleHoverDisplay}>
              <Link to="#" className="desktop-item">Products  <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: "20px", paddingTop: "5px" }} /></Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">Products  <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: "20px", paddingTop: "5px" }} /></label>
              <div className="mega-box" style={{ display: displayMegaMenu ? "none" : "block" }}>
                <div className="content">
                  <div className="row">
                    <img src={megaImgProduct} alt="" />
                  </div>

                  <div className="row">

                    <ul className="mega-links">
                      <li onClick={handleDisplayMenu}><Link to="/product/payroll-system" className="a"><FontAwesomeIcon icon={faMoneyBillAlt} /> Payroll System</Link></li>
                      <li onClick={handleDisplayMenu}><Link to="/product/provident-fund" className="a"><FontAwesomeIcon icon={faDollarSign} /> Provident Fund</Link></li>
                      <li onClick={handleDisplayMenu}><Link to="/product/e-commerce" className="a"><FontAwesomeIcon icon={faShoppingCart} /> E-Commerce</Link></li>
                      <li onClick={handleDisplayMenu}><Link to="/product/rupantor-erp" className="a"><FontAwesomeIcon icon={faUncharted} /> Rupantor ERP</Link></li>
                    </ul>
                  </div>
                  <div className="row">

                    <ul className="mega-links">
                      <li onClick={handleDisplayMenu}><Link to="/product/hotel-booking-system" className="a"><FontAwesomeIcon icon={faHotel} /> Hotel Booking System</Link></li>
                      <li onClick={handleDisplayMenu}><Link to="/product/field-force-management" className="a"><FontAwesomeIcon icon={faTasks} /> Field Force Management</Link></li>
                      <li onClick={handleDisplayMenu}><Link to="/product/interconnect-billing" className="a"><FontAwesomeIcon icon={faFileInvoiceDollar} /> Interconnect Billing</Link></li>
                      <li onClick={handleDisplayMenu}><Link to="/product/rupantor-inventory" className="a"><FontAwesomeIcon icon={faDollyFlatbed} /> Rupantor Inventory</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Service */}
            <li onMouseOver={handleHoverDisplay}>
              <Link to="#" className="desktop-item">Services  <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: "20px", paddingTop: "5px" }} /></Link>
              <input type="checkbox" id="showMega2" />
              <label for="showMega2" className="mobile-item">Services  <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: "20px", paddingTop: "5px" }} /></label>
              <div className="mega-box2" style={{ display: displayMegaMenu ? "none" : "block" }}>
                <div className="content2">
                  <div className="row2">
                    <img src={megaImgService} alt="" />
                  </div>

                  <div className="row2">

                    <ul className="mega-links2">
                      <li onClick={handleDisplayMenu}><Link className="a" to="/service/domain-hosting"><FontAwesomeIcon icon={faServer} /> Domain & Hosting</Link> </li>
                      <li onClick={handleDisplayMenu}><Link className="a" to="/service/erp-consulting"><FontAwesomeIcon icon={faBuilding} /> ERP Consulting</Link></li>
                      <li onClick={handleDisplayMenu}><Link className="a" to="/service/web-ecommerce"><FontAwesomeIcon icon={faOpencart} /> Web & E-Commerce</Link></li>
                      <li onClick={handleDisplayMenu}><Link className="a" to="/service/custom-applications"><FontAwesomeIcon icon={faCogs} /> Custom Applications</Link></li>
                      <li onClick={handleDisplayMenu}><Link className="a" to="/service/video-conferencing"><FontAwesomeIcon icon={faWeixin} /> Suffix Video Conferencing</Link></li>
                      <li onClick={handleDisplayMenu}><Link className="a" to="/service/power-cooling"><FontAwesomeIcon icon={faWeixin} /> Power Cooling</Link></li>
                      <li onClick={handleDisplayMenu}><Link className="a" to="/service/consultancy-system-integrator"><FontAwesomeIcon icon={faSms} />Consultancy System Integrator</Link></li>
                    </ul>
                  </div>
                  <div className="row2">

                    <ul className="mega-links2">
                      <li onClick={handleDisplayMenu}><Link className="a" to="/service/mobile-apps"><FontAwesomeIcon icon={faMobileAlt} /> Mobile Apps</Link></li>
                      <li onClick={handleDisplayMenu}><Link className="a" to="/service/hospital-management"><FontAwesomeIcon icon={faHospital} /> Suffix Hospital Management</Link></li>
                      <li onClick={handleDisplayMenu}><Link className="a" to="/service/learning-management"><FontAwesomeIcon icon={faGraduationCap} /> Suffix Learning Management</Link></li>
                      <li onClick={handleDisplayMenu}><Link className="a" to="/service/storage-backup"><FontAwesomeIcon icon={faDatabase} /> Storage & Backup Services</Link></li>
                      <li onClick={handleDisplayMenu}><Link className="a" to="/service/bulk-sms"><FontAwesomeIcon icon={faSms} /> Bulk SMS</Link></li>
                      <li onClick={handleDisplayMenu}><Link className="a" to="/service/it-infrastructure"><FontAwesomeIcon icon={faWeixin} /> IT Infrastructure</Link></li>
                      <li onClick={handleDisplayMenu}><Link className="a" to="/service/it-ot-security-solution"><FontAwesomeIcon icon={faSms} />Comprehensive IT & OT Security Solutions</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li><Link to="/our-team" className="a" onClick={handleDisplayMenu}>Our Team</Link></li>
            <li><Link to="/career" className="a" onClick={handleDisplayMenu}>Career</Link></li>
            <li><Link to="/contact" className="a" onClick={handleDisplayMenu}>Contact</Link></li>

          </ul>

          <label for="menu-btn" className="btn menu-btn" onClick={handleHamburger} style={{ display: (width <= 1111 && displayMegaMenu) && "block" }}><i className="fas fa-bars"></i></label>
        </div>
      </nav>

    </div>
  )
}

export default MegaMenuNav
