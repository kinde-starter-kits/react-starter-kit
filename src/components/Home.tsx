import { Link } from "react-router-dom";
import { PortalLink } from "@kinde-oss/kinde-auth-react/components";
import UserDropdown from "./UserDropdown";
import { has } from "@kinde-oss/kinde-auth-react/utils";
import { useState, useEffect } from "react";

export default function Home() {
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
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            {!isLoading && isAdmin && (
              <Link to="/admin" className="nav-link">Admin</Link>
            )}
          </div>
          <UserDropdown />
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="card start-hero">
            <p className="text-body-2 start-hero-intro">Woohoo!</p>
            <p className="text-display-2">
              Your authentication is all sorted.
              <br />
              Build the important stuff.
            </p>
            <div className="hero-actions">
              <Link to="/dashboard" className="btn btn-dark btn-big">
                Go to Dashboard
              </Link>
            </div>
          </div>
          
          <section className="next-steps-section">
            <h2 className="text-heading-1">Next steps for you</h2>
            <div className="steps-grid">
              <div className="step-card">
                <h3 className="text-heading-2">Explore Dashboard</h3>
                <p className="text-body-2">
                  Check out your personalized dashboard with user information and quick actions.
                </p>
                <Link to="/dashboard" className="btn btn-light">View Dashboard</Link>
              </div>
              
              <div className="step-card">
                <h3 className="text-heading-2">Manage Account</h3>
                <p className="text-body-2">
                  Update your profile, change settings, and manage your account preferences.
                </p>
                <PortalLink className="btn btn-light">Account Settings</PortalLink>
              </div>
              
              <div className="step-card">
                <h3 className="text-heading-2">Access Control Examples</h3>
                <p className="text-body-2">
                  See examples of how to use the enhanced ProtectedRoute with custom access control.
                </p>
                <Link to="/examples" className="btn btn-light">
                  View Examples
                </Link>
              </div>
              
              <div className="step-card">
                <h3 className="text-heading-2">Read Documentation</h3>
                <p className="text-body-2">
                  Learn more about KindeAuth and how to customize your authentication flow.
                </p>
                <a
                  href="https://kinde.com/docs/developer-tools/react-sdk"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light"
                >
                  Go to docs
                </a>
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