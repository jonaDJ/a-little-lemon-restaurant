import React from "react";
import "./Button.scss";

const Button = ({ text, onClick, style, disabled = false }) => {
  return (
    <button
      className="button-class"
      onClick={onClick}
      style={style}
      aria-label={text}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
