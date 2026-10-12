import React from "react";
import { ScrollUp } from "../../../helpers/ScrollUp";
import Footer from "../../Footer/Footer";
import IndustrialBanner from "../../IndustrialMonitoring/IndustrialBanner";
import IemsComponent from "../../IndustrialMonitoring/IemsComponent";
import IemsFeature from "../../IndustrialMonitoring/IemsFeature";
import IemsDiagram from "../../IndustrialMonitoring/IemsDiagram";
import IemsDashBoard from "../../IndustrialMonitoring/IemsDashBoard";
const IndustrialEnergy = () => {
    ScrollUp();
    return (
        <div className="overflow-hidden">
        sdf
            <IndustrialBanner />
            <IemsComponent></IemsComponent>
            <IemsFeature></IemsFeature>
            <IemsDiagram></IemsDiagram>
            <IemsDashBoard></IemsDashBoard>
            <Footer />
        </div>
    );
};

export default IndustrialEnergy;
