import PropTypes from "prop-types";
import { List, ListItem, ListItemText, Skeleton } from "@mui/material";
import useStore from "../store";

const ElementList = ({ items }) => {
  const loading = useStore((state) => state.loading);
  console.log(items);
  return loading ? (
    <Skeleton variant="rectangular" width="100%" height={400} />
  ) : (
    <List>
      {items &&
        items?.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} sx={{ textAlign: "center" }} />
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
