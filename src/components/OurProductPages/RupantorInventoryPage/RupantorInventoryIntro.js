import React from 'react';
import inventoryIntro from "../../../media/RupantarInventory/Server-amico.svg";

const RupantorInventoryIntro = () => {
    return (
        <div className="rupantor-inventory-management-intro" id="rupantor-inventory-intro" style={{ paddingBottom: "50px" }}>
            <div className="container-fluid">
                <div className="row d-flex justify-content-around align-items-center px-5">
                    <div className="col-md-5" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img src={inventoryIntro} alt="interconnect billing" style={{ width: "100%", objectFit: "contain" }} />

                    </div>
                    <div className="col-md-5" data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h1 style={{ fontSize: "28px", fontWeight: "500" }}>Inventory Management</h1>
                        <p className="pt-3" style={{ fontSize: "15px", textAlign: "justify" }}>The Rupantor Inventory Control module is core to the manufacturing and distribution systems and processes built into Rupantor ERP. Inventory is used to control the value and quantities of finished products, sub-assemblies, components, raw material, consumables and non-merchandise items. The inventory master ﬁle allows you to maintain and control over two hundred fields and attributes giving enormous flexibility when dealing with different types of business.</p>

                    </div>

                </div>


            </div>

        </div>
    );
};

export default RupantorInventoryIntro;