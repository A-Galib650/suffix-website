import { Link } from 'react-router-dom';
import suffixLogo from '../../assets/img/Suffix-Logo-white.png';
import bacco from '../../assets/img/bacco.png';
import cisco from '../../assets/img/cisco.png';
import fort from '../../assets/img/fort.png';
import basis from '../../assets/img/basis.png';
import cer1 from '../../assets/img/certificate (1).png';
import cer2 from '../../assets/img/certificate (2).png';
import { CURRENT_YEAR } from '../../helpers/Constant';
import '../../assets/css/footer.css'; 
import iso20000 from '../../assets/img/ISO-20000-1-2018-Standards-Logo-768x768.png';
// import sophos from '../../assets/img/sophos-logo.svg';
import sophos from '../../assets/img/SOPHOS_Cybersecurity_Logo.png';
// import skyline from '../../assets/img/footer-bg.webp';

const Footer = () => {
  return (
   <footer className="modern-footer">
      {/* <div className="skyline-wrapper">
        <div
          className="footer-skyline"
          style={{ 
            WebkitMaskImage: `url(${skyline})`, 
            maskImage: `url(${skyline})` 
          }}
        ></div>
      </div> */}

      <div className="footer-top h-screen">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <img src={suffixLogo} alt="site logo" className="footer-brand" />
              <p className="brand-text">
                We maintain strategic partnerships with multiple organizations in Bangladesh and worldwide, working together to deliver high-quality solutions and long-term value.
              </p>
              <div className="brand-socials">
                 <a href='https://www.facebook.com/suffixworld/' target="_blank"><i className='fab fa-facebook-f' /></a>
                 <a href='https://www.linkedin.com/company/suffix-it-limited/mycompany/' target="_blank"><i className='fab fa-linkedin-in' /></a>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="footer-header">CONTACT US</h3>
              <div className="contact-int">
                <div className="contact-item">
                  <i className="fa-solid fa-location-dot"></i>
                  <p>Cha-70,70/A, Rupayan Millennium Square (9A), Progoti Sharoni, North Badda, Gulshan, Dhaka-1212.</p>
                </div>
                <div className="contact-item">
                  <i className="fa-solid fa-envelope"></i>
                  <p>info@suffixit.com</p>
                </div>
                <div className="contact-item">
                  <i className="fa-solid fa-phone"></i>
                  <p>+88 01958 424000</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="footer-header">QUICK LINKS</h3>
              <nav className="quick-nav">
                <Link to='../About'>About Us</Link>
                <Link to='../Career'>Career</Link>
                <Link to='../Contact'>Contact Us</Link>
              </nav>
            </div>

   <div className="col-lg-3 col-md-6 mb-4">
  <div className="cert-wrapper">

    {/* ROW 1: ISO 9001 | ISO 27001 | ISO 20000 */}
    <div className="iso-grid">
      <div className="iso-item">
        <img src={cer1} alt="ISO 9001" className="img-cer1" />
      </div>
      <div className="iso-item">
        <img src={cer2} alt="ISO 27001" className="img-cer2" />
      </div>
      <div className="iso-item">
        <img src={iso20000} alt="ISO 20000" className="img-iso20000" />
      </div>
    </div>

    {/* ROW 2: BASIS | BACCO */}
    <div className="iso-grid">
      <div className="iso-item">
        <img src={basis} alt="Basis" className="img-basis" />
      </div>
      <div className="iso-item">
        <img src={bacco} alt="Bacco" className="img-bacco" />
      </div>
    </div>

    {/* ROW 3: CISCO | FORTINET | SOPHOS */}
    <div className="iso-grid">
      <div className="iso-item">
        <img src={cisco} alt="Cisco" className="img-cisco" />
      </div>
      <div className="iso-item">
        <img src={fort} alt="Fortinet" className="img-fort" />
      </div>
      <div className="iso-item">
        <img src={sophos} alt="Sophos" className="img-sophos" />
      </div>
    </div>

  </div>
</div>
          </div>
        </div>
      </div>
{/* 
      <div className="footer-middle">
        <div className="container">
          <div className="partner-flex">
            <img src={bacco} alt="bacco" />
            <img src={cisco} alt="cisco" />
            <img src={fort} alt="fort" />
          </div>
        </div>
      </div> */}

      <div className="footer-bottom">
        <div className="container">
          <p>
            © {CURRENT_YEAR} All Rights Reserved by 
            <span className="brand-highlight"> Suffix IT Limited</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;