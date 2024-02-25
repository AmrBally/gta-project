import React from "react";
import ReactDOM from "react-dom/client";
import { VisibilityProvider } from "./providers/VisibilityProvider";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./index.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </VisibilityProvider>
  </React.StrictMode>
);
