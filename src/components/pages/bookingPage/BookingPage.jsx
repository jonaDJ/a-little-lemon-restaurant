import React, { useState } from "react";
import Wrapper from "../../wrapper/Wrapper";
import "./BookingPage.scss";
import BookingForm from "./BookingForm";

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
    <section className="res-table-section" aria-labelledby="reservation-title">
      <Wrapper>
        <div className="reservation-page">
          <div className="reservation-title">
            <h2 id="reservation-title">Table Reservation</h2>
            <h4>We are looking forward to serving you</h4>
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
    </section>
  );
};

export default BookingPage;
