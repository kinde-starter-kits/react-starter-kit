import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-react/components";
import { Button } from "./ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <nav className="shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-800">App name</div>
            <div className="flex space-x-4">
              <Button asChild variant="uncontained">
                <LoginLink>Sign in</LoginLink>
              </Button>
              <Button asChild variant="primary">
                <RegisterLink>Sign up</RegisterLink>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Blank content area for landing page*/}
      </main>
    </div>
  );
}
