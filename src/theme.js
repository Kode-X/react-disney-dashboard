import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", // Disney blue
    },
    secondary: {
      main: "#ff4081", // Disney pink
    },
    background: {
      default: "#f0f0f0", // Light background
      paper: "#fff8e1", // Light yellow background for paper components
    },
    text: {
      primary: "#333", // Dark text
      secondary: "#555",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h1: {
      fontWeight: "bold",
      color: "#FFD700", // Gold
      textShadow: "2px 2px 4px #000000", // Black shadow for depth
    },
    h2: {
      fontWeight: "bold",
      color: "#FFD700", // Gold
      textShadow: "2px 2px 4px #000000", // Black shadow for depth
    },
    h3: {
      fontWeight: "bold",
      color: "#FFD700", // Gold
      textShadow: "2px 2px 4px #000000", // Black shadow for depth
    },
    h4: {
      fontWeight: "bold",
      color: "#FFD700", // Gold
      textShadow: "2px 2px 4px #000000", // Black shadow for depth
    },
    h5: {
      fontWeight: "bold",
      color: "#FFD700", // Gold
      textShadow: "2px 2px 4px #000000", // Black shadow for depth
    },
    h6: {
      fontWeight: "bold",
      color: "#FFD700", // Gold
      textShadow: "2px 2px 4px #000000", // Black shadow for depth
    },
    subtitle1: {
      fontWeight: "bold",
      color: "#ff4081", // Disney pink
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          textTransform: "none",
        },
        containedPrimary: {
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          color: "white",
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          "&:hover": {
            background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(45deg, #FFA726 30%, #FB8C00 90%)",
          color: "white",
          boxShadow: "0 3px 5px 2px rgba(255, 152, 0, .3)",
          "&:hover": {
            background: "linear-gradient(45deg, #FB8C00 30%, #FFA726 90%)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff4081", // Change this to your desired color
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#ff4081", // Change this to your desired color
          },
        },
      },
    },
  },
});

export default theme;
