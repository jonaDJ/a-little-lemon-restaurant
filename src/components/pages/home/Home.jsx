import React from "react";
import { Element } from "react-scroll"; // Import Element from react-scroll
import "./Home.scss";
import AboutSection from "./aboutSection/AboutSection";
import CallToAction from "./callToAction/CallToAction";
import HighlightsSection from "./highlightsSection/HighlightsSection";
import Testimonals from "./testimonialsSection/Testimonals";

const Home = () => {
  return (
    <>
      <CallToAction />
      <Element name="highlights">
        <HighlightsSection />
      </Element>
      <Element name="testimonials">
        <Testimonals />
      </Element>
      <Element name="about">
        <AboutSection />
      </Element>
    </>
  );
};

export default Home;
