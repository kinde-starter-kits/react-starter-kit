import { createRoot } from "react-dom/client";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import "./index.css";
import App from "./App.tsx";
import { AUTH_CONFIG } from "./config/auth.ts";

const AppWrapper = () => {
  if (AUTH_CONFIG.ENABLED) {
    return (
      <KindeProvider
        clientId={AUTH_CONFIG.KINDE.CLIENT_ID}
        domain={AUTH_CONFIG.KINDE.DOMAIN}
        logoutUri={AUTH_CONFIG.KINDE.LOGOUT_URL}
        redirectUri={AUTH_CONFIG.KINDE.REDIRECT_URL}
      >
        <App />
      </KindeProvider>
    );
  }

  return <App />;
};

createRoot(document.getElementById("root")!).render(<AppWrapper />);
