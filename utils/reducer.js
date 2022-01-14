import React from "react";

export const ACTIONS = {
  CONSOLE_LOG: "console-log-test",
  ADD_TO_SECTION: "add-to-section",
  CHECK_FOR_EMPTY_SECTION: "check-for-empty-section",
};

export function reducer(data, action) {
  switch (action.type) {
    case ACTIONS.CONSOLE_LOG:
      console.log("reducer working:");
      return clothes;
    case ACTIONS.ADD_TO_SECTION:
      const { itemsOnBoard } = data;
      const { item, section } = action.payload;
      const newSection = [...itemsOnBoard[section]];
      newSection.push(item);
      const newItemsOnBoard = { ...itemsOnBoard, [section]: newSection };
      const newData = { ...data, itemsOnBoard: newItemsOnBoard };

      return newData;
  }
  return data;
}
