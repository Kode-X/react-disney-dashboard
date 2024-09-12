import PropTypes from "prop-types";
import { List, ListItem, ListItemText, Skeleton } from "@mui/material";
import useStore from "../store";

const ElementList = ({ items }) => {
  const loading = useStore((state) => state.loading);

  return loading ? (
    <Skeleton variant="rectangular" width="100%" height={400} />
  ) : (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
};

ElementList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ElementList;
