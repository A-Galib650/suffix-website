import React from 'react';

const BenefitesMonitoring = () => {
    const list1 = [
        {
            id: 1,
            list: 'Early Identifiaction of a Fault.',
        },
        {
            id: 2,
            list: 'Avoid Costly Unplanned Outages.',
        },
        {
            id: 3,
            list: 'Avoid Catastropic Failures.',
        },
        {
            id: 4,
            list: 'Extended Life Time of the Transformer.',
        },
        {
            id: 5,
            list: 'Reduces Mintenance Costs of the Transformer.',
        },
    ]
    const list2 = [
        {
            id: 1,
            list: 'Reduces Risk of the Transformer Failure & Grid Blackout.',
        },
        {
            id: 2,
            list: 'Increase the Operational Availability of the Transformer.',
        },
        {
            id: 3,
            list: 'Continually Assess the Oprational Status of the Transformer.',
        },
        {
            id: 4,
            list: 'Enhanced Overload Capability.',
        },
        {
            id: 5,
            list: 'Assist in Maintenance Planning.',
        }
    ]
    return (
        <div
            className='inventory-feature'
            style={{ padding: '80px 0px' }}
        >
            <div className='container-fluid'>
                <h1 className='text-center' style={{
                    fontSize: '28px',
                    // fontWeight: '700',
                    color: ' #80bfff',
                }}>
                    Benefits of the Monitoring System
                </h1>
                <div className='row d-flex justify-content-around align-items-center px-5'>
                    <div
                        className='col-md-5'
                        data-aos='fade-right'
                        data-aos-offset='300'
                        data-aos-easing='ease-in-sine'
                    >
                        {
                            list1.map((data) => {
                                return (
                                    <li className='pt-3'
                                        style={{
                                            fontSize: '15px',
                                            textAlign: 'left',
                                            paddingLeft: '20px',
                                        }}
                                        key={data.id}
                                    >
                                        {data?.list}
                                    </li>
                                )
                            })
                        }

                    </div>

                    <div
                        className='col-md-5'
                        data-aos='fade-left'
                        data-aos-offset='300'
                        data-aos-easing='ease-in-sine'
                    >

                        {list2.map((data) => {
                            return (
                                <li
                                    className='pt-3'
                                    style={{
                                        fontSize: '15px',
                                        textAlign: 'left',
                                        paddingLeft: '20px',
                                    }}
                                    key={data.id}
                                >
                                    {data?.list}
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitesMonitoring;