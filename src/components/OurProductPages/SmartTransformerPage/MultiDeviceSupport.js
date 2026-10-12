import React from 'react';
import image from "../../../media/smartTransformer/image (5).png"

const MultiDeviceSupport = () => {
    return (
        <div
            className='inventory-control'
            style={{
                padding: '80px 0px',
                height: 'auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'none',
                backgroundSize: 'cover',
            }}
        >
            <div className='container-fluid'>
                <div className='row d-flex justify-content-around align-items-center px-5'>
                    <div
                        className='col-md-6'
                        data-aos='fade-right'
                        data-aos-offset='300'
                        data-aos-easing='ease-in-sine'
                    >
                        <h1 style={{ fontSize: '28px', fontWeight: '500' }}>
                            Easily Accissible from Anywhere through Mobile & PC
                        </h1>
                    </div>
                    <div
                        className='col-md-6'
                        data-aos='fade-left'
                        data-aos-offset='300'
                        data-aos-easing='ease-in-sine'
                    >
                        <img
                            className='mb-5 rounded'
                            src={image}
                            alt='interconnect billing'
                            style={{ width: '100%', objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiDeviceSupport;