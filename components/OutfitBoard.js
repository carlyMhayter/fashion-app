import React from "react";
import OutfitBoardButtonToolbar from "./OutfitBoardButtonToolbar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const sections = ["Head", "Torso", "Leg", "Foot"];
import { ACTIONS, reducer, itemsOnBoard } from "../utils/reducer";

export default function OutfitBoard(props) {
  const { data, dispatch } = props;
  let sectionEmpty = false;


  return (
    <div className="outfit-board-container">
      <div className="outfit-board">
        {sections.map((section) => (
          <Tooltip
            placement="bottom"
            title={`${section} Section`}
            className="desktop-tooltip"
            arrow
            key={section}
          >
            <div className={`outfit-board-inner-section ${section}-section`}>
              {sectionEmpty && (
                <IconButton aria-label="Add to section">
                  <AddCircleIcon className="add-button-outfit-board" />
                </IconButton>
              )}
            </div>
          </Tooltip>
        ))}
      </div>
      <div className="clothes-button-container">
        <OutfitBoardButtonToolbar />
      </div>
    </div>
  );
}
