const initialState = {
  name: "Default",
  list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE-NAME":
      return { ...state, name: action.payload.name };
    case "CHANGE-LIST":
      return { ...state, list: action.payload.list };

    default:
      return state;
  }
};

export default reducer;
