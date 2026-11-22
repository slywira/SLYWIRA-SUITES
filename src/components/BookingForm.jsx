import "./BookingForm.css";

function BookingForm() {
  return (
    <div className="booking_menu">
      <div className="booking-field booking-date-field">
        <label htmlFor="arriving-date">Arriving on</label>
        <input id="arriving-date" name="arrivingDate" type="date" />
      </div>
      <div className="booking-field booking-date-field">
        <label htmlFor="departure-date">Departure</label>
        <input id="departure-date" name="departureDate" type="date" />
      </div>
      <div className="booking-field booking-guest-field">
        <label htmlFor="adult">Adults</label>
        <select id="adult" name="adult">
          <option value="">Select</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>
      <div className="booking-field booking-guest-field">
        <label htmlFor="children">Children</label>
        <select id="children" name="children">
          <option value="">Select</option>
          <option>0</option>
          <option>1</option>
        </select>
      </div>
      <button className="booknow" type="button">BOOK NOW</button>
    </div>
  );
}

export default BookingForm;
