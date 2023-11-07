import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/styles.min.css";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
