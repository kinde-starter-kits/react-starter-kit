import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { LogoutLink, PortalLink } from "@kinde-oss/kinde-auth-react/components";

export default function LoggedIn() {
  const { user } = useKindeAuth();

  return (
    <>
      <header>
        <nav className="nav container">
          <h1 className="text-display-3">KindeAuth</h1>
          <div className="profile-blob">
            {user?.picture !== "" ? (
              <img
                className="avatar"
                src={user?.picture}
                alt="user profile avatar"
              />
            ) : (
              <div className="avatar">
                {user?.givenName?.[0]}
                {user?.familyName?.[1]}
              </div>
            )}
            <div>
              <p className="text-heading-2">
                {user?.givenName} {user?.familyName}
              </p>
              <ul className="c-user-menu">
                <li>
                  <PortalLink>Account</PortalLink>
                </li>
                <li>
                  <LogoutLink className="text-subtle">Sign out</LogoutLink>
                </li>
              </ul>
            </div>
          </div>
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
          </div>
          <section className="next-steps-section">
            <h2 className="text-heading-1">Next steps for you</h2>
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
