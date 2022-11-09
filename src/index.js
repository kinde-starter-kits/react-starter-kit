import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <KindeProvider
      clientId={process.env.REACT_APP_KINDE_CLIENT_ID}
      domain={process.env.REACT_APP_KINDE_DOMAIN}
      logoutUri={process.env.REACT_APP_KINDE_LOGOUT_URL}
      redirectUri={process.env.REACT_APP_KINDE_REDIRECT_URL}
      isDangerouslyUseLocalStorage={process.env.NODE_ENV === "development"}
    >
      <App />
    </KindeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
