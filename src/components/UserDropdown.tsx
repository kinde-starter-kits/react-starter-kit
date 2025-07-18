import { useState, useRef, useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { LogoutLink, PortalLink } from "@kinde-oss/kinde-auth-react/components";

export default function UserDropdown() {
  const { user } = useKindeAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown when pressing Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-dropdown" ref={dropdownRef}>
      <button 
        className="dropdown-trigger" 
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {user?.picture !== "" ? (
          <img
            className="avatar"
            src={user?.picture}
            alt="user profile avatar"
          />
        ) : (
          <div className="avatar">
            {user?.givenName?.[0]}
            {user?.familyName?.[1]}
          </div>
        )}
        <span className="user-name">
          {user?.givenName} {user?.familyName}
        </span>
        <svg 
          className={`dropdown-arrow ${isOpen ? 'open' : ''}`} 
          width="12" 
          height="12" 
          viewBox="0 0 12 12"
          fill="none"
        >
          <path 
            d="M3 4.5L6 7.5L9 4.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <p className="user-email">{user?.email}</p>
          </div>
          <ul className="dropdown-items">
            <li>
              <PortalLink className="dropdown-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="currentColor"/>
                </svg>
                Account Settings
              </PortalLink>
            </li>
            <li>
              <LogoutLink className="dropdown-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12H2C1.45 12 1 11.55 1 11V5C1 4.45 1.45 4 2 4H6M10 8L14 4M14 4L10 0M14 4H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Sign out
              </LogoutLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
} 