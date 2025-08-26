import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { PortalLink } from "@kinde-oss/kinde-auth-react/components";

export default function LoggedIn() {
  const { user, logout } = useKindeAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen">
      <header>
        <nav className="shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-semibold text-gray-800">
                React Starter Kit
              </div>
              <div className="flex items-center space-x-4">
                {/* User Profile Section */}
                <div className="flex items-center space-x-3">
                  {user?.picture ? (
                    <img
                      src={user.picture}
                      alt="user profile avatar"
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {user?.givenName?.[0] || user?.familyName?.[0] || "U"}
                    </div>
                  )}
                  <div className="text-sm">
                    <p className="font-medium text-gray-800">
                      {user?.givenName} {user?.familyName}
                    </p>
                    <p className="text-gray-500">{user?.email}</p>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-2">
                  <PortalLink className="px-3 py-2 text-gray-600 hover:text-gray-800 font-medium">
                    Account
                  </PortalLink>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 font-medium"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Blank content area */}
      </main>
    </div>
  );
}
