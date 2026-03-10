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

### Using KindeAuth Permissions

```tsx
// Check for specific permissions
<ProtectedRoute has={{ permissions: ['admin'] }} fallbackPath="/home">
  <AdminPanel />
</ProtectedRoute>
```

### Using KindeAuth Roles

```tsx
<ProtectedRoute 
  has={{ roles: ['manager'] }}
  fallbackPath="/upgrade"
>
  <ManagerContent />
</ProtectedRoute>
```

## Access Control Examples

### Permission-Based Access

```tsx
// Check for admin permissions
<ProtectedRoute has={{ permissions: ['admin'] }}>
  <AdminPanel />
</ProtectedRoute>

// Check for multiple permissions
<ProtectedRoute has={{ permissions: ['read', 'write'] }}>
  <Editor />
</ProtectedRoute>
```

### Role-Based Access

```tsx
// Check for specific role
<ProtectedRoute has={{ roles: ['manager'] }}>
  <ManagerDashboard />
</ProtectedRoute>

// Check for multiple roles
<ProtectedRoute has={{ roles: ['admin', 'supervisor'] }}>
  <AdminDashboard />
</ProtectedRoute>
```

### Feature Flag Access

```tsx
// Check for feature flags
<ProtectedRoute has={{ featureFlags: ['beta-feature'] }}>
  <BetaFeature />
</ProtectedRoute>
```

### Billing Entitlements

```tsx
// Check for billing entitlements
<ProtectedRoute has={{ billingEntitlements: ['premium'] }}>
  <PremiumContent />
</ProtectedRoute>
```

## Integration with KindeAuth Features

The `ProtectedRoute` component now directly integrates with KindeAuth's `has()` function, making it easier to check permissions, roles, feature flags, and billing entitlements without writing custom access functions.

### Using KindeAuth Permissions

```tsx
// Check for specific permissions
<ProtectedRoute has={{ permissions: ['read:admin', 'write:admin'] }}>
  <AdminPanel />
</ProtectedRoute>
```

### Using KindeAuth Roles

```tsx
// Check for specific roles
<ProtectedRoute has={{ roles: ['admin', 'supervisor'] }}>
  <AdminDashboard />
</ProtectedRoute>
```

### Using Feature Flags

```tsx
// Check for feature flags
<ProtectedRoute has={{ featureFlags: ['beta-feature', 'new-ui'] }}>
  <BetaFeature />
</ProtectedRoute>
```

### Using Billing Entitlements

```tsx
// Check for billing entitlements
<ProtectedRoute has={{ billingEntitlements: ['premium', 'enterprise'] }}>
  <PremiumContent />
</ProtectedRoute>
```

## Component Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | Yes | - | The component to render if access is granted |
| `has` | `HasParams` | No | - | KindeAuth has() parameters to check permissions/roles |
| `fallbackPath` | `string` | No | `"/"` | Path to redirect to if access is denied |

## HasParams Type

The `has` prop accepts the same parameters as KindeAuth's `has()` function:

```tsx
interface HasParams {
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
        has={{ permissions: ['admin'] }}
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
        has={{ billingEntitlements: ['premium'] }}
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

1. **Setting up permissions and roles** in your KindeAuth dashboard
2. **Creating test users** with specific permissions/roles
3. **Using the examples page** at `/examples` to see different access controls in action
4. **Testing feature flags** by enabling/disabling them in KindeAuth

## Migration from Basic ProtectedRoute

If you were using the basic `ProtectedRoute` before, your existing code will continue to work without changes. The new `has` and `fallbackPath` props are optional.

## Migration from Custom Access Functions

If you were using custom access functions with the `access` prop, you can now use the `has` prop instead:

**Before:**
```tsx
<ProtectedRoute access={(user) => user?.email?.includes('admin') || false}>
  <AdminPanel />
</ProtectedRoute>
```

**After:**
```tsx
<ProtectedRoute has={{ permissions: ['admin'] }}>
  <AdminPanel />
</ProtectedRoute>
``` 