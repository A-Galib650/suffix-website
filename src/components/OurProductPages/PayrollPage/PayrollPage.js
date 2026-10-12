import { ScrollUp } from "../../../helpers/ScrollUp"
import FieldForceDemo from "../../../Shared/FieldForceDemo"
import OurProductHeader from "../../FieldManagementDetail/OurProductHeader"
import Footer from "../../Footer/Footer"
import MoreFeature from "./MoreFeature"
import PayRollBenefits from "./PayRollBenefits"
import PayrollFeature from "./PayrollFeatures"
import PayrollIntegrate from "./PayrollIntegrate"
import PayrollIntro from "./PayrollIntro"
import PayrollMoreInfo from "./PayrollMoreInfo"
import img from '../../../media/payroll/Payment Information-rafiki.svg';
import { Helmet } from "react-helmet"
import SEOComponent from "../../common/SEOComponent"

const PayrollPage = () => {
  ScrollUp();
  return (
    <div className="overflow-hidden">
      <SEOComponent
        keyWords="suffix, suffixit, Rupantar, Rupantar HCM, Rupantar HR, Rupantar Payroll, HCM, HR, Payroll, HCM Rupantar, HR Rupantar, Payroll Rupantar, Provident Fund, Suffix Provident Fund, Suffix PF, Rupantar ERP, REP, ERP Rupantar, Suffix ERP, Suffix E-commerce, E-commerce, Ecommerce, Ecommerce Suffix, Suffix FFMS, FFMS, Field Force, Field Force Management System, Suffix Interconnect Billing, Interconnect Billing, Billing, Suffix Hotel, Suffix Hotel Booking System, Hotel Booking System, Booking System, Domain, Hosting, Domain and Hosting, Web And Ecommerce, Storage, Backup Services, Storage and Backup Services, Cloud, Cloud Hosting, Suffix Bulk SMS, SMS, Bulk SMS, ERP Consulting, Applications, Custom Applications, Mobile, Mobile Applications, Mobile apps, inventory, Inventory Management, Sales Orders, Invoicing, Procurement, Accounting and financial Management, software company in Bangladesh,software development in Bangladesh,Mobile App development company in Bangladesh,Android App Development,iOS App Development,software development company in Bangladesh,website developer company in Bangladesh,create software program,best hosting company in Bangladesh,web hosting company in Bangladesh,domain hosting Bangladesh,seo service provider company in Bangladesh,best website design company in Bangladesh,erp software company in Bangladesh,pos software company in Bangladesh,pos software company in bd,accounting software company in Bangladesh,leading software company in Bangladesh,software company in bangladesh list,top 10 software development company in Bangladesh,Graphics Design,Inventory,Library Software,IT,bd,bangladesh, webmeeting, suffix webmeeting, pos, smart pos, smart pos and billing, pos solution, smart pos and billing system, pos system"
      />
      <OurProductHeader title="HR & Payroll Modules" hyperRef="payroll-system#payroll-intro" img={img} imgWidth="80%" />
      <PayrollIntro />
      <PayrollIntegrate />
      <PayRollBenefits />
      <PayrollFeature />
      <PayrollMoreInfo />
      <MoreFeature />
      <FieldForceDemo />
      <Footer />
    </div>
  )
}

export default PayrollPage
