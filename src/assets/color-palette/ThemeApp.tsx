// ThemeProvider.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { Theme } from '../../App/models/Theme';

const defaultTheme: Theme = {
  primaryColor: '',
  secondaryColor: '',
  darkBackgroundColor: '',
  lightBackgroundColor: '',
  lightColor: '',
  whiteColor: '',
  blackColor: '',
  primaryTextColor: '',
  secondaryTextColor: '',
};

const ThemeContext = createContext<Theme>(defaultTheme);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const colorScheme = useColorScheme();

  const MatchMatePalette = colorScheme === 'dark' ? {
    primaryColor: '#00979D',
    secondaryColor: '#0a6b77',
    darkBackgroundColor: '#171717',
    lightBackgroundColor: '#262626',
    lightColor: '#F5F5F5',
    whiteColor: '#FFFFFF',
    blackColor: '#383838',
    primaryTextColor: '#FFFFFF',
    secondaryTextColor: '#383838'
  } : {
    primaryColor: '#00979D',
    secondaryColor: '#0a6b77',
    darkBackgroundColor: '#FFFFFF',
    lightBackgroundColor: '#eae8e8',
    lightColor: '#262626',
    whiteColor: '#FFFFFF',
    blackColor: '#383838',
    primaryTextColor: '#383838',
    secondaryTextColor: '#FFFFFF'
  };

  return (
    <ThemeContext.Provider value={MatchMatePalette}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
