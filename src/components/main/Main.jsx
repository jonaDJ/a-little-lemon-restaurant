import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import BookingPage from "../pages/bookingPage/BookingPage";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/reservation" element={<BookingPage />} />
      </Routes>
    </main>
  );
};

export default Main;
