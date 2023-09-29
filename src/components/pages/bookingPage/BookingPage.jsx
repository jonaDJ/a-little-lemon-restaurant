import React, { useState } from "react";
import Wrapper from "../../wrapper/Wrapper";
import "./BookingPage.scss";
import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, dispatch }) => {
  const initialData = {
    date: "",
    time: "",
    guests: "0",
    name: "",
    occasion: "None",
    email: "",
    phone: "",
    specialRequests: "",
  };

  const [reservationData, setReservationData] = useState(initialData);
  const [booked, setBooked] = useState(false);

  const handleReservationSubmit = () => {
    console.log(reservationData);
    setBooked(true);
  };

  return (
    <section className="res-table-section" aria-labelledby="reservation-title">
      <Wrapper>
        <div className="reservation-page">
          <div className="reservation-title">
            <h2 id="reservation-title">Table Reservation</h2>
            <h4>We are looking forward to serving you</h4>
          </div>
          {booked ? (
            <div
              className="reservation-confirmation"
              aria-labelledby="confirmation-header"
            >
              <div className="confirmation-header">
                <h3 id="confirmation-header">Reservation Confirmation</h3>
                <p>
                  Thank you for choosing Little Lemon Restaurant. We're excited
                  to have you dine with us!
                </p>
              </div>
              <div
                className="confirmation-details"
                aria-labelledby="reservation-info contact-info"
              >
                <div className="reservation-info" id="reservation-info">
                  <h4>Your Reservation Details:</h4>
                  <ul>
                    <li>
                      <strong>Name:</strong> {reservationData.name}
                    </li>
                    <li>
                      <strong>Date & Time:</strong> {reservationData.date} at{" "}
                      {reservationData.time}
                    </li>
                    <li>
                      <strong>No. of Guests:</strong> {reservationData.guests}
                    </li>
                    <li>
                      <strong>Occasion:</strong> {reservationData.occasion}
                    </li>
                    {reservationData.specialRequests && (
                      <li>
                        <strong>Special Requests:</strong>{" "}
                        {reservationData.specialRequests}
                      </li>
                    )}
                  </ul>
                </div>
                <div className="contact-info" id="contact-info">
                  <h4>Contact Information:</h4>
                  <p>
                    An email confirmation has been sent to{" "}
                    <strong>{reservationData.email}</strong>. If you have any
                    additional requests or need to make changes, please don't
                    hesitate to contact us.
                  </p>
                </div>
              </div>
              <p className="closing-message" aria-label="Closing Message">
                We look forward to serving you and creating memorable moments at
                Little Lemon Restaurant. Bon appétit!
              </p>
            </div>
          ) : (
            <BookingForm
              reservationData={reservationData}
              setReservationData={setReservationData}
              availableTimes={availableTimes}
              handleReservationSubmit={handleReservationSubmit}
              dispatch={dispatch}
            />
          )}
        </div>
      </Wrapper>
    </section>
  );
};

export default BookingPage;
