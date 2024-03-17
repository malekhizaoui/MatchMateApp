import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text, View,TouchableOpacity} from 'react-native';
import {
  ImagesStadiumContainer,
  ImageStadium,
  AttributContainer,
  FacilityContentContainer,
  TextFacility
} from './StyledComponent/StyledComponent';
import PreviousIconSVG from '../../assets/Icons/svg/PreviousIconSVG';
import NextIconSVG from '../../assets/Icons/svg/NextIconSVG';
import PinIconSVG from '../../assets/Icons/svg/PinIconSVG';
import { MatchMatePalette } from '../../assets/color-palette';
import BasketBallHoopIconSVG from '../../assets/Icons/svg/BasketBallHoopIconSVG';
import BasketBallCourtIconSVG from '../../assets/Icons/svg/BasketBallCourtIconSVG';
import ShowerIconSVG from '../../assets/Icons/svg/ShowerIconSVG';
import LightningIconSVG from '../../assets/Icons/svg/LightningIconSVG';
interface FacilityCardComponentProps {
//   stadium:any;
//   btnClicked: () => void;
}

const FacilityCardComponent = ({
//   stadium,
//   btnClicked,
}: FacilityCardComponentProps) => {
  return (
    <AttributContainer>
    <FacilityContentContainer>
      <BasketBallHoopIconSVG color={MatchMatePalette.darkBackgroundColor} size={"45"}  />
      <TextFacility>2 Hoops</TextFacility>
    </FacilityContentContainer>
    <FacilityContentContainer>
      <BasketBallCourtIconSVG color={MatchMatePalette.darkBackgroundColor} size={"45"}/>
      <TextFacility>1 Court</TextFacility>
    </FacilityContentContainer>
    <FacilityContentContainer>
      <ShowerIconSVG color={MatchMatePalette.darkBackgroundColor} size={'45'} />
      <TextFacility>None</TextFacility>
    </FacilityContentContainer>
    <FacilityContentContainer>
      <LightningIconSVG color={MatchMatePalette.darkBackgroundColor} size={'45'} />
      <TextFacility>Lightning</TextFacility>
    </FacilityContentContainer>
  </AttributContainer>
  );
};

export default FacilityCardComponent;
