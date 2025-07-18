import { useState, useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  has?: {
    roles?: string[];
    permissions?: string[];
    featureFlags?: string[];
    billingEntitlements?: string[];
    forceApi?: boolean | {
      roles?: boolean;
      permissions?: boolean;
      featureFlags?: boolean;
      billingEntitlements?: true;
    };
  };
  fallbackPath?: string;
}

export default function ProtectedRoute({ 
  children, 
  has: hasParams, 
  fallbackPath = "/" 
}: ProtectedRouteProps) {
  const { isLoading, isAuthenticated, has } = useKindeAuth();
  const [accessLoading, setAccessLoading] = useState(false);
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAccess = async () => {
      if (!hasParams) {
        setHasAccess(true);
        return;
      }

      setAccessLoading(true);
      try {
        const result = await has(hasParams);
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
  }, [has, hasParams, isAuthenticated]);

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