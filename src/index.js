import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { white, amber, lightBlue } from "@material-ui/core/colors";
import { LoadingProvider } from "./DataStore/LoadingContext";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: amber[800],
      contrastText: amber[50],
    },
    secondary: {
      main: lightBlue[500],
      contrastText: lightBlue[50],
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
