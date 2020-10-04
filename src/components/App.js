import React from "react";
import { Header } from "./Header";
import { Home } from "./Home";
import { List } from "./List";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const App = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:city" component={List} />
      </Switch>
    </Router>
  );
};
