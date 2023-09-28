import React from "react";
import "./Wrapper.scss";

const Wrapper = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Wrapper;
