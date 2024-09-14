import { TextField } from "@mui/material";
import React from "react";

const SearchCharacter = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <TextField
      label="Search Characters"
      variant="outlined"
      fullWidth
      margin="normal"
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
};

export default SearchCharacter;
