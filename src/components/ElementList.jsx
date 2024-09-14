import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const ElementList = ({ items }) => {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          <ListItemText primary={item} sx={{ textAlign: "center" }} />
        </ListItem>
      ))}
    </List>
  );
};

ElementList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ElementList;
