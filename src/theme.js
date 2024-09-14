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
    },
    text: {
      primary: "#333", // Dark text
      secondary: "#555", // Secondary text
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h4: {
      fontWeight: "bold",
      color: "#3f51b5", // Disney blue
    },
    subtitle1: {
      fontWeight: "bold",
      color: "#3f51b5", // Disney blue
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
