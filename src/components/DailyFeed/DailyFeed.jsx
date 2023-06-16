import React, { useEffect, useState } from "react";
import "./DailyFeed.scss";

const DailyFeed = () => {
  const [updateData, setUpdateData] = useState("");

  useEffect(() => {
    getUpdates();
    [];
  });

  const getUpdates = async () => {
    let url =
      "https://www.ssyreports.com/api/ExampleEodCommentary/zTsykzVaLghw5Tm3/20230605";

    const res = await fetch(url);
    let data = await res.json();
    setUpdateData(data);
  };
  return (
    <div className="daily-feed">
      <h2 className="daily-feed__title">UPDATES: </h2>
      <div className="daily-feed__info">
        <p className="daily-feed__info--market">market</p>
        <p className="daily-feed__info--cape">cape</p>
      </div>
    </div>
  );
};

export default DailyFeed;
