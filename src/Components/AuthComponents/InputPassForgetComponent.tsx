import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import {
  ContainerInputPassForget,
  TextInputStyle,
  IconStyle,
} from './StyledComponent/StyledComponent';

import { usePalette } from '../../assets/color-palette/ThemeApp';

interface InputPassForgetComponentProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  valueInput: string;
  iconComponent: any;
  placeholder: string;
}

export const InputPassForgetComponent = ({
  iconComponent,
  setValue,
  valueInput,
  placeholder,
}: InputPassForgetComponentProps) => {
  const palette=usePalette()

  return (
    <ContainerInputPassForget     palette={palette}
>
      <IconStyle>{iconComponent}</IconStyle>
      <TextInputStyle
        value={valueInput}
        onChangeText={value => setValue(value)}
        placeholder={placeholder}
        placeholderTextColor={'grey'}></TextInputStyle>
    </ContainerInputPassForget>
  );
};
