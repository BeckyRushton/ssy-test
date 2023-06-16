import React, { useState, useEffect } from "react";
import "./Table.scss";

const Table = () => {
  const [vesselData, setVesselData] = useState();

  useEffect(() => {
    getVesselData();
  }, []);

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
        {/* For each vessel, return a row with the data from the api */}
        <tr className="table-section__table--row">
          <th>x</th>
          <th>x</th>
          <th>x</th>
        </tr>
      </table>
    </div>
  );
};

export default Table;
