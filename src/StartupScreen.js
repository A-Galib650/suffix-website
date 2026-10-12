/** @format */
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import GetPathProvider from './GetPathContext/GetPathContext';
import About from './components/About/About';
import Career from './components/Career/Career';
import CareerDetail from './components/Career/CareerDetail';
import Contact from './components/Contact/Contact';
import FieldManagementDetail from './components/FieldManagementDetail/FieldManagementDetail';
import FourOFour from './components/NoMatch/FourOFour';
import ECommercePage from './components/OurProductPages/ECommercePage/ECommercePage';
import HotelBookingPage from './components/OurProductPages/HotelBookingPage/HotelBookingPage';
import InterconnectBillingPage from './components/OurProductPages/InterconnectBillingPage/InterconnectBillingPage';
import POSBillingPage from './components/OurProductPages/POSBillingPage/POSBillingPage';
import PayrollPage from './components/OurProductPages/PayrollPage/PayrollPage';
import ProvidentFundPage from './components/OurProductPages/ProvidentFundPage/ProvidentFundPage';
import RupantorErpPage from './components/OurProductPages/RupantorErpPage/RupantorErpPage';
import RupantorInventoryPage from './components/OurProductPages/RupantorInventoryPage/RupantorInventoryPage';
import SmartTransformerPage from './components/OurProductPages/SmartTransformerPage/SmartTransformerPage';
import BulkSmsPage from './components/ServiceDetails/BulkSmsPage/BulkSmsPage';
import CustomApplications from './components/ServiceDetails/CustomApplications/CustomApplications';
import DomainHosting from './components/ServiceDetails/DomainHosting';
import ErpConsulting from './components/ServiceDetails/ErpConsulting/ErpConsulting';
import HospitalManagement from './components/ServiceDetails/HospitalManagementDetail/HospitalManagement';
import Iot from './components/ServiceDetails/Iot/Iot';
import LearningManagement from './components/ServiceDetails/LearningManagement/LearningManagement';
import MobileApps from './components/ServiceDetails/MobileApplication/MobileApps';
import StorageBackup from './components/ServiceDetails/StorageBackup/StorageBackup';
import WebECommerce from './components/ServiceDetails/WebECommerce/WebECommerce';
import WebECommerceDetails from './components/ServiceDetails/WebECommerce/WebEcommerceDetails';
import VideoConferencing from './components/ServiceDetails/videoconference/VideoConferencing';
import TopSoftwareCompaniesList from './components/TopTenCompanies/TopSoftwareCompaniesList';
import NewNavBar from './components/header/NewNavBar';
import ScrollTopButton from './components/scrollTopButton/ScrollTopButton';
import AsthaPolicyScreen from './screens/AsthaPolicyScreen';
import HomeScreen from './screens/HomeScreen';
import WebMail from './screens/WebMail';
import IndustrialEnergy from './components/ServiceDetails/Iot/IndustrialEnergy';
import ITInfrastructure from './components/ServiceDetails/ITInfrastructure/ITInfrastructure';
import ConsultancySystemIntegrator from './components/ServiceDetails/ConsultancySystemIntegrator/ConsultancySystemIntegrator';
import ITOtSecuritySolutions from './components/ServiceDetails/ItOTtSecuritySolutions/ITOtSecuritySolutions';
import PowerCooling from './components/ServiceDetails/PowerCooling/PowerCooling';

