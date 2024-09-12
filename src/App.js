import React, { useEffect } from "react";
import { Container, Grid2 } from "@mui/material";
import DataTable from "./components/DataTable";
import PieChart from "./components/PieChart";
import ElementList from "./components/ElementList";
import ModalComponent from "./components/ModalComponent";
import FormComponent from "./components/FormComponent";
import { fetchDisneyData } from "./services/disneyApi";
import useStore from "./store";

function App() {
  const disneyData = useStore((state) => state.disneyData);

  useEffect(() => {
    fetchDisneyData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Character Name", width: 150 },
    { field: "tvShows", headerName: "TV Shows", width: 150 },
    { field: "videoGames", headerName: "Video Games", width: 150 },
    { field: "allies", headerName: "Allies", width: 200 },
    { field: "enemies", headerName: "Enemies", width: 200 },
  ];

  const pieData = disneyData.map((item) => ({
    name: item.name,
    y: item.tvShows + item.videoGames,
  }));

  return (
    <Container>
      <Grid2 container spacing={3}>
        <Grid2 item xs={12}>
          <DataTable rows={disneyData} columns={columns} />
        </Grid2>
        <Grid2 item xs={6}>
          <PieChart data={pieData} />
        </Grid2>
        <Grid2 item xs={6}>
          <ElementList items={disneyData} />
        </Grid2>
        <Grid2 item xs={12}>
          <ModalComponent>
            <FormComponent onSubmit={(formData) => console.log(formData)} />
          </ModalComponent>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default App;
