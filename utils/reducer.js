import React from "react";

export const ACTIONS = {
  CONSOLE_LOG: "console-log-test",
  ADD_TO_SECTION: "add-to-section",
  CHECK_FOR_TORSO: "check-for-torso",
};

export function reducer(data, action) {
  switch (action.type) {
    case ACTIONS.CONSOLE_LOG:
      console.log("reducer working:");
      return clothes;
    case ACTIONS.ADD_TO_SECTION:
      const { itemsOnBoard } = data;
      const { id, section } = action.payload;
      const newSection = [...itemsOnBoard[section]];
      newSection.push(id);
      const newItemsOnBoard = { ...itemsOnBoard, [section]: newSection };
      const newData = { ...data, itemsOnBoard: newItemsOnBoard };

      return newData;

    default:
      return data;
  }
}
