import React from "react";
import "./Button.scss";

const Button = ({ text, onClick, style }) => {
  return (
    <button className="button-class" onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default Button;
