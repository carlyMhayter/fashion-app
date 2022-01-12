import React from "react";
import OutfitBoardButtonToolbar from "./OutfitBoardButtonToolbar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function OutfitBoard() {
  return (
    <div className="outfit-board-container">
      <div className="outfit-board">
        <Tooltip
          placement="bottom"
          title="Head Section"
          className="desktop-tooltip"
          arrow
        >
          <div className="outfit-board-inner-section head-section">
            <IconButton aria-label="Add to section">
              <AddCircleIcon className="add-button-outfit-board" />
            </IconButton>
          </div>
        </Tooltip>
        <Tooltip
          placement="bottom"
          className="desktop-tooltip"
          title="Toso Section"
          arrow
        >
          <div className="outfit-board-inner-section torso-section">
            <IconButton aria-label="Add to section">
              <AddCircleIcon className="add-button-outfit-board" />
            </IconButton>
          </div>
        </Tooltip>
        <Tooltip
          placement="bottom"
          className="desktop-tooltip"
          title="Leg Section"
          arrow
        >
          <div className="outfit-board-inner-section leg-section">
            <IconButton aria-label="Add to section">
              <AddCircleIcon className="add-button-outfit-board" />
            </IconButton>
          </div>
        </Tooltip>
        <Tooltip
          placement="top"
          className="desktop-tooltip"
          title="Foot Section"
          arrow
        >
          <div className="outfit-board-inner-section foot-section">
            <IconButton aria-label="Add to section">
              <AddCircleIcon className="add-button-outfit-board" />
            </IconButton>
          </div>
        </Tooltip>
      </div>
      <div className="clothes-button-container">
        <OutfitBoardButtonToolbar />
      </div>
    </div>
  );
}
