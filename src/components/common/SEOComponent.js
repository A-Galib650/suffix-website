import { Helmet } from "react-helmet";
import logo from "../../assets/suffixLogo.jpg";

const SEOComponent = ({
  keyWords = "suffix, suffixit, Rupantar, Rupantar HCM, Rupantar HR, Rupantar Payroll, HCM, HR, Payroll, HCM Rupantar, HR Rupantar, Payroll Rupantar, Provident Fund, Suffix Provident Fund, Suffix PF, Rupantar ERP, REP, ERP Rupantar, Suffix ERP, Suffix E-commerce, E-commerce, Ecommerce, Ecommerce Suffix, Suffix FFMS, FFMS, Field Force, Field Force Management System, Suffix Interconnect Billing, Interconnect Billing, Billing, Suffix Hotel, Suffix Hotel Booking System, Hotel Booking System, Booking System, Domain, Hosting, Domain and Hosting, Web And Ecommerce, Storage, Backup Services, Storage and Backup Services, Cloud, Cloud Hosting, Suffix Bulk SMS, SMS, Bulk SMS, ERP Consulting, Applications, Custom Applications, Mobile, Mobile Applications, Mobile apps, inventory, Inventory Management, Sales Orders, Invoicing, Procurement, Accounting and financial Management, software company in Bangladesh,software development in Bangladesh,Mobile App development company in Bangladesh,Android App Development,iOS App Development,software development company in Bangladesh,website developer company in Bangladesh,create software program,best hosting company in Bangladesh,web hosting company in Bangladesh,domain hosting Bangladesh,seo service provider company in Bangladesh,best website design company in Bangladesh,erp software company in Bangladesh,pos software company in Bangladesh,pos software company in bd,accounting software company in Bangladesh,leading software company in Bangladesh,software company in bangladesh list,top 10 software development company in Bangladesh,Graphics Design,Inventory,Library Software,IT,bd,bangladesh, webmeeting, suffix webmeeting, pos, smart pos, smart pos and billing, pos solution, smart pos and billing system, pos system, Smart Transformer Monitoring System, Transformer Smart Monitoring System, Smart Substation Monitoring System, Substation Smart Monitoring System, Smart Monitoring System, Online Monitoring System, Condition Monitoring System, Transformer Condition Monitoring System, Substation Condition Monitoring System, Online Transformer Monitoring System, Transformer Online Monitoring System, IoT based Transformer Monitoring System, IoT based Substation Monitoring System, STMS, STMS 2.0",
}) => {
  return (
    <Helmet>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Suffix IT Limited : Software Company in Bangladesh</title>
      <meta name="keywords" content={keyWords} />
      <meta
        name="Subject"
        content="Suffix IT Limited is a Software Company in Bangladesh providing various ICT services to individual and corporate clients globally"
      />
      <meta
        name="description"
        content="Suffix IT Limited is a provider of comprehensive ICT solutions in Bangladesh, specializing in website and software development, custom business applications, and Internet of Things (IoT) solutions to help businesses enhance efficiency, connectivity, and digital transformation."
      />
      <meta
        name="geo.placename"
        content="Cha-70,70/A, Rupayan Millennium Square (9A), Progoti Sharoni, North Badda, Gulshan, Dhaka-1212, Bangladesh."
      />
      <meta name="geo.position" content="23.7847143, 90.4256126" />
      <meta name="geo.region" content="BD-Dhaka Division" />
      <meta name="ICBM" content="23.7847143, 90.4256126" />
      <meta
        name="author"
        content="Suffix IT Limited, Tell: +88 01958 424000, Address: Cha-70,70/A, Rupayan Millennium Square (9A), Progoti Sharoni, North Badda, Gulshan,
        Dhaka-1212, Bangladesh, https://www.suffixit.com"
      />
      <meta name="Googlebot" content="all" />
      <meta name="language" content="en" />
      <meta http-equiv="imagetoolbar" content="no" />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <meta name="Rating" content="General" />
      <meta name="resource-type" content="document" />
      <meta name="distribution" content="Global" />
      <meta name="coverage" content="Worldwide" />
      <meta name="Server" content="New" />
      <meta
        name="page-topic"
        content="Software Development, Custom Software Solutions, Website Design and Development, Domain and Web Hosting in Bangladesh, IT Services, Internet of Things (IoT) Solutions, IoT Development, ERP Software, HR and Payroll Software, E-commerce Solutions, Mobile App Development, Digital Transformation, Search Engine Optimization (SEO), Social Media Marketing (SMM), and Bulk SMS Services" />
      <meta
        name="audience"
        content="all, experts, advanced, professionals, business"
      />
      <meta name="reply-to" content="info@suffixit.com" />
      <meta
        name="classification"
        content="software company in Bangladesh,custom software development,Software Development Company in Bangladesh"
      />
      <meta
        name="Copyright"
        content="Copyright (c) 2017-2022 Suffix IT Limited"
      />
      <meta content="ALL" name="robots" />
      <meta name="owner" content="index.html" />
      <meta
        property="og:title"
        content="Software Company in Bangladesh | Suffix IT Limited"
      />
      <meta
        property="og:description"
        content="Suffix IT Limited is an ICT Solution Service provider along with website &amp; software development Firm inside Bangladesh preserved by a number of professionals involved in Software Improvement, Freelancing as well as BPO services."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://www.suffixit.com/" />
      <meta property="og:image" content={logo} />
    </Helmet>
  );
};

export default SEOComponent;
