import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import App from "./components/App";

//indexJS component
//wrapped with React fragment and CSS baseline stile

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
