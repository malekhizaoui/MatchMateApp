import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text, View,TouchableOpacity} from 'react-native';
import {
  ImagesStadiumContainer,
  ImageStadium,
  HeaderStadium,
  TitleTextStadium,
  TxtShowMap,
  StadiumDescriptionTxt,
  ExpandMore
} from './StyledComponent/StyledComponent';
import PreviousIconSVG from '../../assets/Icons/svg/PreviousIconSVG';
import NextIconSVG from '../../assets/Icons/svg/NextIconSVG';
import ExpandIconSVG from '../../assets/Icons/svg/ExpandIconSVG';
import { Stadium } from '../../App/models/Stadium';
import { usePalette } from '../../assets/color-palette/ThemeApp';
interface DescriptionStadiumComponentProps {
  stadium:Stadium |null;
  btnClicked: () => void;
}

const DescriptionStadiumComponent = ({
  stadium,
  btnClicked,
}: DescriptionStadiumComponentProps) => {
  const palette=usePalette()

return(
  <View>
    <HeaderStadium >
          <TitleTextStadium palette={palette}>{stadium?.stadiumName}</TitleTextStadium>
          <TouchableOpacity   onPress={btnClicked}>
          <TxtShowMap palette={palette} >Show map</TxtShowMap>
          </TouchableOpacity>
        </HeaderStadium >
        <StadiumDescriptionTxt palette={palette}>
          Aspen is as close as one can get to a storybook alpine town in
          America. The choose your own adventure possibilities skiing, hiking,
          dining shopping and ....
        </StadiumDescriptionTxt>
        <ExpandMore>
          <TxtShowMap palette={palette}>Read more</TxtShowMap>
          <ExpandIconSVG color={palette.primaryColor} />
        </ExpandMore>
        </View>
)
};

export default DescriptionStadiumComponent;