export const AUTH_CONFIG = {
  // Enable/disable authentication with environment variable
  ENABLED: import.meta.env.VITE_ENABLE_AUTH === "true",

  // Kinde configuration
  KINDE: {
    CLIENT_ID: import.meta.env.VITE_KINDE_CLIENT_ID,
    DOMAIN: import.meta.env.VITE_KINDE_DOMAIN,
    REDIRECT_URL: import.meta.env.VITE_KINDE_REDIRECT_URL,
    LOGOUT_URL: import.meta.env.VITE_KINDE_LOGOUT_URL,
  },
};
