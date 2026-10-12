import React from 'react';
import Procurement from '../../../media/Procurement/Successful purchase-bro.svg';

const ProcurementIntro = () => {
    return (
        <div className="Procurement"  style={{ padding: "50px 0px",minHeight: "auto"}}>
            <div className="container-fluid">
                <div className="row d-flex justify-content-around align-items-center px-5">
                    <div className="col-md-5" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img src={Procurement} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />

                    </div>
                    <div className="col-md-5" data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h1 style={{ fontSize: "28px", fontWeight: "500" }}>Procurement</h1>
                        <p className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>The Purchase Order module is not just a vehicle to create and track purchase orders. Included is a powerful Replenishment Planning system, which using demand driven principles, calculates the net requirements of all the ‘bought out’ items in your inventory system. Using powerful buying rule algorithms, the Replenishment Planning system collects all of the necessary data and does all of the math necessary to help planners to decide on the quantities to order. Furthermore, the system uses the landed cost routing (from the Landed Cost Tracking module) to calculate the expected landed costs of the new shipments, to give you the new costs at hand before they are delivered thereby enabling you to be proactive with your selling prices and margin control.</p>

                    </div>

                </div>


            </div>

        </div>
    );
};

export default ProcurementIntro;