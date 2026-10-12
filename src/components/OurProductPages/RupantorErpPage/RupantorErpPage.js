import { ScrollUp } from "../../../helpers/ScrollUp"
import OurProductHeader from "../../FieldManagementDetail/OurProductHeader"
import Footer from "../../Footer/Footer";
import AccountManagement from "./AccountManagement";
import AccountPayable from "./AccountPayable";
import CommonIntegrate from "./CommonIntegrate";
import RupantorErpIntro from "./RupantorErpIntro";
import img1 from '../../../media/RupantorErp/Credit card-cuate.svg';
import img2 from '../../../media/payroll/Sponsor-bro.svg';
import PayableFeature from "./PayableFeature";
import PayrollIntro from "../PayrollPage/PayrollIntro";
import PayrollFeature from "../PayrollPage/PayrollFeatures";
import RupantorInventoryIntro from "../RupantorInventoryPage/RupantorInventoryIntro";
import InventoryControl from "../RupantorInventoryPage/InventoryControl";
import InventoryFeature from "../RupantorInventoryPage/InventoryFeature";
import FieldForceDemo from "../../../Shared/FieldForceDemo";
import SalesIntro from "./SalesIntro";
import SalesIntegrate from "./SalesIntegrate";
import RightContentLeftImage from "../../ReuseableComponent/Products/RightContentLeftImage";
import salesFeatureData from './SalesFeatureData';
import salesFeatureImage from '../../../media/RupantorErp/salesFeature.svg';
import ProcurementIntro from "./ProcurementIntro";
import ProcurementIntegrateData from './ProcurementIntegrateData';
import ProcurementIntegrateImage from '../../../media/Procurement/integrate.svg';
import ProcurementFeatureData from './ProcurementFeatureData';
import ProcurementFeatureImage from '../../../media/Procurement/In no time-amico.svg';
import LeftContentRightImage from "../../ReuseableComponent/Products/LeftContentRightImage";
import MoreInfoERP from "./MoreInfoERP";
import img from "../../../media/RupantorErp/At the office-amico.svg";
import { Helmet } from "react-helmet";
import SEOComponent from "../../common/SEOComponent";


const RupantorErpPage = () => {
  ScrollUp();
  return (
    <div className="overflow-hidden">
      <SEOComponent
        keyWords="suffix, suffixit, Rupantar, Rupantar HCM, Rupantar HR, Rupantar Payroll, HCM, HR, Payroll, HCM Rupantar, HR Rupantar, Payroll Rupantar, Provident Fund, Suffix Provident Fund, Suffix PF, Rupantar ERP, REP, ERP Rupantar, Suffix ERP, Suffix E-commerce, E-commerce, Ecommerce, Ecommerce Suffix, Suffix FFMS, FFMS, Field Force, Field Force Management System, Suffix Interconnect Billing, Interconnect Billing, Billing, Suffix Hotel, Suffix Hotel Booking System, Hotel Booking System, Booking System, Domain, Hosting, Domain and Hosting, Web And Ecommerce, Storage, Backup Services, Storage and Backup Services, Cloud, Cloud Hosting, Suffix Bulk SMS, SMS, Bulk SMS, ERP Consulting, Applications, Custom Applications, Mobile, Mobile Applications, Mobile apps, inventory, Inventory Management, Sales Orders, Invoicing, Procurement, Accounting and financial Management, software company in Bangladesh,software development in Bangladesh,Mobile App development company in Bangladesh,Android App Development,iOS App Development,software development company in Bangladesh,website developer company in Bangladesh,create software program,best hosting company in Bangladesh,web hosting company in Bangladesh,domain hosting Bangladesh,seo service provider company in Bangladesh,best website design company in Bangladesh,erp software company in Bangladesh,pos software company in Bangladesh,pos software company in bd,accounting software company in Bangladesh,leading software company in Bangladesh,software company in bangladesh list,top 10 software development company in Bangladesh,Graphics Design,Inventory,Library Software,IT,bd,bangladesh, webmeeting, suffix webmeeting, pos, smart pos, smart pos and billing, pos solution, smart pos and billing system, pos system"
      />
      <OurProductHeader title="Rupantor ERP Module" hyperRef="rupantor-erp#rupantor-erp-intro" img={img} imgWidth="80%" />
      <RupantorErpIntro />
      <AccountManagement />
      <AccountPayable />
      <CommonIntegrate
        title="The ‘Accounts Payable’ module integrates as follows"
        img={img1}
        color="rgb(252, 252, 252)"
      />
      <PayableFeature />
      <PayrollIntro color="rgb(252, 252, 252)" />
      <CommonIntegrate
        title="The 'HR & Payroll' module integrates to"
        img={img2}
        color="white"
      />
      <PayrollFeature />
      <RupantorInventoryIntro />
      <InventoryControl />
      <InventoryFeature />
      <SalesIntro />
      <SalesIntegrate />
      <RightContentLeftImage
        title="Features of Sales Orders"
        bgColor="rgb(252, 252, 252)"
        data={salesFeatureData}
        image={salesFeatureImage}

      />
      <ProcurementIntro />
      <RightContentLeftImage
        title="The ‘Purchase Order’ module integrates to"
        bgColor="rgb(252, 252, 252)"
        data={ProcurementIntegrateData}
        image={ProcurementIntegrateImage}

      />
      <LeftContentRightImage
        title="Features of Procurement"
        bgColor="white"
        data={ProcurementFeatureData}
        image={ProcurementFeatureImage}

      />
      <MoreInfoERP />
      <FieldForceDemo />
      <Footer />
    </div>
  )
}

export default RupantorErpPage
