import React from "react";
import OutfitBoardButtonToolbar from "./OutfitBoardButtonToolbar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import OutfitBoardCard from "./OutfitBoardCard";

const sections = ["Head", "Torso", "Leg", "Foot"];

export default function OutfitBoard(props) {
  const { data, dispatch, sections, itemsOnBoard } = props;

  return (
    <div className="outfit-board-container">
      <div className="outfit-board">
        {sections.map((section) => (
          <div
            key={section}
            className={`outfit-board-inner-section ${section}-section`}
          >
            {itemsOnBoard[section].length === 0 && (
              <Tooltip
                placement="bottom"
                title={`${section} Section`}
                className="desktop-tooltip"
                arrow
                key={section}
              >
                <IconButton aria-label="Add to section">
                  <AddCircleIcon className="add-button-outfit-board" />
                </IconButton>
              </Tooltip>
            )}

            {itemsOnBoard[section].length !== 0 && (
              <div className="outfit-board-card-outer-container">
                {itemsOnBoard[section].map((item) => (
                  <OutfitBoardCard
                    key={item.id}
                    {...{ item }}
                    section={section}
                    data={data}
                    dispatch={dispatch}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="clothes-button-container">
        <OutfitBoardButtonToolbar />
      </div>
    </div>
  );
}
