import React, { useState } from "react";
import "./BookingPage.scss";
import BookingForm from "./BookingForm";
import Wrapper from "../../wrapper/Wrapper";

const BookingPage = ({
  availableTimes,
  dispatch,
  submitForm,
  setConfirmationData,
}) => {
  const initialData = {
    date: "",
    time: "",
    guests: "1",
    name: "",
    occasion: "None",
    email: "",
    phone: "",
    specialRequests: "",
  };
  const [reservationData, setReservationData] = useState(initialData);

  const handleReservationSubmit = async (e) => {
    await submitForm(reservationData);
    setConfirmationData(reservationData);
  };

  return (
    <div className="reservation-wrapper">
      <Wrapper>
        <div className="reservation-container">
          <div className="reservation-text">
            <h2>Table Reservation</h2>
            <p>
              Experience the perfect blend of exquisite cuisine and exceptional
              service at Little Lemon, where every meal is a celebration of
              flavors.
            </p>
            <p>
              Whether you're planning a romantic dinner for two, a family
              gathering, or a special occasion, we're here to make your dining
              experience memorable.
            </p>
            <p>Book your table now to savor the moments with us.</p>
          </div>

          <BookingForm
            reservationData={reservationData}
            setReservationData={setReservationData}
            availableTimes={availableTimes}
            handleReservationSubmit={handleReservationSubmit}
            dispatch={dispatch}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default BookingPage;
