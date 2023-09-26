import React from "react";
import Wrapper from "../../../wrapper/Wrapper";
import "./CallToAction.scss";
import restaurantfood from "../../../../assets/images/restauranfood.jpg";
import Button from "../../../elements/button/Button";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  const resTableHandler = () => {
    navigate("/reservation");
  };

  return (
    <section className="hero-section">
      <Wrapper>
        <div className="hero-container">
          <div className="hero-info">
            <div className="hero-matter">
              <div className="hero-title">
                <h3 className="subtitle">Welcome to</h3>
                <h1 className="title">Little Lemon</h1>
              </div>
              <p className="description">
                At Little Lemon, we believe that dining is not just about food;
                it's an experience. Nestled in the heart of the city, our
                restaurant offers you a delightful journey through flavors that
                will tantalize your taste buds and leave you craving for more.
                <br />
                <br />
                Our culinary team, led by renowned chefs, creates masterpieces
                on every plate. From locally sourced ingredients to
                international culinary techniques, we bring you dishes that are
                not only delicious but also a work of art.
              </p>
            </div>
            <Button text="Reserve a table" onClick={resTableHandler} />
          </div>
          <img src={restaurantfood} alt="food" className="heroImage" />
        </div>
      </Wrapper>
    </section>
  );
};

export default CallToAction;
