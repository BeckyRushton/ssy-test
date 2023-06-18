import React, { useEffect, useState } from "react";
import "./DailyFeed.scss";

const DailyFeed = () => {
  const [updateData, setUpdateData] = useState();

  useEffect(() => {
    getUpdates();
  }, []);

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
      <div className="daily-feed__market-info">
        <h3 className="daily-feed__market-info--title">MARKET</h3>
        <p className="daily-feed__market-info--para">
          {updateData && (
            <td dangerouslySetInnerHTML={{ __html: updateData[0].comment }} />
          )}
        </p>
      </div>
      <div className="daily-feed__cape-info">
        <h3 className="daily-feed__cape-info--title">CAPE</h3>
        <p className="daily-feed__cape-info--cape">
          {updateData && (
            <td dangerouslySetInnerHTML={{ __html: updateData[1].comment }} />
          )}
        </p>
      </div>
    </div>
  );
};

export default DailyFeed;
