import React, { useReducer } from "react";
import ThemeReducer from "./reducer";
import { LIGHT } from "../../utils/constants";
import { SET_THEME } from "./types";
import { ThemeAppContext } from ".";

const ThemeState = ({ children }) => {
  const initialState = {
    theme: LIGHT,
  };
  const [globalState, dispatch] = useReducer(ThemeReducer, initialState);

  const setTheme = (theme) => {
    dispatch({
      type: SET_THEME,
      payload: theme,
    });
  };

  const combineFunctions = {
    setTheme,
  };

  return (
    <ThemeAppContext.Provider value={{ ...globalState, ...combineFunctions }}>
      {children}
    </ThemeAppContext.Provider>
  );
};

export default ThemeState;
