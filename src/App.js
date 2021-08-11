import React from "react";
import "./App.css";
import Home from "./Home";
import Data from "./Data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/data" component={Data} />
      </Switch>
    </Router>
  );
}

export default App;
