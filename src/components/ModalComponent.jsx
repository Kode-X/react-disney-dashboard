import { useState } from "react";
import { Modal, Box, Button, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { GridCloseIcon } from "@mui/x-data-grid";

const ModalComponent = ({ open, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <div>
      <Modal open={open} onClose={handleCloseModal}>
        <Box
          sx={{
            p: 4,
            bgcolor: "background.paper",
            maxHeight: "90vh",
            overflowY: "auto",
            margin: "auto",
            maxWidth: 600,
            position: "relative",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <GridCloseIcon />
          </IconButton>
          {children}
        </Box>
      </Modal>
    </div>
  );
};

ModalComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalComponent;
