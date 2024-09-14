import { Button, Container, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import DataTable from "./components/DataTable";
import PieChart from "./components/PieChart";
import { fetchDisneyData } from "./services/disneyApi";
import useStore from "./store";
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

  const paginatedData = filteredData.slice(
    paginationModel.page * paginationModel.pageSize,
    paginationModel.page * paginationModel.pageSize + paginationModel.pageSize
  );

  const pieData = paginatedData.map((item) => ({
    name: item.name,
    y: item.tvShows.length + item.videoGames.length,
    films: [...item.films],
  }));

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Container>
      <TextField
        label="Search Characters"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={handleSearchChange}
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
          <PieChart data={pieData} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
