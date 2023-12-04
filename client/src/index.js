import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/styles.min.css";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENTID}
      redirectUri={window.location.origin}
    >
      <QueryClientProvider client={new QueryClient()}>
        <App />
      </QueryClientProvider>
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
