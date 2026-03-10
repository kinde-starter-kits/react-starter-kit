# Authentication Setup Guide

This React Starter Kit includes optional authentication functionality that can be enabled or disabled using environment variables.

## Quick Start

### 1. Enable Authentication

To enable authentication, create a `.env` file in the root directory and set:

```bash
VITE_ENABLE_AUTH=true
```

### 2. Configure Kinde Authentication

You'll also need to set up your Kinde authentication credentials:

```bash
VITE_KINDE_CLIENT_ID=your_kinde_client_id
VITE_KINDE_DOMAIN=https://your_subdomain.kinde.com
VITE_KINDE_REDIRECT_URL=http://localhost:3000
VITE_KINDE_LOGOUT_URL=http://localhost:3000
```

### 3. Disable Authentication

To disable authentication, set:

```bash
VITE_ENABLE_AUTH=false
```

## How It Works

- **Authentication Disabled**: Shows a simple welcome page without any auth components
- **Authentication Enabled**: Shows login/signup forms and user dashboard with full authentication flow

## Features

When authentication is enabled:

- **LoggedOut Component**: Shows navbar with Sign In and Sign Up buttons
- **LoggedIn Component**: Shows navbar with user profile, account management, and logout
- **Responsive Design**: Built with Tailwind CSS for modern, mobile-friendly UI
- **User Profile**: Displays user information including name, email, and profile picture

## Environment Variables

| Variable                  | Description                   | Default                    |
| ------------------------- | ----------------------------- | -------------------------- |
| `VITE_ENABLE_AUTH`        | Enable/disable authentication | `false`                    |
| `VITE_KINDE_CLIENT_ID`    | Kinde client ID               | Required when auth enabled |
| `VITE_KINDE_DOMAIN`       | Kinde domain                  | Required when auth enabled |
| `VITE_KINDE_REDIRECT_URL` | Redirect URL after auth       | Required when auth enabled |
| `VITE_KINDE_LOGOUT_URL`   | Logout redirect URL           | Required when auth enabled |

## Getting Started with Kinde

1. Sign up at [Kinde](https://kinde.com)
2. Create a new application
3. Get your client ID and domain
4. Configure your redirect URLs
5. Update your `.env` file with the credentials

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The authentication feature is completely optional and won't affect your app's functionality when disabled.
