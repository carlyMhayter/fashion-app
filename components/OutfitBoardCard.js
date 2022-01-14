import React from "react";

export default function OutfitBoardCard(props) {
  const { item } = props;

  return (
    <div
      className="outfit-board-card-container"
      style={{ backgroundImage: `url(${item.src})` }}
    >
      this is an outfit card!{item.id}
    </div>
  );
}
