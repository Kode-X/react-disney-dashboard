import {
  Button,
  Card,
  CardActions,
  CardContent,
  Skeleton,
} from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import PropTypes from "prop-types";
import * as XLSX from "xlsx";
import useStore from "../store";
import pieChartOptions from "../utils/pieChartConfig";

HighchartsAccessibility(Highcharts);

const PieChart = ({ data }) => {
  const loading = useStore((state) => state.loading);

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "PieChart Data");
    XLSX.writeFile(workbook, "PieChartData.xlsx");
  };

  return loading ? (
    <Skeleton variant="rectangular" width="100%" height={400} />
  ) : (
    <Card sx={{ maxWidth: 800, margin: "auto", mt: 4 }}>
      <CardContent>
        <HighchartsReact
          highcharts={Highcharts}
          options={pieChartOptions(data)}
        />
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleExport}
          sx={{ mt: 2, mb: 2 }}
        >
          Export Chart Data
        </Button>
      </CardActions>
    </Card>
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
