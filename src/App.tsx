import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoggedOut from "./components/LoggedOut";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const { isLoading, isAuthenticated } = useKindeAuth();

  if (isLoading) return <>Loading...</>;

  return (
    <Router>
      <Routes>
        {/* Public route - shows login/register when not authenticated */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/home" replace /> : <LoggedOut />
          }
        />

        {/* Protected routes - only accessible when authenticated */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Redirect any unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
