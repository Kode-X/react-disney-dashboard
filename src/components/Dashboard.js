import { Box, Container, Grid } from "@mui/material";
import { useState } from "react";
import Title from "./Title";
import SearchCharacter from "./SearchCharacter";
import DataTable from "./DataTable";
import PieChart from "./PieChart";
import { columns } from "../utils/dataTableConfig";
import PropTypes from "prop-types";

const Dashboard = ({ filteredData, searchQuery, setSearchQuery }) => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 50,
    page: 0,
  });
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #fffacd 0%, #f6c27a 50%, #f7a64b 100%)",
        minHeight: "100vh",
        padding: "0px 20px",
      }}
    >
      <Title text="Disney Characters" />
      <Container
        sx={{
          minWidth: {
            xs: "100%",
            sm: "600px",
            md: "960px",
            lg: "1280px",
            xl: "1600px",
          },
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SearchCharacter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DataTable
              rows={filteredData}
              columns={columns}
              paginationModel={paginationModel}
              setPaginationModel={setPaginationModel}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PieChart
              filteredData={filteredData}
              paginationModel={paginationModel}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

Dashboard.propTypes = {
  filteredData: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default Dashboard;
