import React, { useState, useEffect } from "react";
import "./Table.scss";

const Table = ({ dateSelected }) => {
  const [vesselData, setVesselData] = useState();
  const [tableJSX, setTableJSX] = useState();
  const [date, setDate] = useState(dateSelected);

  useEffect(() => {
    getVesselData();
  }, []);

  useEffect(() => {
    console.log(dateSelected);
    if (vesselData != null) {
      setVesselData(
        vesselData.filter((route) => {
          console.log(route.periodStartDate.substring(0, 10));
          console.log(dateSelected);
          return route.periodStartDate.substring(0, 10) == dateSelected;
        })
      );
    }
  }, [dateSelected]);

  useEffect(() => {
    if (vesselData != null) {
      console.log(date);
      console.log(dateSelected);

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

  const getVesselData = async () => {
    let url =
      "https://www.ssyreports.com/api/ExampleEodPrices/zTsykzVaLghw5Tm3/20230605";
    const res = await fetch(url);
    let data = await res.json();

    setVesselData(data);
  };
  return (
    <div className="table-section">
      <table className="table-section__table">
        <tr className="table-section__table--header">
          <th className="table-section__table--label">Period code</th>
          <th className="table-section__table--label">End-of-day price</th>
          <th className="table-section__table--label">Day-on-day movements</th>
        </tr>
        {vesselData && tableJSX}
      </table>
    </div>
  );
};

export default Table;
