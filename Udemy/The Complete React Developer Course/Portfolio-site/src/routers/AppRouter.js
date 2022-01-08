import React from "react";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import Item from "../components/Item";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/portfolio/:id" component={Item} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
