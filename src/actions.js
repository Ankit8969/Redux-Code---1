import * as actions from "./actionTypes";

export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: description,
  },
});

export const bugResolve = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id: id,
  },
});
