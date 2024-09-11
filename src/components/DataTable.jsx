import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({ rows, columns }) => {
  return <DataGrid rows={rows} columns={columns} pageSize={5} />;
};

export default DataTable;
