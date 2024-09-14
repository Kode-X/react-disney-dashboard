import { Button, Container, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import DataTable from "./components/DataTable";
import PieChart from "./components/PieChart";
import { fetchDisneyData } from "./services/disneyApi";
import useStore from "./store";
import { columns } from "./utils/dataTableConfig";
import SearchCharacter from "./components/SearchCharacter";

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
    <Container>
      <SearchCharacter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Grid container spacing={3}>
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
  );
}

export default App;
