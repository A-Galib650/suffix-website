import booking from '../../../media/ProductPages/HotelBooking/booking.svg';
import reservation from '../../../media/ProductPages/HotelBooking/reservation.svg';
import HotelBookingManagement from './HotelBookingManagement';
import ReservationManagement from './ReservationManagement';
const HotelBookingSystem = () => {
  return (
    <div style={{ padding: "0px 0px" }} id="hotelManagementSystem">
      <HotelBookingManagement />
      <ReservationManagement />
    </div>
  )
}

export default HotelBookingSystem
