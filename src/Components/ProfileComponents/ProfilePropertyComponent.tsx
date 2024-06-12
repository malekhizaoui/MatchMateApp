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
import PreviousIconSVG from '../../assets/Icons/svg/PreviousIconSVG';
import ExpandIconSVG from '../../assets/Icons/svg/ExpandIconSVG';
import {MatchMatePalette} from '../../assets/color-palette';
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
  
  return (
    <PropertyContainer onPress={toNavigate}>
        <PropertyContainer>
            {icon}
        <TextProperty>
            {propertyText}
        </TextProperty>
        </PropertyContainer>
        <NextIconSVG color={MatchMatePalette.primaryColor} />
        </PropertyContainer>
  );
};

export default ProfilePropertyComponent;
