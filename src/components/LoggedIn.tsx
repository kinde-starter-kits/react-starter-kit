// import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
// import { LogoutLink, PortalLink } from "@kinde-oss/kinde-auth-react/components";

export default function LoggedIn() {
  // You can use the user object to display user information
  // const { user } = useKindeAuth();

  return (
    <>
      <header>
        <nav>
          {/* this is how you use the user object */}
          {/* <div>
            {user?.picture !== "" ? (
              <img src={user?.picture} alt="user profile avatar" />
            ) : (
              <div>
                {user?.givenName?.[0]}
                {user?.familyName?.[1]}
              </div>
            )}
            <div>
              <p>
                {user?.givenName} {user?.familyName}
              </p>
              <ul>
                <li>
                // The PortalLink is used to navigate to the Kinde portal
                  <PortalLink>Account</PortalLink>
                </li>
                <li>
                  <LogoutLink>Sign out</LogoutLink>
                </li>
              </ul>
            </div>
          </div> */}
        </nav>
      </header>

      <main></main>

      <footer></footer>
    </>
  );
}
