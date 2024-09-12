import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import useStore from "../store";
import { Skeleton } from "@mui/material";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import PropTypes from "prop-types";

HighchartsAccessibility(Highcharts);

const PieChart = ({ data }) => {
  const loading = useStore((state) => state.loading);

  const splitArrayIntoStrings = (arr) => {
    const result = [];
    let currentString = "";

    arr.forEach((char) => {
      if (char === ",") {
        result.push(currentString.trim());
        currentString = "";
      } else {
        currentString += char;
      }
    });

    // Add the last string if there's no trailing comma
    if (currentString) {
      result.push(currentString.trim());
    }

    return result;
  };

  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Character Films",
    },
    tooltip: {
      pointFormatter: function () {
        console.log(this);
        const filmsArray = Array.isArray(this.films)
          ? this.films
          : [this.films];
        console.log(filmsArray);
        const filmsString = splitArrayIntoStrings(filmsArray); //filmsArray.join("");
        console.log(filmsString);
        const percentageString = `<b>${this.percentage.toFixed(2)}%</b><br/>`;
        const filmsList =
          filmsString.length > 1
            ? `Films: ${filmsString
                .map((film) => `<br/>&nbsp;&nbsp;&nbsp;&nbsp;- ${film}`)
                .join("")}`
            : `Film: ${filmsString[0]}`;

        return `${percentageString}${filmsList}`;
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
  };

  return loading ? (
    <Skeleton variant="rectangular" width="100%" height={400} />
  ) : (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

PieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      y: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PieChart;
