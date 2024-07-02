import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Omar } from "./resumes/omar";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <Omar />
  </StrictMode>
);
