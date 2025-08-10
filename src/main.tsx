import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "modern-normalize/modern-normalize.css";
import "./global.css";
import App from "./components/App/App.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
