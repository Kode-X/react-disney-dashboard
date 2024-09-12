import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Grid2, TextField } from "@mui/material";
import DataTable from "./components/DataTable";
import PieChart from "./components/PieChart";
import ElementList from "./components/ElementList";
import ModalComponent from "./components/ModalComponent";
import FormComponent from "./components/FormComponent";
import { fetchDisneyData } from "./services/disneyApi";
import useStore from "./store";
import * as XLSX from "xlsx";
import { columns } from "./utils/utils";

function App() {
  const disneyData = useStore((state) => state.disneyData);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetchDisneyData();
  }, []);

  const filteredData = disneyData.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    page * pageSize,
    page * pageSize + pageSize
  );

  const pieData = paginatedData.map((item) => ({
    name: item.name,
    y: item.tvShows.length + item.videoGames.length,
    films: [...item.tvShows, ...item.videoGames],
  }));

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(pieData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "PieChart Data");
    XLSX.writeFile(workbook, "PieChartData.xlsx");
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
      <Button variant="contained" color="primary" onClick={handleExport}>
        Export Chart Data
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <DataTable
            rows={filteredData}
            columns={columns}
            page={page}
            pageSize={pageSize}
            onPageChange={(newPage) => setPage(newPage)}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <PieChart data={pieData} />
        </Grid>
        {/* <Grid2 item xs={6}>
          <ElementList items={filteredData} />
        </Grid2> */}
        {/* <Grid2 item xs={12}>
          <ModalComponent>
            <FormComponent onSubmit={(formData) => console.log(formData)} />
          </ModalComponent>
        </Grid2> */}
      </Grid>
    </Container>
  );
}

export default App;
