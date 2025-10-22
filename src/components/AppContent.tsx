import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { PortalLink } from "@kinde-oss/kinde-auth-react/components";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

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
        <nav className="">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-semibold text-gray-800">
                App name
              </div>
              <div className="flex items-center space-x-4">
                {/* User Profile Section */}
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    {user?.picture ? (
                      <AvatarImage
                        src={user.picture}
                        alt="user profile avatar"
                      />
                    ) : null}
                    <AvatarFallback className="bg-gray-600 text-white font-semibold">
                      {user?.givenName?.[0] || user?.familyName?.[0] || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium text-gray-800">
                      {user?.givenName} {user?.familyName}
                    </p>
                    <p className="text-gray-500">{user?.email}</p>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-2">
                  <Button asChild variant="uncontained">
                    <PortalLink>Account</PortalLink>
                  </Button>
                  <Button onClick={handleLogout}>Sign out</Button>
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
