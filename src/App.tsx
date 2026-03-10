import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AppContent from "./components/AppContent";
import LandingPage from "./components/LandingPage";

export default function App() {
  const { isLoading, isAuthenticated, error } = useKindeAuth();

  if (error) {
    return <div>"Error"</div>;
  }
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

  return isAuthenticated ? <AppContent /> : <LandingPage />;
}
