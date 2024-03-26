import React from "react";
import ReactDOM from "react-dom/client";
import "../app/globals.css";
import ThemeProvider from "./themer/ThemeProvider";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='light' storageKey='ui-theme'>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
