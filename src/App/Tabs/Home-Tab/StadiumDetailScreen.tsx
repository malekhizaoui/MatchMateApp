import React from 'react';
import {View, Text} from 'react-native';
import {
  ContainerApp,
  ContainerDetailScreen,
  ImageStadium,
  HeaderStadium,
  TitleTextStadium,
  TxtShowMap,
  StadiumDescriptionTxt,
  ExpandMore,
  TxtContainer,
  AttributContainer,
  FacilityContentContainer,
  TextFacility,
  ImageLocation,
  BtnCheck,
  TextButton
} from './StyledComponent/StyledComponent';
import PinIconSVG from '../../../assets/Icons/svg/PinIconSVG';
import {MatchMatePalette} from '../../../assets/color-palette';
import BackIconSVG from '../../../assets/Icons/svg/BackIconSVG';
import NavigateBack from '../../../Components/NavigateBack';
import ExpandIconSVG from '../../../assets/Icons/svg/ExpandIconSVG';
export const StadiumDetailScreen = ({navigation, route}: any) => {
  console.log('ddd');
  const {stadium} = route.params;
  return (
    <ContainerApp>
      <ContainerDetailScreen horizontal={false}>
        <NavigateBack
          color={MatchMatePalette.primaryColor}
          navigation={navigation}
        />
        <ImageStadium source={{uri: stadium.backgroundImage}}></ImageStadium>
        <HeaderStadium>
          <TitleTextStadium>{stadium.titleDescription}</TitleTextStadium>
          <TxtShowMap>Show map</TxtShowMap>
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
        <TxtContainer>Facilities</TxtContainer>
        <AttributContainer>
          <FacilityContentContainer>
            <PinIconSVG color={MatchMatePalette.primaryColor} size={"30"}/>
            <TextFacility>hello</TextFacility>
          </FacilityContentContainer>
          <FacilityContentContainer>
            <PinIconSVG color={"grey"} size={"30"}/>
            <TextFacility>hello</TextFacility>
          </FacilityContentContainer>
          <FacilityContentContainer>
            <PinIconSVG color={MatchMatePalette.primaryColor} size={"30"}/>
            <TextFacility>hello</TextFacility>
          </FacilityContentContainer>
          <FacilityContentContainer>
            <PinIconSVG color={"grey"} size={"30"}/>
            <TextFacility>hello</TextFacility>
          </FacilityContentContainer>
        </AttributContainer>
        <TxtContainer>Location</TxtContainer>
        <ImageLocation></ImageLocation>
        <BtnCheck>
          <TextButton>Check availability</TextButton>
        </BtnCheck>
      </ContainerDetailScreen>
    </ContainerApp>
  );
};
