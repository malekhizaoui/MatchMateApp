import { useColorScheme } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../../services/Context/AuthContext';

const darkPalette = {
  primaryColor: '#00979D',
  secondaryColor: '#0a6b77',
  darkBackgroundColor: '#171717',
  lightBackgroundColor: '#262626',
  lightColor: '#F5F5F5',
  whiteColor: '#FFFFFF',
  blackColor: '#383838',
  primaryTextColor: '#383838',
  secondaryTextColor: '#FFFFFF',
};

const lightPalette = {
  primaryColor: '#00979D',
  secondaryColor: '#0a6b77',
  darkBackgroundColor: '#FFFFFF',
  lightBackgroundColor: '#eae8e8',
  lightColor: '#262626',
  whiteColor: '#FFFFFF',
  blackColor: '#383838',
  primaryTextColor: '#FFFFFF',
  secondaryTextColor: '#383838',
};

export const usePalette = () => {
  const colorScheme = useColorScheme();
  const { lightModeStatus } = useContext(AuthContext);

  const palette = lightModeStatus !== null
    ? lightModeStatus === 'light'
      ? lightPalette
      : lightModeStatus === 'dark'
      ? darkPalette
      : colorScheme === 'dark'
      ? darkPalette
      : darkPalette
    : colorScheme === 'dark'
    ? darkPalette
    : lightPalette;

  return palette;
};
