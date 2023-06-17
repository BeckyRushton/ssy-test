import React from "react";
import "./InputBox.scss";

const InputBox = ({ onChange }) => {
  return (
    <div className="input-date">
      <label className="input-date__label">REPORTING DATE: </label>

      <select name="dateOption" id="inputBox" onChange={onChange}>
        <option value="all">See all</option>
        <option value="2024-01-01">2024-01-01</option>
        <option value="2025-01-01">2025-01-01</option>
        <option value="2026-01-01">2026-01-01</option>
      </select>
    </div>
  );
};
// Need to add an if statement that makes sure that if see all is the option, then table resets data
export default InputBox;
