import React from "react";
import "./InputBox.scss";

const InputBox = () => {
  return (
    <div className="input-date">
      <label className="input-date__label">REPORTING DATE: </label>
      <input
        type="date"
        className="input-date__input"
        placeholder="dd/mm/yyyy"
      />
    </div>
  );
};

export default InputBox;
