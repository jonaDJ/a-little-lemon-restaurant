import React from "react";
import Wrapper from "../../wrapper/Wrapper";
import RatingCard from "../../elements/ratingCard/RatingCard";
import "./Testimonals.scss";
import avatar1 from "../../../assets/images/avatar1.jpg";
import avatar2 from "../../../assets/images/avatar2.jpg";
import avatar3 from "../../../assets/images/avatar3.jpg";

const testimonialData = [
  {
    avatar: avatar1,
    name: "Jane Smith",
    stars: 4,
    reviewHeading: "Delicious Food!",
    comment:
      "I had a wonderful dining experience at Little Lemon Restaurant. The food was absolutely delicious, and the presentation was impressive. I highly recommend the lemon chicken dish!",
  },
  {
    avatar: avatar2,
    name: "John Doe",
    stars: 3,
    reviewHeading: "Good Atmosphere",
    comment:
      "The restaurant has a cozy and inviting atmosphere. However, I found the prices to be a bit on the higher side. The service was friendly, though.",
  },
  {
    avatar: avatar3,
    name: "Emily Johnson",
    stars: 5,
    reviewHeading: "Excellent Service",
    comment:
      "Little Lemon Restaurant exceeded my expectations. The service was impeccable, and the staff went above and beyond to make our dining experience memorable. The desserts were to die for!",
  },
  {
    avatar: avatar3,
    name: "David Wilson",
    stars: 2,
    reviewHeading: "Mixed Feelings",
    comment:
      "While the appetizers were delightful, I was disappointed with the main course. It lacked flavor, and the portion size was smaller than expected. The cocktails, on the other hand, were excellent.",
  },
];

const Testimonals = () => {
  return (
    <Wrapper>
      <div className="testimonials-block">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="cards-rating">
          {testimonialData.map((testimonial, index) => (
            <RatingCard
              key={index}
              avatar={testimonial.avatar}
              name={testimonial.name}
              stars={testimonial.stars}
              reviewHeading={testimonial.reviewHeading}
              comment={testimonial.comment}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonals;
