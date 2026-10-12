import React from 'react';
import data from './LMSFeatureData';
const LMSFeature = () => {
    return (
        <div style={{ backgroundColor: "rgb(252, 252, 252)", backgroundPosition: "center", backgroundRepeat: "none", height: "auto" }}>
            <div className="LMSFeature container" style={{ paddingTop: "90px" }}>
                <h1 className="text-center" style={{ fontSize: "30px", fontWeight: "500", color: "#525252" }}>Suffix LMS Key Features</h1>
                <h2 className="text-center" style={{ fontSize: "24px" }}>All you need to know about Suffix LMS.</h2>
                <div className="row d-flex justify-content-around LMSFeature-content text-center px-5" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
                    {data.map((item, index) => {
                        return (
                            <div className="col-md-3 col-xs-12 col-sm-6  d-flex flex-column align-items-center" key={index}>
                                <img src={item?.img} alt="" style={{ width: '50%', height: "50%", objectFit: "contain" }} />
                                <h2 className="pt-4" style={{ fontSize: '16px' }}>{item?.title}</h2>

                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    );
};

export default LMSFeature;