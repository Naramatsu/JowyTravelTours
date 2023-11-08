import React, { useContext } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import { PreferencesAppContext } from "./context/Preferences";
import { isDarkTheme } from "./utils";

const App = () => {
  const { theme } = useContext(PreferencesAppContext);
  return (
    <div className={`App ${isDarkTheme(theme)}`}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
