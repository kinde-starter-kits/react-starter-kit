import { Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Example access control using KindeAuth has() function
const adminPermissions = { permissions: ['admin'] };
const userPermissions = { permissions: ['user'] };
const premiumPermissions = { permissions: ['premium'] };
const managerRoles = { roles: ['manager'] };
const specialPermissions = { permissions: ['special'] };

export default function AccessControlExamples() {

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
          <h3>Admin Permissions</h3>
          <p>This route requires admin permissions.</p>
          <ProtectedRoute has={adminPermissions} fallbackPath="/home">
            <div className="access-content">
              <p>✅ You have admin permissions!</p>
            </div>
          </ProtectedRoute>
        </div>

        <div className="example-card">
          <h3>User Permissions</h3>
          <p>This route requires user permissions.</p>
          <ProtectedRoute has={userPermissions} fallbackPath="/home">
            <div className="access-content">
              <p>✅ You have user permissions!</p>
            </div>
          </ProtectedRoute>
        </div>

        <div className="example-card">
          <h3>Premium Permissions</h3>
          <p>This route requires premium permissions.</p>
          <ProtectedRoute has={premiumPermissions} fallbackPath="/home">
            <div className="access-content">
              <p>✅ You have premium permissions!</p>
            </div>
          </ProtectedRoute>
        </div>

        <div className="example-card">
          <h3>Manager Role</h3>
          <p>This route requires the manager role.</p>
          <ProtectedRoute has={managerRoles} fallbackPath="/home">
            <div className="access-content">
              <p>✅ You have manager role!</p>
            </div>
          </ProtectedRoute>
        </div>

        <div className="example-card">
          <h3>Custom Fallback Path</h3>
          <p>This route redirects to dashboard when access is denied.</p>
          <ProtectedRoute 
            has={specialPermissions}
            fallbackPath="/dashboard"
          >
            <div className="access-content">
              <p>✅ You have special permissions!</p>
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