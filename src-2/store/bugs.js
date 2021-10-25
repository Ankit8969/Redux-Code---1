/* This is known as DUCK pattern  */
// writing all the files in one file

import { createAction } from "@reduxjs/toolkit";
/*
Actions Creater

{
    type:"bugAdded",
    payload:{
        val1:"",
        val2:""
    };
}
*/

export const bugAdded = createAction("bugAdded");
export const bugResolve = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

// Reducer

let lastId = 0;
export function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case bugRemoved.type:
      return state.filter((bug) => bug.id !== action.payload.id);
    case bugResolve.type:
      return state.map((bug) =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      );
    default:
      return state;
  }
}
