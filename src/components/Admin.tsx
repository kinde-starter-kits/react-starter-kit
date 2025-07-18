import { PortalLink } from "@kinde-oss/kinde-auth-react/components";
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";
import { has } from "@kinde-oss/kinde-auth-react/utils";
import { useState, useEffect } from "react";

export default function Admin() {
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
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            {!isLoading && isAdmin && (
              <Link to="/admin" className="nav-link active">Admin</Link>
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
              <h1 className="text-display-2">Admin Panel</h1>
              <p className="text-body-1">Manage your application and user permissions.</p>
            </div>
            <div className="welcome-actions">
              <PortalLink className="btn btn-dark">Manage Account</PortalLink>
              <Link to="/dashboard" className="btn btn-light">Back to Dashboard</Link>
            </div>
          </section>

          {/* Admin Stats */}
          <section className="dashboard-stats">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-content">
                  <h3 className="stat-value">Users</h3>
                  <p className="stat-label">Manage user accounts</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🔐</div>
                <div className="stat-content">
                  <h3 className="stat-value">Permissions</h3>
                  <p className="stat-label">Control access rights</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⚙️</div>
                <div className="stat-content">
                  <h3 className="stat-value">Settings</h3>
                  <p className="stat-label">Configure application</p>
                </div>
              </div>
            </div>
          </section>

          {/* Admin Content */}
          <section className="dashboard-content">
            <div className="content-grid">
              {/* User Management Card */}
              <div className="content-card">
                <div className="card-header">
                  <h2 className="text-heading-1">User Management</h2>
                  <button className="btn btn-ghost btn-small">Add User</button>
                </div>
                <div className="admin-content">
                  <div className="admin-item">
                    <div className="admin-icon">👤</div>
                    <div className="admin-content-text">
                      <h3 className="admin-title">View All Users</h3>
                      <p className="admin-description">Browse and manage user accounts</p>
                    </div>
                    <div className="admin-arrow">→</div>
                  </div>
                  <div className="admin-item">
                    <div className="admin-icon">🔍</div>
                    <div className="admin-content-text">
                      <h3 className="admin-title">User Analytics</h3>
                      <p className="admin-description">View user activity and statistics</p>
                    </div>
                    <div className="admin-arrow">→</div>
                  </div>
                  <div className="admin-item">
                    <div className="admin-icon">📊</div>
                    <div className="admin-content-text">
                      <h3 className="admin-title">Reports</h3>
                      <p className="admin-description">Generate user and system reports</p>
                    </div>
                    <div className="admin-arrow">→</div>
                  </div>
                </div>
              </div>

              {/* System Settings Card */}
              <div className="content-card">
                <div className="card-header">
                  <h2 className="text-heading-1">System Settings</h2>
                  <button className="btn btn-ghost btn-small">Save</button>
                </div>
                <div className="admin-content">
                  <div className="admin-item">
                    <div className="admin-icon">🔧</div>
                    <div className="admin-content-text">
                      <h3 className="admin-title">Application Config</h3>
                      <p className="admin-description">Configure application settings</p>
                    </div>
                    <div className="admin-arrow">→</div>
                  </div>
                  <div className="admin-item">
                    <div className="admin-icon">🛡️</div>
                    <div className="admin-content-text">
                      <h3 className="admin-title">Security Settings</h3>
                      <p className="admin-description">Manage security policies</p>
                    </div>
                    <div className="admin-arrow">→</div>
                  </div>
                  <div className="admin-item">
                    <div className="admin-icon">📧</div>
                    <div className="admin-content-text">
                      <h3 className="admin-title">Email Templates</h3>
                      <p className="admin-description">Customize email notifications</p>
                    </div>
                    <div className="admin-arrow">→</div>
                  </div>
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