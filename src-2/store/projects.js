import { createAction } from "@reduxjs/toolkit";

export const projectAdded = createAction("projectAdded");

let lastId = 0;
export function reducer(state = [], action) {
  switch (action.type) {
    case projectAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
        },
      ];
    default:
      return state;
  }
}
