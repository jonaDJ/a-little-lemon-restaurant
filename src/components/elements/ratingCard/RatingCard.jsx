import React, { useState } from "react";
import "./RatingCard.scss";

const RatingCard = ({ name, stars, reviewHeading, comment, avatar }) => {
  const renderStars = (numStars) => {
    const filledStars = "★".repeat(numStars);
    const emptyStars = "☆".repeat(5 - numStars);
    return filledStars + emptyStars;
  };

  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <article
      className={`rating-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="rating-main">
        <div className="avatar">
          <img src={avatar} alt={`${name}'s Avatar`} />
        </div>
        <div className="rating-title">
          <h2>{name}</h2>
          <div className="rating-stars">
            <div className="stars">{renderStars(stars)}</div>
            <div className="rating">{`${stars}/5`}</div>
          </div>
        </div>
      </div>
      <div className="rating-comment">
        <div className="review-heading">{reviewHeading}</div>
        <div className={`comment ${isHovered ? "expanded" : ""}`}>
          {comment}
        </div>
      </div>
    </article>
  );
};

export default RatingCard;
