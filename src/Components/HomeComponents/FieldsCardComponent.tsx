import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import { MatchMatePalette } from '../../assets/color-palette';
import {
  FieldContent,
  ImageField,
  TitleCard,
  TxtTitle,
} from './StyledComponent/StyledComponent';

interface FieldsCardComponentProps {
  titleText: string;
  backgroundImage: string;
  btnClicked: () => void;
  isSelected:boolean
}

const FieldsCardComponent = ({titleText,backgroundImage,btnClicked,isSelected=false}:FieldsCardComponentProps) => {
  return (
    <FieldContent onPress={btnClicked}>
      <ImageField
      style={isSelected?{height:"95%",borderColor:MatchMatePalette.primaryColor}:{borderColor:MatchMatePalette.darkBackgroundColor}}
        source={{
          uri: backgroundImage,
        //   uri: 'https://ak.picdn.net/shutterstock/videos/1104632401/thumb/1.jpg',
        }}></ImageField>
      <TitleCard>
        <TxtTitle>{titleText}</TxtTitle>
      </TitleCard>
    </FieldContent>
  );
};

export default FieldsCardComponent;
