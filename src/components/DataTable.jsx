import { Box, IconButton, Modal, Skeleton, Typography } from "@mui/material";
import { DataGrid, GridCloseIcon } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { useState } from "react";
import useStore from "../store";
import ElementList from "./ElementList";
import CharacterDetailsModalContent from "./CharacterDetailsModalContent";
import GenericModal from "./GenericModal";

const paginationModel = { page: 0, pageSize: 50 };

const DataTable = ({
  rows,
  columns,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  const loading = useStore((state) => state.loading);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (params) => {
    setSelectedCharacter(params.row);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  console.log(selectedCharacter);
  return loading ? (
    <Skeleton variant="rectangular" width="100%" height={400} />
  ) : (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        page={page}
        onPageChange={(params) => onPageChange(params.page)}
        onPageSizeChange={(params) => onPageSizeChange(params.pageSize)}
        pagination
        initialState={{ pagination: { paginationModel } }}
        autoHeight
        pageSizeOptions={[10, 20, 50, 100, 200, 500]}
        onRowClick={handleRowClick}
      />
      {/* <Modal open={isModalOpen} onClose={handleCloseModal}>
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
            onClick={handleCloseModal}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <GridCloseIcon />
          </IconButton>
          {selectedCharacter && (
            <CharacterDetailsModalContent
              selectedCharacter={selectedCharacter}
            />
          )}
        </Box>
      </Modal> */}
      <GenericModal open={isModalOpen} onClose={handleCloseModal}>
        {selectedCharacter && (
          <CharacterDetailsModalContent selectedCharacter={selectedCharacter} />
        )}
      </GenericModal>
    </>
  );
};

DataTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      tvShows: PropTypes.arrayOf(PropTypes.string).isRequired,
      videoGames: PropTypes.arrayOf(PropTypes.string).isRequired,
      allies: PropTypes.string.isRequired,
      enemies: PropTypes.string.isRequired,
    })
  ).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      width: PropTypes.number,
    })
  ).isRequired,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
};

export default DataTable;
