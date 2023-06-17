import React from "react";
import "./Main.scss";
import Table from "../../components/Table/Table";
import InputBox from "../../components/InputBox/InputBox";
import Chart from "../../components/Chart/Chart";
import DailyFeed from "../../components/DailyFeed/DailyFeed";
import Button from "../../components/Button/Button";
import { useState } from "react";

const Main = () => {
  const [inputValue, setInputValue] = useState();
  const [currentInputValue, setCurrentInputValue] = useState();

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setCurrentInputValue(event.target.value);
  };
  const handleButtonClick = (event) => {
    console.log(event);
    setInputValue(currentInputValue);
  };
  return (
    <div className="main-section">
      <div className="main-section__top">
        <DailyFeed />
        <div className="date-section">
          <InputBox onChange={handleInputChange} />
          <Button buttonText={"SUBMIT"} handleButtonClick={handleButtonClick} />
        </div>
      </div>

      <Table dateSelected={inputValue} />
      <Chart />
    </div>
  );
};

export default Main;
