import React, { useState } from "react";
import Wrapper from "../../wrapper/Wrapper";
import "./BookingPage.scss";
import BookingForm from "./BookingForm";

const BookingPage = () => {
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

  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const handleReservationSubmit = () => {
    console.log(reservationData);
    setBooked(true);
  };

  return (
    <section className="res-table-section">
      <Wrapper>
        <div className="reservation-page">
          <div className="reservation-title">
            <h2>Table Reservation</h2>
            <h4>We are looking forward to serving you</h4>
          </div>
          {booked ? (
            <div className="reservation-confirmation">
              <div className="confirmation-header">
                <h3>Reservation Confirmation</h3>
                <p>
                  Thank you for choosing Little Lemon Restaurant. We're excited
                  to have you dine with us!
                </p>
              </div>
              <div className="confirmation-details">
                <div className="reservation-info">
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
                <div className="contact-info">
                  <h4>Contact Information:</h4>
                  <p>
                    An email confirmation has been sent to{" "}
                    <strong>{reservationData.email}</strong>. If you have any
                    additional requests or need to make changes, please don't
                    hesitate to contact us.
                  </p>
                </div>
              </div>
              <p className="closing-message">
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
            />
          )}
        </div>
      </Wrapper>
    </section>
  );
};

export default BookingPage;
