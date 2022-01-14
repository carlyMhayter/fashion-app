import React from "react";

export default function OutfitBoardCard(props) {
  const { item } = props;
  let shortBoolean = false;
  console.log(item.tags);

  function changeBoolean() {
    if (
      item.tags.includes("shorts") ||
      item.tags.includes("hat") ||
      item.tags.includes("mini skirt") ||
      item.tags.includes("shorts")
    ) {
      console.log("this item is short");
      return true;
    }
  }
  shortBoolean = changeBoolean();
  console.log(shortBoolean);

  return (
    <div
      className={`outfit-board-card-inner-container${
        shortBoolean ? "-short" : ""
      }`}
      style={{ backgroundImage: `url(${item.src})` }}
    ></div>
  );
}

// shortBoolean && "outfit-board-card-inner-container-short" : "outfit-board-card-inner-container"
