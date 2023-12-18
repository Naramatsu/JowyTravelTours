import React, { useContext } from "react";
import AboutUs from "./pages/AboutUs";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import { PreferencesAppContext } from "./context/Preferences";
import { isDarkTheme } from "./utils";
import ConctactUs from "./pages/ConctactUs/ConctactUs";

const App = () => {
  const { theme } = useContext(PreferencesAppContext);
  return (
    <div className={`App ${isDarkTheme(theme)}`}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/aboutus">
          <AboutUs />
        </Route>
        <Route exact path="/contactus">
          <ConctactUs />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
