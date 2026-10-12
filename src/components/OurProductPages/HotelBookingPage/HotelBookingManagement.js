import React from 'react';
import booking from '../../../media/ProductPages/HotelBooking/booking.svg';

const HotelBookingManagement = () => {
    return (
        <div className="hotel-booking" style={{ padding: "50px 0px"}}>
            <div className="container-fluid" >
                <div className="row d-flex justify-content-around align-items-center px-5 text-justify">
                    <div className="col-md-5"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img src={booking} alt="booking" style={{ width: '100%', objectFit: "contain" }} />
                    </div>
                    <div className="col-md-5" data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h1 style={{ fontSize: '28px' }}>Multiple room bookings</h1>
                        <p style={{ fontSize: '15px' }}>Guests can book more than one room within a single reservation. During the booking process, they will see the available rooms for the selected period and can pick one or more rooms and the number of guests.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelBookingManagement;