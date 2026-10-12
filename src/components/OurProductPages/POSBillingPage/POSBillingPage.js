import { Helmet } from "react-helmet"
import { ScrollUp } from "../../../helpers/ScrollUp"
import FieldForceDemo from "../../../Shared/FieldForceDemo"
import SEOComponent from "../../common/SEOComponent"
import OurProductHeader from "../../FieldManagementDetail/OurProductHeader"
import Footer from "../../Footer/Footer"
import POSBillingIntro from "./POSBillingIntro"
import POSFeature from "./POSFeature"


const POSBillingPage = () => {
  ScrollUp();
  return (
    <div className="pos-billing overflow-hidden">
      <SEOComponent />
      <OurProductHeader
        title="Smart POS & Billing System"
        headerParagraph="Leading Retail Pos Software That Retailers Love To Use"
        hyperRef=""
      />
      <>
        <POSBillingIntro />
        <POSFeature />
        <FieldForceDemo />
      </>


      <Footer />
    </div>
  )
}

export default POSBillingPage
