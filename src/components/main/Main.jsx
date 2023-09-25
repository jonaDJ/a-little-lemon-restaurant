import "./Main.scss";
import AboutSection from "./aboutSection/AboutSection";
import HeroSection from "./heroSection/HeroSection";
import HighlightsSection from "./highlightsSection/HighlightsSection";
import Testimonals from "./testimonialsSection/Testimonals";
const Main = () => {
  return (
    <main>
      <section className="hero-section">
        <HeroSection />
      </section>
      <section className="highlight-section">
        <HighlightsSection />
      </section>
      <section className="testimonals-section">
        <Testimonals />
      </section>
      <section className="about-section">
        <AboutSection />
      </section>
    </main>
  );
};

export default Main;
