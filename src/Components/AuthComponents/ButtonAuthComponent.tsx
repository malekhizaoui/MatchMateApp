import React from 'react';
import {ActivityIndicator} from 'react-native';
import {ButtonStyle, TextButton} from './StyledComponent/StyledComponent';
import {usePalette} from '../../assets/color-palette/ThemeApp';

interface ButtonAuthComponentProps {
  btnText: string;
  backgroundColor: string;
  btnTextColor: string;
  btnClicked: () => void;
  iconComponent: any;
  loading?: boolean; // 1. Add loading prop
}

const ButtonAuthComponent = ({
  btnText,
  backgroundColor,
  btnTextColor,
  btnClicked,
  iconComponent,
  loading,
}: ButtonAuthComponentProps) => {
  const palette = usePalette();
  return (
    <ButtonStyle
      palette={palette}
      style={{backgroundColor}}
      onPress={btnClicked}
      disabled={loading}>
      {/* 2. Disable button when loading */}
      {loading ? (
        <ActivityIndicator color={btnTextColor} /> // 3. Show loading indicator when loading is true
      ) : (
        <>
          {iconComponent}
          <TextButton palette={palette} style={{color: btnTextColor}}>
            {btnText}
          </TextButton>
        </>
      )}
    </ButtonStyle>
  );
};

export default ButtonAuthComponent;
