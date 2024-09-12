import { Box, Typography } from "@mui/material";
import React from "react";
import ElementList from "./ElementList";

const CharacterDetailsModalContent = ({ selectedCharacter }) => {
  return (
    <div>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
        {selectedCharacter.name}
      </Typography>
      <Box
        component="img"
        src={selectedCharacter.image}
        alt={selectedCharacter.name}
        sx={{
          width: "80%",
          height: "auto",
          display: "block",
          margin: "0 auto",
          borderRadius: 2,
          boxShadow: 3,
        }}
      />
      <Typography variant="subtitle1" sx={{ mt: 2, textAlign: "center" }}>
        TV Shows
      </Typography>
      {selectedCharacter.tvShows.length > 0 ? (
        <ElementList items={selectedCharacter.tvShows} />
      ) : (
        <Typography sx={{ textAlign: "center" }}>-</Typography>
      )}
      <Typography variant="subtitle1" sx={{ mt: 2, textAlign: "center" }}>
        Video Games
      </Typography>
      {selectedCharacter.videoGames.length > 0 ? (
        <ElementList items={selectedCharacter.videoGames} />
      ) : (
        <Typography sx={{ textAlign: "center" }}>-</Typography>
      )}
    </div>
  );
};

export default CharacterDetailsModalContent;
