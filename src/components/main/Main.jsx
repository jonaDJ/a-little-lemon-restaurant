import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home"; // Import your page components here
import ResTableSection from "../pages/resTableSection/ResTableSection"; // Import other page components as needed

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/reservation" element={<ResTableSection />} />
      </Routes>
    </main>
  );
};

export default Main;
