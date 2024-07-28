import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
    PropertyContainer,
    TextProperty
} from './StyledComponent/StyledComponent';
import NextIconSVG from '../../assets/Icons/svg/NextIconSVG';
import { usePalette } from '../../assets/color-palette/ThemeApp';

interface ProfilePropertyComponentProps {
propertyText:string,
icon:any,
toNavigate:()=>void
}

const ProfilePropertyComponent = ({
    propertyText,
    icon,
    toNavigate
}: ProfilePropertyComponentProps) => {
  const palette=usePalette()
  return (
    <PropertyContainer onPress={toNavigate}>
        <View style={{display:"flex",flexDirection:'row'}}>
            {icon}
        <TextProperty palette={palette}>
            {propertyText}
        </TextProperty>
        </View>
        <NextIconSVG color={palette.secondaryTextColor} />
        </PropertyContainer>
  );
};

export default ProfilePropertyComponent;
