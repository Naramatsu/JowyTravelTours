import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

export default App;
