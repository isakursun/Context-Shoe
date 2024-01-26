import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BasketProvider } from "./context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BasketProvider>
    <App />
  </BasketProvider>
);
