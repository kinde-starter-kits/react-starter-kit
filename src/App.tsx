import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import LoggedOut from "./components/LoggedOut";

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
        <Route path="/home" element={<Home />} />

        {/* Redirect any unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
