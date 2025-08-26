import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import LoggedIn from "./components/LoggedIn";
import LoggedOut from "./components/LoggedOut";
import { AUTH_CONFIG } from "./config/auth.ts";

// Separate component for authenticated app to avoid conditional hook calls
function AuthenticatedApp() {
  const { isLoading, isAuthenticated } = useKindeAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return isAuthenticated ? <LoggedIn /> : <LoggedOut />;
}

export default function App() {
  // If auth is disabled, show basic app
  if (!AUTH_CONFIG.ENABLED) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Welcome to React Starter Kit
          </h1>
          <p className="text-center text-gray-600">
            Authentication is currently disabled. Set VITE_ENABLE_AUTH=true to
            enable it.
          </p>
        </div>
      </div>
    );
  }

  // Auth is enabled, render authenticated app
  return <AuthenticatedApp />;
}
