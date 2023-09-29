import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import BookingPage from "../pages/bookingPage/BookingPage";

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
    const dayOfWeek = selectedDate.getDay(); // 0 for Sunday, 1 for Monday, and so on

    const weekendTimes = ["5:00 PM", "6:00 PM", "7:00 PM"];
    const weekdayTimes = ["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];

    if (dayOfWeek === 6 || dayOfWeek === 5) return weekendTimes;
    else return weekdayTimes;
  }

  return state;
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/reservation"
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
