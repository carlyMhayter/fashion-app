import React from "react";

export const ACTIONS = {
  CONSOLE_LOG: "console-log-test",
};

export function reducer(clothes, action) {
  switch (action.type) {
    case ACTIONS.CONSOLE_LOG:
      console.log("reducer working:");
      return clothes;
  }
}
