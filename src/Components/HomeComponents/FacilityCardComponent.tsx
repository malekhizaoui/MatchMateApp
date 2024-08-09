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
import BasketBallHoopIconSVG from '../../assets/Icons/svg/BasketBallHoopIconSVG';
import BasketBallCourtIconSVG from '../../assets/Icons/svg/BasketBallCourtIconSVG';
import ShowerIconSVG from '../../assets/Icons/svg/ShowerIconSVG';
import LightningIconSVG from '../../assets/Icons/svg/LightningIconSVG';
import { usePalette } from '../../assets/color-palette/ThemeApp';
import { Stadium } from '../../App/models/Stadium';
interface FacilityCardComponentProps {
  stadium:Stadium| null;
//   btnClicked: () => void;
}

const FacilityCardComponent = ({
//   stadium,
//   btnClicked,
stadium
}: FacilityCardComponentProps) => {
  const palette=usePalette()

  return (
    <AttributContainer>
    {stadium?.field.fieldName==="Basketball"&&<FacilityContentContainer palette={palette}>
      <BasketBallHoopIconSVG color={palette.primaryColor} size={"35"}  />
      <TextFacility palette={palette}>2 Hoops</TextFacility>
    </FacilityContentContainer>}
    <FacilityContentContainer palette={palette}>
      <BasketBallCourtIconSVG color={palette.primaryColor} size={"35"}/>
      <TextFacility palette={palette}>1 Court</TextFacility>
    </FacilityContentContainer>
    <FacilityContentContainer palette={palette}>
      <ShowerIconSVG color={palette.primaryColor} size={'35'} />
      <TextFacility palette={palette}>{!stadium?.hasShower&&"none"}</TextFacility>
    </FacilityContentContainer>
    <FacilityContentContainer palette={palette} >
      <LightningIconSVG color={palette.primaryColor} size={'35'} />
      <TextFacility palette={palette}>{!stadium?.hasShower?"none":"Lightning"}</TextFacility>
    </FacilityContentContainer>
  </AttributContainer>
  );
};

export default FacilityCardComponent;
