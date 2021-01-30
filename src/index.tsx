import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";

const SassysistersApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SassysistersApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
