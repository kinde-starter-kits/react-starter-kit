import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-react/components";

export default function LoggedOut() {
  return (
    <div className="min-h-screen">
      <nav className="shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-800">
              React Starter Kit
            </div>
            <div className="flex space-x-4">
              <LoginLink className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium">
                Sign in
              </LoginLink>
              <RegisterLink className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 font-medium">
                Sign up
              </RegisterLink>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Blank content area */}
      </main>
    </div>
  );
}
