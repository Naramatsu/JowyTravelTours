import { SET_THEME } from "./types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload,
      };

    default:
      return state;
  }
};

export default reducer;
