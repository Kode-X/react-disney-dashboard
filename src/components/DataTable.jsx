import { Card, CardContent, Skeleton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { useState } from "react";
import useStore from "../store";
import CharacterDetailsModalContent from "./CharacterDetailsModalContent";
import GenericModal from "./GenericModal";

const DataTable = ({ rows, columns, paginationModel, setPaginationModel }) => {
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

  return loading ? (
    <Skeleton variant="rectangular" width="100%" height={400} />
  ) : (
    <Card sx={{ maxWidth: 800, margin: "auto", mt: 4 }}>
      <CardContent>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          onPaginationModelChange={setPaginationModel}
          autoHeight
          pageSizeOptions={[10, 20, 50, 100, 200, 500]}
          onRowClick={handleRowClick}
          sx={{ border: 0 }}
        />
        <GenericModal open={isModalOpen} onClose={handleCloseModal}>
          {selectedCharacter && (
            <CharacterDetailsModalContent
              selectedCharacter={selectedCharacter}
            />
          )}
        </GenericModal>
      </CardContent>
    </Card>
  );
};

DataTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      numberOfTvShows: PropTypes.number,
      numberOfVideoGames: PropTypes.number,
      allies: PropTypes.arrayOf(PropTypes.string),
      enemies: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      width: PropTypes.number,
    })
  ).isRequired,
  paginationModel: PropTypes.shape({
    page: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
  }).isRequired,
  setPaginationModel: PropTypes.func.isRequired,
};

export default DataTable;
