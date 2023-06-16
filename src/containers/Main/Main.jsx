import React from "react";
import "./Main.scss";
import Table from "../../components/Table/Table";
import InputBox from "../../components/InputBox/InputBox";
import Chart from "../../components/Chart/Chart";
import DailyFeed from "../../components/DailyFeed/DailyFeed";

const Main = () => {
  return (
    <div className="main-section">
      <DailyFeed />
      <InputBox />
      <Table />
      <Chart />
    </div>
  );
};

export default Main;
