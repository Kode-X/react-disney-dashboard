import React, { useState } from "react";
import { Modal, Box, Button } from "@mui/material";

const ModalComponent = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ p: 4, bgcolor: "background.paper" }}>{children}</Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
