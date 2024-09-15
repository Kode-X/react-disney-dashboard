import { Box, IconButton, Modal } from "@mui/material";
import { GridCloseIcon } from "@mui/x-data-grid";
import PropTypes from "prop-types";

const GenericModal = ({ open, onClose, children }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          p: 4,
          backgroundColor: "white",
          margin: "auto",
          maxWidth: 600,
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
          "&::-webkit-scrollbar-corner": {
            background: "transparent",
          },
          scrollbarWidth: "thin",
          scrollbarColor: "#888 #f1f1f1",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <GridCloseIcon />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};

GenericModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default GenericModal;
