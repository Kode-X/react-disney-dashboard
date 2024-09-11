import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PieChart = ({ data }) => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Pie Chart",
    },
    series: [
      {
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
