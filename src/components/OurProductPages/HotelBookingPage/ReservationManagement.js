import React from 'react';
import reservation from '../../../media/ProductPages/HotelBooking/reservation.svg';

const ReservationManagement = () => {
    return (
        <div className="reservation-management" style={{ background: "rgb(252, 252, 252)", height: "auto", backgroundPosition: "center", backgroundRepeat: "none", backgroundSize: "cover", paddingBottom: "50px" }} >
            <div className="container-fluid">
                <div className="row d-flex justify-content-around align-items-center px-5 text-justify">
                    <div className="col-md-5 pt-5" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h1 style={{ fontSize: '28px' }}>Reservations management</h1>
                        <p style={{ fontSize: '15px' }}>The integrated reservation management system enables administrators to manage booking and customer details and add bookings manually. They can keep track of bookings by date and status on the room availability calendar.</p>
                    </div>
                    <div className="col-md-5 pt-5" data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img src={reservation} alt="booking" style={{ width: '100%', objectFit: "contain" }} />
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ReservationManagement;