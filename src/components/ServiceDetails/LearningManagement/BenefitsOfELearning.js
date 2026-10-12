import React from 'react';
import data from './BenefitsOfELearningData';

const BenefitsOfELearning = () => {
    return (
        <div className="BenefitsOfELearning container" style={{ paddingTop: "90px" }}>
            <h1 className="text-center" style={{ fontSize: "30px", fontWeight: "500", color: "#525252" }}>Benefits Of E-Learning For Students</h1>
            <h2 className="text-center" style={{ fontSize: "24px" }}>Student will enjoy the total solution</h2>
            <div className="row d-flex justify-content-around BenefitsOfELearning-content text-center px-5" style={{ paddingTop: "150px", paddingBottom: "150px" }}>
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
    );
};

export default BenefitsOfELearning;