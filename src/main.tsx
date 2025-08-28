import { createRoot } from "react-dom/client";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <KindeProvider
    clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
    domain={import.meta.env.VITE_KINDE_DOMAIN}
    logoutUri={import.meta.env.VITE_KINDE_LOGOUT_URL}
    redirectUri={import.meta.env.VITE_KINDE_REDIRECT_URL}
    // When running local against a custom domain, include the line below
    // useInsecureForRefreshToken={true}
  >
    <App />
  </KindeProvider>
);
