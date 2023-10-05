import React from "react";
import "./Card.scss";
import Cycling from "../../../assets/images/Cycling.png";

const Card = ({ imageUrl, itemName, price, description }) => {
  return (
    <article className="card">
      <img src={imageUrl} alt={itemName} className="card-img" />
      <div className="card-content">
        <div className="card-info">
          <h4>{itemName}</h4>
          <p>{price}</p>
        </div>
        <p className="card-description">{description}</p>
      </div>
      <div className="delivery-info">
        <p>Order for delivery</p>
        <img src={Cycling} alt="Bicycle Icon" />
      </div>
    </article>
  );
};

export default Card;
