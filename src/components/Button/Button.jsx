import React from "react";
import "./Button.scss";

const Button = ({ buttonText, handleButtonClick }) => {
  return (
    <div className="button" onClick={handleButtonClick}>
      {buttonText}
    </div>
  );
};

export default Button;
