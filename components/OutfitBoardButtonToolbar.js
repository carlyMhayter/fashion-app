import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/Clear";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function OutfitBoardButtonToolbar() {
  return (
    <div className="board-button-container">
      <IconButton aria-label="Save outfit to closet">
        <Tooltip title="Save outfit to closet">
          <SaveIcon fontSize="large" />
        </Tooltip>
      </IconButton>
      <IconButton aria-label="Clear board">
        <Tooltip title="Add item">
          <AddCircleIcon fontSize="large" />
        </Tooltip>
      </IconButton>
      <IconButton aria-label="Clear board">
        <Tooltip title="Clear board">
          <ClearIcon fontSize="large" />
        </Tooltip>
      </IconButton>
    </div>
  );
}
