import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

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
