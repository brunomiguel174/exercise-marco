import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

function Routes() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
