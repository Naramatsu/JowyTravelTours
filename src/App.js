import React, { useContext } from "react";
import AboutUs from "./pages/AboutUs";
import ConctactUs from "./pages/ConctactUs/ConctactUs";
import Footer from "./layout/Footer";
import FrequentQuestions from "./pages/FrequentQuestions";
import Header from "./layout/Header";
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
        <Route exact path="/aboutus">
          <AboutUs />
        </Route>
        <Route exact path="/contactus">
          <ConctactUs />
        </Route>
        <Route exact path="/frequentsquestions">
          <FrequentQuestions />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
