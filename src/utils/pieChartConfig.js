import { formatFilmsAndPercentage } from "../utils/utils";

const pieChartOptions = (data) => ({
  chart: {
    type: "pie",
  },
  title: {
    text: "Character Films",
  },
  tooltip: {
    pointFormatter: function () {
      return formatFilmsAndPercentage(this.films, this.percentage);
    },
  },
  series: [
    {
      name: "Films",
      data: data.map((item) => ({
        name: item.name,
        y: item.y,
        films: item.films,
      })),
    },
  ],
});

export default pieChartOptions;
