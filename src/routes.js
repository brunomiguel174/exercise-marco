import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navegation from "./components/Navegation";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
          
        <Route path="/" exact>
          <Navegation name="/" />
          <Home />
        </Route>

        <Route path="/about" exact>
          <Navegation name="/about" />
          <About />
        </Route>

        <Route path="/gallery" exact>
          <Navegation name="/gallery" />
          <Gallery />
        </Route>

        <Route path="/contact" exact>
          <Navegation name="/contact" />
          <Contact />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
