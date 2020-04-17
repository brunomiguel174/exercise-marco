import React from "react";
import ReactDom from "react-dom";

import "./styles/global.scss";

import Routes from "./routes";

ReactDom.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
