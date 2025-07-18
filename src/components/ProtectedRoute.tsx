import { useState, useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Navigate } from "react-router-dom";
import type { UserProfile } from "@kinde/js-utils";

interface ProtectedRouteProps {
  children: React.ReactNode;
  access?: (user: UserProfile | undefined) => boolean | Promise<boolean>;
  fallbackPath?: string;
}

export default function ProtectedRoute({ 
  children, 
  access, 
  fallbackPath = "/" 
}: ProtectedRouteProps) {
  const { isLoading, isAuthenticated, user } = useKindeAuth();
  const [accessLoading, setAccessLoading] = useState(false);
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAccess = async () => {
      if (!access) {
        setHasAccess(true);
        return;
      }

      setAccessLoading(true);
      try {
        const result = await access(user);
        setHasAccess(result);
      } catch (error) {
        console.error('Access check failed:', error);
        setHasAccess(false);
      } finally {
        setAccessLoading(false);
      }
    };

    if (isAuthenticated) {
      checkAccess();
    }
  }, [access, user, isAuthenticated]);

  if (isLoading || accessLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to={fallbackPath} replace />;
  }

  if (hasAccess === false) {
    return <Navigate to={fallbackPath} replace />;
  }

  if (hasAccess === null) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
} 