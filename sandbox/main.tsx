import React from "react";
import { createRoot } from "react-dom/client";
import { SandboxApp } from "./SandboxApp";
import "./sandbox.css";

const root = document.getElementById("root")!;
createRoot(root).render(
  <React.StrictMode>
    <SandboxApp />
  </React.StrictMode>
);
