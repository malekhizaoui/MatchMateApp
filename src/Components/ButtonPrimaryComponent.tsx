import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BtnContainer, TextBtnContainer} from './StyledComponent';
import { usePalette } from '../assets/color-palette/ThemeApp';
interface PrimaryButtonProps {
  titlebtn: string;
  colorbtn: string;
  colorTxtBtn: string;
  widthPrimaryBtn: any | string;
  event: () => void;
  radius:number
}

const PrimaryButtonComponant = ({
  titlebtn,
  colorbtn,
  colorTxtBtn,
  widthPrimaryBtn,
  event,
  radius,
}: PrimaryButtonProps) => {
  const palette = usePalette();

  return (
    <BtnContainer
      onPress={event}
      style={{
        backgroundColor: colorbtn,
        width: widthPrimaryBtn,
        borderColor: palette.primaryColor,
        borderWidth: 1,
        borderRadius:radius
      }}>
      <TextBtnContainer style={{color: colorTxtBtn}}>
        {titlebtn}
      </TextBtnContainer>
    </BtnContainer>
  );
};

export default PrimaryButtonComponant;

const styles = StyleSheet.create({});