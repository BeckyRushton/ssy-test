import React from "react";
import "./Main.scss";
import Table from "../../components/Table/Table";
import InputBox from "../../components/InputBox/InputBox";
import Chart from "../../components/Chart/Chart";
import DailyFeed from "../../components/DailyFeed/DailyFeed";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";

const Main = () => {
  const [inputValue, setInputValue] = useState();
  const [currentInputValue, setCurrentInputValue] = useState();
  const [vesselData, setVesselData] = useState();
  const [tableJSX, setTableJSX] = useState();
  const [tableData, setTableData] = useState();

  const getVesselData = async () => {
    let url =
      "https://www.ssyreports.com/api/ExampleEodPrices/zTsykzVaLghw5Tm3/20230605";
    const res = await fetch(url);
    let data = await res.json();
    setTableData(data);
    setVesselData(data);
  };

  useEffect(() => {
    getVesselData();
  }, []);

  useEffect(() => {
    if (tableData != null) {
      let tableCopy = [...tableData];
      setVesselData(
        tableCopy.filter((route) => {
          return route.periodStartDate.substring(0, 10) == inputValue;
        })
      );
    }
  }, [inputValue]);

  useEffect(() => {
    if (vesselData != null) {
      let test = vesselData.map((route) => {
        return (
          <tr className="table-section__table--row">
            <th>{route.periodCode}</th>
            <th>{route.price}</th>
            <th>{route.routeDescription}</th>
          </tr>
        );
      });
      setTableJSX(test);
    }
  }, [vesselData]);

  const handleInputChange = (event) => {
    setCurrentInputValue(event.target.value);
  };

  const handleButtonClick = (event) => {
    setInputValue(currentInputValue);
  };

  return (
    <div className="main-section">
      <div className="main-section__top">
        <div className="main-section__top--left">
          <DailyFeed />
        </div>
        <div className="main-section__top--right">
          <div className="date-section">
            <InputBox onChange={handleInputChange} />
            <Button
              buttonText={"SUBMIT"}
              handleButtonClick={handleButtonClick}
            />
          </div>
          {vesselData && <Table vesselData={tableJSX} />}
        </div>
      </div>

      <div className="main-section__bottom">
        <Chart />
      </div>
    </div>
  );
};

export default Main;
