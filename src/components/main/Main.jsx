import React, { useReducer, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/home/Home";
import BookingPage from "../pages/bookingPage/BookingPage";
import { submitAPI } from "../../api/api";
import ConfirmedBooking from "../pages/confirmationBooking/ConfirmedBooking";

export const initializeTimes = [
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
];

export const updateTimes = (state, action) => {
  if (action.type === "updateTimes") {
    const selectedDate = new Date(action.date);
    const dayOfWeek = selectedDate.getDay();

    const weekendTimes = ["5:00 PM", "6:00 PM", "7:00 PM"];
    const weekdayTimes = ["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];

    if (dayOfWeek === 6 || dayOfWeek === 5) return weekendTimes;
    return action?.times ? action.times : weekdayTimes;
  }
  return state;
};

const Main = () => {
  const navigate = useNavigate();

  const [confirmationData, setConfirmationData] = useState(null);

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  const submitForm = async (formData) => {
    const isSubmitted = await submitAPI(formData);
    if (isSubmitted) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/reservation"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
              setConfirmationData={setConfirmationData}
            />
          }
        />
        <Route
          path="/confirmed"
          element={<ConfirmedBooking confirmationData={confirmationData} />}
        />
      </Routes>
    </main>
  );
};

export default Main;
