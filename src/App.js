import React, { useContext } from "react";
import AboutUs from "./pages/AboutUs";
import ConctactUs from "./pages/ConctactUs/ConctactUs";
import Footer from "./layout/Footer";
import FrequentQuestions from "./pages/FrequentQuestions";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { isDarkTheme } from "./utils";
import { PreferencesAppContext } from "./context/Preferences";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./utils/routes";
import { showSection } from "./utils/constants";

const App = () => {
  const { theme } = useContext(PreferencesAppContext);
  return (
    <div className={`App ${isDarkTheme(theme)}`}>
      <Header />
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTES.ABOUTUS}>
          <AboutUs />
        </Route>
        <Route exact path={ROUTES.CONTACTUS}>
          <ConctactUs />
        </Route>
        {showSection && (
          <Route exact path={ROUTES.FREQUENTQUESTIONS}>
            <FrequentQuestions />
          </Route>
        )}
        <Route exact path={ROUTES.PRODUCTS}>
          <Products />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
