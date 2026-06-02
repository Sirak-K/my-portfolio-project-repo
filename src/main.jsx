import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/App.jsx";
import "./styles/theme_variables.css";
import "./styles/theme.css";
import "./app/app.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
