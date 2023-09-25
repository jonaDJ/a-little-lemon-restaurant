import React from "react";
import "./Wrapper.scss"; // Import the Wrapper styles

const Wrapper = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Wrapper;
