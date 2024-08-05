import React, { useContext } from 'react';
import { StatusBar, StatusBarProps, useColorScheme } from 'react-native';
import { usePalette } from '../../assets/color-palette/ThemeApp';
import { AuthContext } from '../../services/Context/AuthContext';

const CustomStatusBar = (props: StatusBarProps) => {
  const palette = usePalette();
    const colorScheme=useColorScheme()
    console.log("ssss",colorScheme);
    const {lightModeStatus}=useContext(AuthContext)
    const StatusStyle =
    lightModeStatus === 'light'
      ? "dark-content"
      : lightModeStatus === 'dark'
      ? "light-content"
      : colorScheme === 'dark'
      ? "light-content"
      : "dark-content";
  return (
    <StatusBar
      barStyle={StatusStyle}
      backgroundColor={palette.darkBackgroundColor}
      {...props}
    />
  );
};

export default CustomStatusBar;
