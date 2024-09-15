import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Tooltip,
  Chip,
  Card,
  FormControl,
  Box,
  Skeleton,
} from "@mui/material";
import useStore from "../store";

const FormCharacter = ({ data }) => {
  const loading = useStore((state) => state.loading);
  const [characterName, setCharacterName] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    const character = data.find(
      (char) => char.name.toLowerCase() === characterName.toLowerCase()
    );
    if (character) {
      setSearchResult(character.tvShows.length > 0 ? character.tvShows : "No");
    } else {
      setSearchResult("No");
    }
  };

  const handleClear = () => {
    setCharacterName("");
    setSearchResult(null);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return loading ? (
    <Skeleton variant="rectangular" width="100%" height={50} />
  ) : (
    <Card sx={{ p: "20px" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <FormControl fullWidth>
            <Box display="flex" alignItems="center">
              <TextField
                label="Search if a characted has ever participated in a TV Show"
                variant="outlined"
                fullWidth
                value={characterName}
                onChange={(e) => setCharacterName(e.target.value)}
                onKeyPress={handleKeyPress}
                sx={{ mr: 2 }}
              />
              <Button
                variant="contained"
                onClick={handleSearch}
                color="primary"
                sx={{ mr: 2 }}
              >
                Search
              </Button>
              <Button
                variant="outlined"
                onClick={handleClear}
                sx={{
                  borderColor: "#f44336",
                  color: "#f44336",
                  "&:hover": {
                    borderColor: "#d32f2f",
                    color: "#d32f2f",
                  },
                }}
              >
                Clear
              </Button>
            </Box>
          </FormControl>
        </Grid>
        <Grid item xs={4} container justifyContent="flex-end">
          {searchResult && (
            <Tooltip
              title={Array.isArray(searchResult) ? searchResult.join(", ") : ""}
            >
              <Chip
                label={Array.isArray(searchResult) ? "Yes" : "No"}
                color={Array.isArray(searchResult) ? "success" : "error"}
              />
            </Tooltip>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

export default FormCharacter;
