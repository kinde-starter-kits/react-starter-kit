import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import type { UserProfile } from "@kinde/js-utils";

// Example access control functions based on actual UserProfile properties
const isAdmin = (user: UserProfile | undefined) => user?.email?.includes('admin') || false;
const hasEmail = (user: UserProfile | undefined) => !!user?.email;
const hasProfilePicture = (user: UserProfile | undefined) => !!user?.picture;
const hasFullName = (user: UserProfile | undefined) => !!(user?.givenName && user?.familyName);

export default function AccessControlExamples() {
  const { user } = useKindeAuth();

  return (
    <div className="container">
      <h1 className="text-display-2">Access Control Examples</h1>
      
      <section className="examples-grid">
        <div className="example-card">
          <h3>Basic Authentication</h3>
          <p>This route only requires the user to be logged in.</p>
          <ProtectedRoute>
            <div className="access-content">
              <p>✅ You have basic access!</p>
            </div>
          </ProtectedRoute>
        </div>

        <div className="example-card">
          <h3>Admin Access</h3>
          <p>This route requires the user's email to contain 'admin'.</p>
          <ProtectedRoute access={isAdmin} fallbackPath="/home">
            <div className="access-content">
              <p>✅ You have admin access!</p>
              <p>Current user: {user?.email}</p>
            </div>
          </ProtectedRoute>
        </div>

        <div className="example-card">
          <h3>Email Required</h3>
          <p>This route requires the user to have an email address.</p>
          <ProtectedRoute access={hasEmail} fallbackPath="/home">
            <div className="access-content">
              <p>✅ You have an email address!</p>
              <p>Email: {user?.email}</p>
            </div>
          </ProtectedRoute>
        </div>

        <div className="example-card">
          <h3>Profile Picture Required</h3>
          <p>This route requires the user to have a profile picture.</p>
          <ProtectedRoute access={hasProfilePicture} fallbackPath="/home">
            <div className="access-content">
              <p>✅ You have a profile picture!</p>
            </div>
          </ProtectedRoute>
        </div>

        <div className="example-card">
          <h3>Full Name Required</h3>
          <p>This route requires both given name and family name.</p>
          <ProtectedRoute access={hasFullName} fallbackPath="/home">
            <div className="access-content">
              <p>✅ You have a complete name!</p>
              <p>Name: {user?.givenName} {user?.familyName}</p>
            </div>
          </ProtectedRoute>
        </div>

        <div className="example-card">
          <h3>Custom Fallback Path</h3>
          <p>This route redirects to dashboard when access is denied.</p>
          <ProtectedRoute 
            access={(user) => user?.email?.includes('special') || false}
            fallbackPath="/dashboard"
          >
            <div className="access-content">
              <p>✅ You have special access!</p>
            </div>
          </ProtectedRoute>
        </div>
      </section>

      <div className="navigation-links">
        <Link to="/home" className="btn btn-light">Back to Home</Link>
        <Link to="/dashboard" className="btn btn-light">Go to Dashboard</Link>
      </div>
    </div>
  );
} 