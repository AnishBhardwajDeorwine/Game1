import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AppContextProvider from "./components/context/AppContext";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <Toaster />
    <App />
  </AppContextProvider>
);
