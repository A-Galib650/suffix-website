import { faOpencart, faWeixin } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faHospital } from '@fortawesome/free-regular-svg-icons';
import {
  faBars,
  faCogs,
  faDatabase,
  faGraduationCap,
  faMobileAlt,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/download/download.png';

const Nav = ({ navigation }) => {
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 50) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  return (
    <nav
      className={`navbar  navbar-expand-lg ${
        navBar ? 'nav-after-scroll' : navigation
      }`}
      style={{ zIndex: '999' }}
    >
      {/* // <nav className={`navbar navbar-expand-lg  navbar-light bg-light`} style={{ zIndex: "999" }}> */}
      <div className='container-fluid '>
        <Link
          className='navbar-brand'
          to='/'
        >
          <img
            src={logo}
            alt=''
            style={{ width: '12rem', objectFit: 'contain' }}
          />
        </Link>
        <button
          className='navbar-toggler '
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          {navBar ? (
            <FontAwesomeIcon
              className='navbar-toggler-icon'
              icon={faBars}
              style={{ color: 'black', fontSize: '15px' }}
            />
          ) : (
            <FontAwesomeIcon
              className='navbar-toggler-icon'
              icon={faBars}
              style={{ color: 'white', fontSize: '15px' }}
            />
          )}
        </button>
        <div
          className='collapse navbar-collapse '
          id='navbarNav'
        >
          <ul className='navbar-nav  offset-md-1'>
            <li className='nav-item px-md-3'>
              <Link
                to='/'
                className='nav-link active'
                aria-current='page'
              >
                Home
              </Link>
            </li>
            <li class='nav-item dropdown dropDownHover px-md-3'>
              <Link
                class='nav-link dropdown-toggle'
                to='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Products
              </Link>
              <ul
                class='dropdown-menu  dropdownHover-menu'
                aria-labelledby='navbarDropdown'
              >
                <li>
                  <Link
                    class='dropdown-item'
                    to='/product/payroll-system'
                  >
                    Payroll System
                  </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/product/provident-fund'
                  >
                    Provident Fund
                  </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/product/e-commerce'
                  >
                    E-Commerce
                  </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/product/rupantor-erp'
                  >
                    Rupantor ERP
                  </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/product/hotel-booking-system'
                  >
                    Hotel Booking System
                  </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/product/field-force-management'
                  >
                    Field Force Management
                  </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/product/interconnect-billing'
                  >
                    Interconnect Billing
                  </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/product/rupantor-inventory'
                  >
                    Rupantor Inventory
                  </Link>
                </li>
              </ul>
            </li>

            <li class='nav-item dropdown dropDownHover px-md-3'>
              <Link
                class='nav-link dropdown-toggle'
                to='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Services
              </Link>
              <ul
                class='dropdown-menu dropdownHover-menu'
                aria-labelledby='navbarDropdown'
              >
                <li>
                  <Link
                    class='dropdown-item'
                    to='/service/domain-hosting'
                  >
                    <FontAwesomeIcon icon={faServer} /> Domain & Hosting
                  </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/service/erp-consulting'
                  >
                    <FontAwesomeIcon icon={faBuilding} /> ERP Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/service/web-ecommerce'
                  >
                    <FontAwesomeIcon icon={faOpencart} /> Web & E-Commerce
                  </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/service/custom-applications'
                  >
                    <FontAwesomeIcon icon={faCogs} /> Custom Applications
                  </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/service/video-conferencing'
                  >
                    <FontAwesomeIcon icon={faWeixin} /> Suffix Video
                    Conferencing
                  </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/service/it-infrastructure'
                  >
                    <FontAwesomeIcon icon={faWeixin} /> IT Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/service/it-ot-security-solution'
                  >
                    <FontAwesomeIcon icon={faWeixin} /> Comprehensive IT & OT Security Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/service/power-cooling'
                  >
                    <FontAwesomeIcon icon={faWeixin} />Infrastructure Power & Cooling 
                    </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/service/mobile-apps'
                  >
                    <FontAwesomeIcon icon={faMobileAlt} /> Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/service/hospital-management'
                  >
                    <FontAwesomeIcon icon={faHospital} /> Suffix Hospital
                    Management
                  </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/service/learning-management'
                  >
                    <FontAwesomeIcon icon={faGraduationCap} /> Suffix Learning
                    Management
                  </Link>
                </li>
                <li>
                  <Link
                    class='dropdown-item'
                    to='/service/storage-backup'
                  >
                    <FontAwesomeIcon icon={faDatabase} /> Storage & Backup
                    Services
                  </Link>
                </li>
              </ul>
            </li>

            {/* <li class="nav-item dropdown dropDownHover px-md-3">
                            <Link class="nav-link" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </Link>
                            <ul class="dropdown-menu dropdownHover-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" to="/about">About</Link></li>
                                <li><Link class="dropdown-item" to="/our-team">Our Team</Link></li>
                                <li><Link class="dropdown-item" to="/contact">Contact</Link></li>
                            </ul>
                        </li> */}

            <li className='nav-item px-md-3'>
              <Link
                className='nav-link'
                to='/about'
              >
                About
              </Link>
            </li>
            <li className='nav-item px-md-3'>
              <Link
                className='nav-link'
                to='/our-team'
              >
                Our Team
              </Link>
            </li>
            <li className='nav-item px-md-3'>
              <Link
                className='nav-link'
                to='/career'
              >
                Career
              </Link>
            </li>

            <li className='nav-item px-md-3'>
              <Link
                className='nav-link'
                to='/contact'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
