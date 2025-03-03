import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-react/components";

export default function LoggedOut() {
  return (
    <>
      <header>
        <nav className="nav container">
          <h1 className="text-display-3">KindeAuth</h1>
          <div>
            <LoginLink className="btn btn-ghost sign-in-btn">Sign in</LoginLink>
            <RegisterLink className="btn btn-dark">Sign up</RegisterLink>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="card hero">
            <p className="text-display-1 hero-title">
              Let's start authenticating <br /> with KindeAuth
            </p>
            <p className="text-body-1 hero-tagline">Configure your app</p>

            <a
              href="https://kinde.com/docs/developer-tools/react-sdk"
              target="_blank"
              rel="noreferrer"
              className="btn btn-light btn-big"
            >
              Go to docs
            </a>
          </div>
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
