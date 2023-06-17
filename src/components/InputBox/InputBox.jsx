import React from "react";
import "./InputBox.scss";

const InputBox = ({ onChange }) => {
  let currentDate = Date.now;
  return (
    <div className="input-date">
      <label className="input-date__label">REPORTING DATE: </label>
      <input
        type="date"
        className="input-date__input"
        placeholder="yyyy-mm-dd"
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
