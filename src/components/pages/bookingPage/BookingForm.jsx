import React from "react";
import Button from "../../elements/button/Button";
import "./BookingForm.scss";

const BookingForm = ({
  reservationData,
  setReservationData,
  availableTimes,
  handleReservationSubmit,
}) => {
  const handleOnChange = (e, fieldName) => {
    const { value } = e.target;
    setReservationData({
      ...reservationData,
      [fieldName]: value,
    });
  };

  return (
    <div className="booking-form-container">
      <form className="reservation-form" onSubmit={handleReservationSubmit}>
        <fieldset className="table-details-fieldset">
          <legend>Table Reservation Details:</legend>
          <div className="table-forms">
            <div className="form-field">
              <label htmlFor="res-date">
                Date<span className="required-asterisk">*</span>:
              </label>
              <input
                className="form-field"
                type="date"
                id="res-date"
                name="date"
                value={reservationData.date}
                onChange={(e) => handleOnChange(e, "date")}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="res-time">
                Time<span className="required-asterisk">*</span>:
              </label>
              <select
                className="form-field"
                id="res-time"
                name="time"
                value={reservationData.time}
                onChange={(e) => handleOnChange(e, "time")}
              >
                <option value="">Select a time</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="res-guests">No. of Guests:</label>
              <input
                className="form-field"
                type="number"
                id="res-guests"
                name="guests"
                value={reservationData.guests}
                onChange={(e) => handleOnChange(e, "guests")}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="res-occasion">Occasion:</label>
              <select
                className="form-field"
                id="res-occasion"
                name="occasion"
                value={reservationData.occasion}
                onChange={(e) => handleOnChange(e, "occasion")}
              >
                <option value="None">None</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset className="user-details-fieldset">
          <legend>Your Details:</legend>
          <div className="user-form">
            <div className="form-field name">
              <label htmlFor="res-name">
                Name<span className="required-asterisk">*</span>:
              </label>
              <input
                className="form-field"
                type="text"
                id="res-name"
                name="name"
                value={reservationData.name}
                onChange={(e) => handleOnChange(e, "name")}
                required
              />
            </div>

            <div className="form-field phone">
              <label htmlFor="res-phone">Phone:</label>
              <input
                className="form-field"
                type="tel"
                id="res-phone"
                name="phone"
                value={reservationData.phone}
                onChange={(e) => handleOnChange(e, "phone")}
              />
            </div>

            <div className="form-field email">
              <label htmlFor="res-email">
                Email<span className="required-asterisk">*</span>:
              </label>
              <input
                className="form-field"
                type="email"
                id="res-email"
                name="email"
                value={reservationData.email}
                onChange={(e) => handleOnChange(e, "email")}
                required
              />
            </div>

            <div className="form-field form-textarea specialRequest">
              <label htmlFor="res-special-request">Special Requests:</label>
              <textarea
                className="form-field form-textarea"
                id="res-special-request"
                name="specialRequests"
                value={reservationData.specialRequests}
                onChange={(e) => handleOnChange(e, "specialRequests")}
              ></textarea>
            </div>
          </div>
        </fieldset>
        <div className="form-fields">
          <Button text="Reserve Table" />
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
