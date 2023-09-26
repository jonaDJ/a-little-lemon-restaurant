import React from "react";
import Wrapper from "../../../wrapper/Wrapper";
import "./HighlightsSection.scss";
import Button from "../../../elements/button/Button";
import Card from "../../../elements/card/Card";

const cardData = [
  {
    itemName: "Greek salad",
    imageUrl: require("../../../../assets/images/lemon dessert.jpg"),
    price: "$10.99",
    description:
      " The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    itemName: "Bruchetta",
    imageUrl: require("../../../../assets/images/bruchetta.png"),
    price: "$12.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    itemName: "Lemon Dessert",
    imageUrl: require("../../../../assets/images/lemon dessert.jpg"),
    price: "$8.99",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const HighlightsSection = () => {
  return (
    <section className="highlight-section">
      <Wrapper>
        <div className="highlights-section">
          <div className="section-header">
            <h2>This week's specials</h2>
            <Button text="Order Menu" />
          </div>
          <div className="card-container">
            {cardData.map((card, index) => (
              <Card
                key={index}
                imageUrl={card.imageUrl}
                itemName={card.itemName}
                price={card.price}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HighlightsSection;
