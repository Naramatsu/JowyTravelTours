import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PreferencesState from "./context/Preferences/PreferencesState";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PreferencesState>
      <Router>
        <App />
      </Router>
    </PreferencesState>
  </React.StrictMode>
);
