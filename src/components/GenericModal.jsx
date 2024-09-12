import { Box, IconButton, Modal } from "@mui/material";
import { GridCloseIcon } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import React from "react";

const GenericModal = ({ open, onClose, children }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          p: 4,
          backgroundColor: "white",
          margin: "auto",
          maxWidth: 600,
          position: "relative",
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
  children: PropTypes.node.isRequired,
};

export default GenericModal;
