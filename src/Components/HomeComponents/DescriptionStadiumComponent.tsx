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
import { MatchMatePalette } from '../../assets/color-palette';
import { Stadium } from '../../App/models/Stadium';
interface DescriptionStadiumComponentProps {
  stadium:Stadium;
  btnClicked: () => void;
}

const DescriptionStadiumComponent = ({
  stadium,
  btnClicked,
}: DescriptionStadiumComponentProps) => {

return(
  <View>
    <HeaderStadium>
          <TitleTextStadium>{stadium.stadiumName}</TitleTextStadium>
          <TouchableOpacity onPress={btnClicked}>
          <TxtShowMap >Show map</TxtShowMap>
          </TouchableOpacity>
        </HeaderStadium>
        <StadiumDescriptionTxt>
          Aspen is as close as one can get to a storybook alpine town in
          America. The choose your own adventure possibilities skiing, hiking,
          dining shopping and ....
        </StadiumDescriptionTxt>
        <ExpandMore>
          <TxtShowMap>Read more</TxtShowMap>
          <ExpandIconSVG color={MatchMatePalette.primaryColor} />
        </ExpandMore>
        </View>
)
};

export default DescriptionStadiumComponent;