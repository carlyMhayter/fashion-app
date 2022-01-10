import React from "react";
import OutfitBoardButtonToolbar from "./OutfitBoardButtonToolbar";
export default function OutfitBoard() {
  return (
    <div className="outfit-board-container">
      <div className="outfit-board">
        <div className="outfit-board-inner-section head-section"></div>
        <div className="outfit-board-inner-section torso-section"></div>
        <div className="outfit-board-inner-section leg-section"></div>
        <div className="outfit-board-inner-section foot-section"></div>
        <div className="clothes-button-container">
          <OutfitBoardButtonToolbar />
        </div>
      </div>
    </div>
  );
}
