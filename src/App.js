import { ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";

import Dashboard from "./components/Dashboard";
import { fetchDisneyData } from "./services/disneyApi";
import useStore from "./store";
import theme from "./theme";

function App() {
  const disneyData = useStore((state) => state.disneyData);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchDisneyData();
  }, []);

  const filteredData = disneyData.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <ThemeProvider theme={theme}>
      <Dashboard
        filteredData={filteredData}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </ThemeProvider>
  );
}

export default App;