const StartupScreen = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  // Stop users to access context menu.
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      document.addEventListener(
        'contextmenu',
        (e) => e.preventDefault(),
        false
      );
    }
  }, []);

  return (
    <div className='App'>
      <GetPathProvider>
        <Router>
          {/* <Nav navigation="navigation-white" /> */}
          {/* <MegaMenuNav navBeforeScroll="nav-before-scroll" /> */}
          {!window.location.href.includes('webmail') && <NewNavBar />}

          <Switch>
            <Route
              path='/home'
              exact
              component={HomeScreen}
            />
            <Route
              path='/webmail'
              exact
              component={WebMail}
            />

            <Route
              path='/contact'
              exact
              component={Contact}
            />

            <Route
              path='/about'
              exact
              component={About}
            />
            <Route
              path='/astha-policy'
              exact
              component={AsthaPolicyScreen}
            />

            <Route
              path='/career'
              exact
              component={Career}
            />

            {/* <Route path="/our-team" exact component={OurTeam} /> */}

            {/* services */}

            <Route
              path='/service/domain-hosting'
              exact
              component={DomainHosting}
            />

            <Route
              path='/service/erp-consulting'
              exact
              component={ErpConsulting}
            />

            <Route
              path='/service/web-ecommerce'
              exact
              component={WebECommerce}
            />

            <Route
              path='/service/custom-applications'
              exact
              component={CustomApplications}
            />

            <Route
              path='/service/video-conferencing'
              exact
              component={VideoConferencing}
            />
            <Route
              path='/service/it-infrastructure'
              exact
              component={ITInfrastructure}
            />

            <Route
              path='/service/mobile-apps'
              exact
              component={MobileApps}
            />

            <Route
              path='/service/hospital-management'
              exact
              component={HospitalManagement}
            />

            <Route
              path='/service/learning-management'
              exact
              component={LearningManagement}
            />

            <Route
              path='/service/storage-backup'
              exact
              component={StorageBackup}
            />

            <Route
              path='/service/bulk-sms'
              exact
              component={BulkSmsPage}
            />
            <Route
              path='/service/consultancy-system-integrator'
              exact
              component={ConsultancySystemIntegrator}
            />
            <Route
              path='/service/it-ot-security-solution'
              exact
              component={ITOtSecuritySolutions}
            />
            <Route
              path='/service/power-cooling'
              exact
              component={PowerCooling}
            />

            <Route
              path='/service/pos-system'
              exact
              component={POSBillingPage}
            />

            <Route
              path='/service/field-force-management'
              exact
              component={FieldManagementDetail}
            />
            <Route
              path='/service/iot'
              exact
              component={Iot}
            />
             <Route
              path='/service/Industrial-Monitoring'
              exact
              component={IndustrialEnergy}
            />

            {/* Our Product Pages*/}

            <Route
              path='/product/payroll-system'
              exact
              component={PayrollPage}
            />

            <Route
              path='/product/interconnect-billing'
              exact
              component={InterconnectBillingPage}
            />

            <Route
              path='/product/e-commerce'
              exact
              component={ECommercePage}
            />

            <Route
              path='/product/rupantor-erp'
              exact
              component={RupantorErpPage}
            />

            <Route
              path='/product/provident-fund'
              exact
              component={ProvidentFundPage}
            />

            <Route
              path='/product/hotel-booking-system'
              exact
              component={HotelBookingPage}
            />

            <Route
              path='/product/rupantor-inventory'
              exact
              component={RupantorInventoryPage}
            />
            <Route
              path='/product/transformer-monitoring'
              exact
              component={SmartTransformerPage}
            />

            <Route
              path='/product/field-force-management'
              exact
              component={FieldManagementDetail}
            />

            <Route
              path='/product/pos-system'
              exact
              component={POSBillingPage}
            />

            {/* top-ten-software-companies */}
            <Route
              path='/top-10-software-company-in-bangladesh'
              exact
              component={TopSoftwareCompaniesList}
            />
            {/* Web ECommerce Detail */}
            <Route
              path='/web-e-commerce-detail/:type'
              exact
              component={WebECommerceDetails}
            />

            <Route
              path='/career-detail/:id'
              exact
              component={CareerDetail}
            />
            <Route
              path='/'
              exact
              component={HomeScreen}
            />

            <Route
              path='*'
              exact
              component={FourOFour}
            />
          </Switch>
          <ScrollTopButton />
        </Router>
      </GetPathProvider>
    </div>
  );
};

export default StartupScreen;
