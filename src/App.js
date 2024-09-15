import { Box, Container, Grid, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";

import DataTable from "./components/DataTable";
import PieChart from "./components/PieChart";
import SearchCharacter from "./components/SearchCharacter";
import Title from "./components/Title";
import { fetchDisneyData } from "./services/disneyApi";
import useStore from "./store";
import theme from "./theme";
import { columns } from "./utils/dataTableConfig";

function App() {
  const disneyData = useStore((state) => state.disneyData);
  const [searchQuery, setSearchQuery] = useState("");
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 50,
    page: 0,
  });

  useEffect(() => {
    fetchDisneyData();
  }, []);

  if (!disneyData) {
    return <div>No data available</div>;
  }

  const filteredData = disneyData.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
          minHeight: "100vh",
          padding: "0px 20px",
        }}
      >
        <Title text="Disney Characters" />
        <Container sx={{ minWidth: "1600px" }}>
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
            <Grid item xs={6} md={6}>
              <PieChart
                filteredData={filteredData}
                paginationModel={paginationModel}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
