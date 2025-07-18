import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { PortalLink } from "@kinde-oss/kinde-auth-react/components";
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";

export default function Dashboard() {
  const { user } = useKindeAuth();

  return (
    <>
      <header>
        <nav className="nav container">
          <h1 className="text-display-3">KindeAuth</h1>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/dashboard" className="nav-link active">Dashboard</Link>
          </div>
          <UserDropdown />
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="card dashboard-hero">
            <h1 className="text-display-2">Dashboard</h1>
            <p className="text-body-1">Welcome to your personalized dashboard!</p>
          </div>
          
          <section className="dashboard-content">
            <div className="dashboard-grid">
              <div className="dashboard-card">
                <h3 className="text-heading-2">User Profile</h3>
                <div className="profile-info">
                  <p><strong>Email:</strong> {user?.email}</p>
                  <p><strong>Name:</strong> {user?.givenName} {user?.familyName}</p>
                  <p><strong>ID:</strong> {user?.id}</p>
                </div>
              </div>
              
              <div className="dashboard-card">
                <h3 className="text-heading-2">Quick Actions</h3>
                <div className="action-buttons">
                  <PortalLink className="btn btn-light">Manage Account</PortalLink>
                  <Link to="/" className="btn btn-ghost">Go to Home</Link>
                </div>
              </div>
              
              <div className="dashboard-card">
                <h3 className="text-heading-2">Recent Activity</h3>
                <p className="text-body-2">No recent activity to display.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <strong className="text-heading-2">KindeAuth</strong>
          <p className="footer-tagline text-body-3">
            Visit our{" "}
            <a className="link" href="https://kinde.com/docs">
              help center
            </a>
          </p>

          <small className="text-subtle">
            © 2023 KindeAuth, Inc. All rights reserved
          </small>
        </div>
      </footer>
    </>
  );
} 