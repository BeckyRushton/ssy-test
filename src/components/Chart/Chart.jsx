import "./Chart.scss";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState, useEffect } from "react";

const Chart = () => {
  const [chartData, setChartData] = useState([
    {
      priceDate: "2022-06-05T00:00:00",
      price: 103289,
    },
    {
      priceDate: "2022-06-06T00:00:00",
      price: 102458,
    },
    {
      priceDate: "2022-06-07T00:00:00",
      price: 102293,
    },
    {
      priceDate: "2022-06-08T00:00:00",
      price: 101222,
    },
  ]);

  // Dummy data so that line 71 doesn't crash trying to apply .map to a null variable

  const getPriceData = async () => {
    let url =
      "https://www.ssyreports.com/api/ExampleEodCapeIndex/zTsykzVaLghw5Tm3/20230605";
    const res = await fetch(url);
    let data = await res.json();
    data = data.filter((day) => {
      return day.priceDate.charAt(8) === "0" && day.priceDate.charAt(9) === "1";
    });
    setChartData(data);
    console.log(data);
  };

  useEffect(() => {
    getPriceData();
  }, []);

  const options = {
    title: {
      text: "CAPE INDEX PRICES",
    },

    yAxis: {
      title: {
        text: "Cape Index Price",
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: "June 2022 - June 2023",
      },
      categories: [
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
      ],
    },

    series: [
      {
        name: "2022 - 2023",
        data: chartData.map((day) => {
          return day.price;
        }),
      },
    ],
  };

  return (
    <>
      {chartData && (
        <div className="chart-section">
          <h3 className="chart-section__title">CHART</h3>
          <div className="chart-section__chart">
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </div>
      )}
    </>
  );
};

export default Chart;
