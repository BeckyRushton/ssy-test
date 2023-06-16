import React from "react";
import "./DailyFeed.scss";

const DailyFeed = () => {
  // will need props passed down
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
