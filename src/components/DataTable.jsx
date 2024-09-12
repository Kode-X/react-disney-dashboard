import { Skeleton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import useStore from "../store";

const paginationModel = { page: 0, pageSize: 50 };

const DataTable = ({
  rows,
  columns,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  const loading = useStore((state) => state.loading);
  console.log(rows);
  return loading ? (
    <Skeleton variant="rectangular" width="100%" height={400} />
  ) : (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={pageSize}
      page={page}
      onPageChange={(params) => onPageChange(params.page)}
      onPageSizeChange={(params) => onPageSizeChange(params.pageSize)}
      pagination
      initialState={{ pagination: { paginationModel } }}
      autoHeight
      pageSizeOptions={[10, 20, 50, 100, 200, 500]}
    />
  );
};

DataTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      tvShows: PropTypes.number.isRequired,
      videoGames: PropTypes.number.isRequired,
      allies: PropTypes.string.isRequired,
      enemies: PropTypes.string.isRequired,
    })
  ).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      width: PropTypes.number,
    })
  ).isRequired,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
};

export default DataTable;
