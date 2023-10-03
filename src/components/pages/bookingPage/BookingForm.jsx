import React from "react";
import Button from "../../elements/button/Button";
import "./BookingForm.scss";

const BookingForm = ({
  reservationData,
  setReservationData,
  availableTimes,
  handleReservationSubmit,
  dispatch,
}) => {
  const handleOnChange = (e, fieldName) => {
    const { value } = e.target;

    if (fieldName === "date") dispatch({ type: "updateTimes", date: value });

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
              <label htmlFor="res-date" id="date-label">
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
                aria-required="true"
                aria-labelledby="date-label"
              />
            </div>

            <div className="form-field">
              <label htmlFor="res-time" id="time-label">
                Time<span className="required-asterisk">*</span>:
              </label>
              <select
                className="form-field"
                id="res-time"
                name="time"
                value={reservationData.time}
                onChange={(e) => handleOnChange(e, "time")}
                required
                aria-required="true"
                aria-labelledby="time-label"
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
              <label htmlFor="res-guests" id="guests-label">
                No. of Guests<span className="required-asterisk">*</span>:
              </label>
              <input
                className="form-field"
                type="number"
                id="res-guests"
                name="guests"
                value={reservationData.guests}
                onChange={(e) => handleOnChange(e, "guests")}
                required
                aria-required="true"
                aria-labelledby="guests-label"
                min={1}
              />
            </div>
            <div className="form-field">
              <label htmlFor="res-occasion" id="occasion-label">
                Occasion:
              </label>
              <select
                className="form-field"
                id="res-occasion"
                name="occasion"
                value={reservationData.occasion}
                onChange={(e) => handleOnChange(e, "occasion")}
                aria-labelledby="occasion-label"
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
              <label htmlFor="res-name" id="name-label">
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
                aria-labelledby="name-label"
              />
            </div>

            <div className="form-field email">
              <label htmlFor="res-email" id="email-label">
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
                aria-labelledby="email-label"
              />
            </div>

            <div className="form-field phone">
              <label htmlFor="res-phone" id="phone-label">
                Phone:
              </label>
              <input
                className="form-field"
                type="tel"
                id="res-phone"
                name="phone"
                value={reservationData.phone}
                onChange={(e) => handleOnChange(e, "phone")}
                aria-labelledby="phone-label"
              />
            </div>

            <div className="form-field form-textarea specialRequest">
              <label htmlFor="res-special-request" id="special-request-label">
                Special Requests:
              </label>
              <textarea
                className="form-field form-textarea"
                id="res-special-request"
                name="specialRequests"
                value={reservationData.specialRequests}
                onChange={(e) => handleOnChange(e, "specialRequests")}
                aria-labelledby="special-request-label"
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
