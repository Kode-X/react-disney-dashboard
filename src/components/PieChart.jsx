import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import useStore from "../store";
import { Skeleton } from "@mui/material";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import PropTypes from "prop-types";

HighchartsAccessibility(Highcharts);

const PieChart = ({ data }) => {
  const loading = useStore((state) => state.loading);
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
