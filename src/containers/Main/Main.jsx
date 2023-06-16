import React from "react";
import "./Main.scss";
import Table from "../../components/Table/Table";
import InputBox from "../../components/InputBox/InputBox";
import Chart from "../../components/Chart/Chart";
import DailyFeed from "../../components/DailyFeed/DailyFeed";
import Button from "../../components/Button/Button";

const Main = () => {
  return (
    <div className="main-section">
      <div className="main-section__top">
        <DailyFeed />
        <div className="date-section">
          <InputBox />
          <Button buttonText={"SUBMIT"} />
        </div>
      </div>

      <Table />
      <Chart />
    </div>
  );
};

export default Main;
