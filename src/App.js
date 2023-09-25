import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="grid-container">
      <Header className="head-section" />
      <Main className="main-section" />
      <Footer className="footer-section" />
    </div>
  );
}

export default App;
