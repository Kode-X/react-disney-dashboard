import { TextField } from "@mui/material";
import PropTypes from "prop-types";

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
      sx={{
        backgroundColor: "white",
        borderRadius: "20px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: "none",
          },
          "&:hover fieldset": {
            border: "none",
          },
          "&.Mui-focused fieldset": {
            border: "none",
          },
        },
      }}
    />
  );
};

SearchCharacter.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default SearchCharacter;
