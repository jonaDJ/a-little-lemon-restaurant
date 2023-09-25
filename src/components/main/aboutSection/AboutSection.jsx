import React, { useState } from "react";
import Wrapper from "../../wrapper/Wrapper";
import "./AboutSection.scss";
import img1 from "../../../assets/images/Mario and Adrian A.jpg";
import img2 from "../../../assets/images/Mario and Adrian b.jpg";
import AboutContent from "./AboutContent";

const AboutSection = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const maxCollapsedLength = 450;

  return (
    <Wrapper>
      <div className="about-block">
        <div className="about-title">
          <h2>Little lemon</h2>
          <h3>Chicago</h3>
        </div>

        <div className="about-info">
          <div className="about-desc">
            {isCollapsed ? (
              <>
                {AboutContent.slice(0, maxCollapsedLength)}
                {AboutContent.length > maxCollapsedLength && (
                  <span className="read-more-button" onClick={toggleCollapse}>
                    {" "}
                    Read More ▼
                  </span>
                )}
              </>
            ) : (
              <>
                {AboutContent}
                <span className="read-less-button" onClick={toggleCollapse}>
                  {" "}
                  Read Less ▲
                </span>
              </>
            )}
          </div>
          <div className="about-images">
            <img src={img1} alt="person1" className="about-image-1" />
            <img src={img2} alt="person2" className="about-image-2" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutSection;
