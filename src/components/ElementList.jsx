import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const ElementList = ({ items }) => {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default ElementList;
