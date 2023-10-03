import React, { useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import BookingPage from "../pages/bookingPage/BookingPage";
import { fetchAPI } from "../../api/api";

const initializeTimes = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];

const updateTimes = (state, action) => {
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
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  useEffect(() => {
    async function fetchData() {
      const selectedDate = new Date();
      const times = await fetchAPI(selectedDate);
      dispatch({ type: "updateTimes", date: selectedDate, times });
    }

    fetchData();
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
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
