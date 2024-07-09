import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import {
  ContainerInputPassForget,
  TextInputStyle,
  IconStyle,
} from './StyledComponent/StyledComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserNameIconSVG from '../../assets/Icons/svg/UsernameIconSVG';
import {MatchMatePalette} from '../../assets/color-palette';
import MailIconSVG from '../../assets/Icons/svg/MailIconSVG';

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
  return (
    <ContainerInputPassForget>
      <IconStyle>{iconComponent}</IconStyle>
      <TextInputStyle
        value={valueInput}
        onChangeText={value => setValue(value)}
        placeholder={placeholder}
        placeholderTextColor={'grey'}></TextInputStyle>
    </ContainerInputPassForget>
  );
};
