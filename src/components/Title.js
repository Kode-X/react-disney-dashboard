import { Typography } from "@mui/material";

const Title = ({ text }) => {
  return (
    <Typography variant="h3" sx={{ textAlign: "center", mb: 2 }}>
      {text}
    </Typography>
  );
};

export default Title;
