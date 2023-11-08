import React, { useReducer } from "react";
import PreferencesReducer from "./reducer";
import { LIGHT, SPANISH } from "../../utils/constants";
import { SET_LANGUAJE, SET_THEME } from "./types";
import { PreferencesAppContext } from ".";

const PreferencesState = ({ children }) => {
  const initialState = {
    languaje: SPANISH,
    theme: LIGHT,
  };
  const [globalState, dispatch] = useReducer(PreferencesReducer, initialState);

  const setLanguaje = (languaje) => {
    dispatch({
      type: SET_LANGUAJE,
      payload: languaje,
    });
  };

  const setTheme = (theme) => {
    dispatch({
      type: SET_THEME,
      payload: theme,
    });
  };

  const combineFunctions = {
    setLanguaje,
    setTheme,
  };

  return (
    <PreferencesAppContext.Provider
      value={{ ...globalState, ...combineFunctions }}
    >
      {children}
    </PreferencesAppContext.Provider>
  );
};

export default PreferencesState;
