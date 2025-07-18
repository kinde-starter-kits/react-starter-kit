import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { PortalLink } from "@kinde-oss/kinde-auth-react/components";
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";
import { has } from "@kinde-oss/kinde-auth-react/utils";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const { user } = useKindeAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdminRole = async () => {
      try {
        const hasAdminRole = await has({ roles: ['admin'] });
        setIsAdmin(hasAdminRole);
      } catch (error) {
        console.error('Error checking admin role:', error);
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAdminRole();
  }, []);

  return (
    <>
      <header>
        <nav className="nav container">
          <h1 className="text-display-3">KindeAuth</h1>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/dashboard" className="nav-link active">Dashboard</Link>
            {!isLoading && isAdmin && (
              <Link to="/admin" className="nav-link">Admin</Link>
            )}
          </div>
          <UserDropdown />
        </nav>
      </header>

      <main>
        <div className="container">
          {/* Welcome Section */}
          <section className="dashboard-welcome">
            <div className="welcome-content">
              <h1 className="text-display-2">Welcome back, {user?.givenName}!</h1>
              <p className="text-body-1">Here's what's happening with your account today.</p>
            </div>
            <div className="welcome-actions">
              <PortalLink className="btn btn-dark">Manage Account</PortalLink>
              <a 
                href="https://kinde.com/docs/developer-tools/react-sdk" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-light"
              >
                View Documentation
              </a>
            </div>
          </section>

          {/* Stats Overview */}
          <section className="dashboard-stats">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">👤</div>
                <div className="stat-content">
                  <h3 className="stat-value">Active</h3>
                  <p className="stat-label">Account Status</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🔐</div>
                <div className="stat-content">
                  <h3 className="stat-value">Secure</h3>
                  <p className="stat-label">Authentication</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⚡</div>
                <div className="stat-content">
                  <h3 className="stat-value">Ready</h3>
                  <p className="stat-label">System Status</p>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Grid */}
          <section className="dashboard-content">
            <div className="content-grid">
              {/* User Profile Card */}
              <div className="content-card profile-card">
                <div className="card-header">
                  <h2 className="text-heading-1">Profile Information</h2>
                </div>
                <div className="profile-details">
                  <div className="profile-avatar">
                    {user?.picture !== "" ? (
                      <img
                        className="avatar-large"
                        src={user?.picture}
                        alt="user profile avatar"
                      />
                    ) : (
                      <div className="avatar-large">
                        {user?.givenName?.[0]}
                        {user?.familyName?.[1]}
                      </div>
                    )}
                  </div>
                  <div className="profile-info">
                    <div className="info-row">
                      <span className="info-label">Name</span>
                      <span className="info-value">{user?.givenName} {user?.familyName}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Email</span>
                      <span className="info-value">{user?.email}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">User ID</span>
                      <span className="info-value code">{user?.id}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions Card */}
              <div className="content-card">
                <div className="card-header">
                  <h2 className="text-heading-1">Quick Actions</h2>
                </div>
                <div className="actions-list">
                  <Link to="/" className="action-item">
                    <div className="action-icon">🏠</div>
                    <div className="action-content">
                      <h3 className="action-title">Go to Home</h3>
                      <p className="action-description">Return to the main page</p>
                    </div>
                    <div className="action-arrow">→</div>
                  </Link>
                  <a 
                    href="https://kinde.com/docs/developer-tools/react-sdk" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="action-item"
                  >
                    <div className="action-icon">📚</div>
                    <div className="action-content">
                      <h3 className="action-title">View Documentation</h3>
                      <p className="action-description">Read the KindeAuth React SDK docs</p>
                    </div>
                    <div className="action-arrow">→</div>
                  </a>
                  <PortalLink className="action-item">
                    <div className="action-icon">⚙️</div>
                    <div className="action-content">
                      <h3 className="action-title">Account Settings</h3>
                      <p className="action-description">Manage your account</p>
                    </div>
                    <div className="action-arrow">→</div>
                  </PortalLink>
                </div>
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