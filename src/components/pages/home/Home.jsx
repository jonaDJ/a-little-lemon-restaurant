import React from "react";
import { Element } from "react-scroll";
import "./Home.scss";
import AboutSection from "./aboutSection/AboutSection";
import CallToAction from "./callToAction/CallToAction";
import HighlightsSection from "./highlightsSection/HighlightsSection";
import Testimonals from "./testimonialsSection/Testimonals";

const Home = () => {
  return (
    <>
      <Element name="callToAction" id="callToAction">
        <CallToAction />
      </Element>
      <Element name="highlights" id="highlights">
        <HighlightsSection />
      </Element>
      <Element name="testimonials" id="testimonials">
        <Testimonals />
      </Element>
      <Element name="about" id="about">
        <AboutSection />
      </Element>
    </>
  );
};

export default Home;
