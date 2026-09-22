import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

declare global {
  interface Window {
    pendo?: {
      initialize: (config: { visitor: { id: string } }) => void;
      identify: (config: { visitor: Record<string, unknown> }) => void;
      track: (eventName: string, properties?: Record<string, unknown>) => void;
      clearSession: () => void;
    };
  }
}

if (typeof window !== "undefined" && window.pendo) {
  window.pendo.initialize({
    visitor: {
      id: "",
    },
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
