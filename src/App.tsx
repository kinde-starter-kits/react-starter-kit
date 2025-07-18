import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoggedOut from "./components/LoggedOut";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AccessControlExamples from "./components/AccessControlExamples";
import Admin from "./components/Admin";

export default function App() {
  const { isLoading, isAuthenticated } = useKindeAuth();

  if (isLoading) return <>Loading...</>;

  return (
    <Router>
      <Routes>
        {/* Public route - shows login/register when not authenticated */}
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/home" replace /> : <LoggedOut />} 
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
        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        
        {/* Admin route with role-based access control */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute 
              has={{ roles: ['admin'] }}
              fallbackPath="/home"
            >
              <Admin />
            </ProtectedRoute>
          }
        />
        
        {/* Access control examples page */}
        <Route
          path="/examples"
          element={
            <ProtectedRoute>
              <AccessControlExamples />
            </ProtectedRoute>
          }
        />
        
        {/* Redirect any unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
