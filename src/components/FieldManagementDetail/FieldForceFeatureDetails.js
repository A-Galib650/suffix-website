import React from 'react';

const FieldForceFeatureDetails = ({ feature }) => {
    const { title, img, style, description } = feature;
    return (
        <div className="col-md-5  feature mx-3 my-3" id={style}>
            <img src={img} alt="" style={{ width: '75px', height: "75px", objectFit: "contain" }} />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default FieldForceFeatureDetails;