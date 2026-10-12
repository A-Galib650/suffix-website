import { useEffect } from "react";
import { Helmet } from "react-helmet";
import FieldForceDemo from "../../Shared/FieldForceDemo";
import SEOComponent from "../common/SEOComponent";
import Footer from "../Footer/Footer";
import FieldForceFeature from "./FieldForceFeature";
import FieldForceManagementDefinition from "./FieldForceManagementDefinition";
import FieldForceManagementIntro from "./FieldForceManagementIntro";
import FieldForceWork from "./FieldForceWork";
import OurProductHeader from "./OurProductHeader";



const FieldManagementDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])
  return (
    <div className="field-management-detail overflow-hidden">
      <SEOComponent />

      <OurProductHeader
        title="Suffix Field Force Management"
        headerParagraph=" Real-Time Field Force Tracking and Monitoring Solution."
        hyperRef="field-force-management#fieldForceDefinition"
      />
    

      <FieldForceManagementDefinition />
      <FieldForceManagementIntro />
      <FieldForceFeature />
      <FieldForceWork />
      <FieldForceDemo />
      <Footer />
    </div>
  )
}

export default FieldManagementDetail
