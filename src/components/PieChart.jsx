import { Skeleton } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import PropTypes from "prop-types";
import useStore from "../store";
import pieChartOptions from "../utils/pieChartConfig";

HighchartsAccessibility(Highcharts);

const PieChart = ({ data }) => {
  const loading = useStore((state) => state.loading);

  return loading ? (
    <Skeleton variant="rectangular" width="100%" height={400} />
  ) : (
    <HighchartsReact highcharts={Highcharts} options={pieChartOptions(data)} />
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
