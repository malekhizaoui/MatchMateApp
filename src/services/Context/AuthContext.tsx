import React, { createContext, Dispatch, SetStateAction } from 'react';

export interface AuthContextProps {
  lightModeStatus: string | null; // Allows null when status is not yet set
  setLightModeStatusContext: (color: string | null) => void; // Allows null
  signIn: () => void;
  signOut: () => void;
  setBarColorCntxt: (color: string) => void;
}

// Default values for the context
const defaultContextValue: AuthContextProps = {
  lightModeStatus: null,
  setLightModeStatusContext: () => {},
  signIn: () => {},
  signOut: () => {},
  setBarColorCntxt: () => {},
};

export const AuthContext = createContext<AuthContextProps>(defaultContextValue);
