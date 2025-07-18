# Enhanced ProtectedRoute Component

The `ProtectedRoute` component has been enhanced to support custom access control beyond basic authentication. This allows you to implement role-based access control, feature flags, and other permission-based routing.

## Basic Usage

```tsx
import ProtectedRoute from "./components/ProtectedRoute";

// Basic authentication only
<ProtectedRoute>
  <YourComponent />
</ProtectedRoute>
```

## Advanced Usage with Access Control

### Custom Access Function

```tsx
// Define your access control function
const isAdmin = (user: UserProfile | undefined) => 
  user?.email?.includes('admin') || false;

// Use it in your route
<ProtectedRoute access={isAdmin} fallbackPath="/home">
  <AdminPanel />
</ProtectedRoute>
```

### Custom Fallback Path

```tsx
<ProtectedRoute 
  access={(user) => user?.email?.includes('premium') || false}
  fallbackPath="/upgrade"
>
  <PremiumContent />
</ProtectedRoute>
```

## Access Control Examples

### Email-Based Access

```tsx
// Only users with admin in their email
const isAdmin = (user: UserProfile | undefined) => 
  user?.email?.includes('admin') || false;

// Only users with specific domain
const isCompanyUser = (user: UserProfile | undefined) => 
  user?.email?.endsWith('@company.com') || false;
```

### Profile-Based Access

```tsx
// Users with profile pictures
const hasProfilePicture = (user: UserProfile | undefined) => 
  !!user?.picture;

// Users with complete names
const hasFullName = (user: UserProfile | undefined) => 
  !!(user?.givenName && user?.familyName);
```

### ID-Based Access

```tsx
// Specific user access
const isSpecificUser = (user: UserProfile | undefined) => 
  user?.id === 'specific-user-id';

// Multiple user access
const isAllowedUser = (user: UserProfile | undefined) => 
  ['user1', 'user2', 'user3'].includes(user?.id || '');
```

## Integration with KindeAuth Features

### Using KindeAuth Permissions

```tsx
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const hasPermission = (user: UserProfile | undefined) => {
  // You can use KindeAuth's permission system
  // This is a simplified example
  return user?.permissions?.includes('read:admin') || false;
};
```

### Using KindeAuth Roles

```tsx
const hasRole = (user: UserProfile | undefined) => {
  // You can use KindeAuth's role system
  // This is a simplified example
  return user?.roles?.includes('manager') || false;
};
```

## Component Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | Yes | - | The component to render if access is granted |
| `access` | `(user: UserProfile \| undefined) => boolean` | No | - | Function that determines if user has access |
| `fallbackPath` | `string` | No | `"/"` | Path to redirect to if access is denied |

## UserProfile Type

The `UserProfile` type from KindeAuth includes:

```tsx
interface UserProfile {
  id: string;
  givenName?: string;
  familyName?: string;
  email?: string;
  picture?: string;
}
```

## Best Practices

1. **Always provide fallback paths** for better user experience
2. **Use descriptive access function names** for better code readability
3. **Handle undefined users gracefully** in your access functions
4. **Combine multiple conditions** when needed for complex access control
5. **Test your access functions** with different user scenarios

## Example Implementation

```tsx
// In your App.tsx or router configuration
<Routes>
  <Route path="/" element={<PublicPage />} />
  
  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />
  
  <Route
    path="/admin"
    element={
      <ProtectedRoute 
        access={(user) => user?.email?.includes('admin') || false}
        fallbackPath="/dashboard"
      >
        <AdminPanel />
      </ProtectedRoute>
    }
  />
  
  <Route
    path="/premium"
    element={
      <ProtectedRoute 
        access={(user) => user?.email?.includes('premium') || false}
        fallbackPath="/upgrade"
      >
        <PremiumContent />
      </ProtectedRoute>
    }
  />
</Routes>
```

## Testing Access Control

You can test different access scenarios by:

1. **Using different email addresses** when registering users
2. **Creating test users** with specific properties
3. **Using the examples page** at `/examples` to see different access controls in action

## Migration from Basic ProtectedRoute

If you were using the basic `ProtectedRoute` before, your existing code will continue to work without changes. The new `access` and `fallbackPath` props are optional. 