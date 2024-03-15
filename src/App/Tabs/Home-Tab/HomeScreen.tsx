import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {
  ContainerApp,
  ContainerScreen,
  HeaderContainer,
  ExploreRegionContainer,
  UpdateRegionContainer,
  RegionExploreTxt,
  RegionTxt,
  InputContainer,
  TextInputStyle,
} from './StyledComponent/StyledComponent';
import ExpandIconSVG from '../../../assets/Icons/svg/ExpandIconSVG';
import {MatchMatePalette} from '../../../assets/color-palette';
import SearchIconSVG from '../../../assets/Icons/svg/SearchIconSVG';
import PinIconSVG from '../../../assets/Icons/svg/PinIconSVG';
export const HomeScreen = () => {
  return (
    <ContainerApp>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.darkBackgroundColor}
      />
      <ContainerScreen>
        <HeaderContainer>
          <ExploreRegionContainer>
            <RegionExploreTxt>Explore</RegionExploreTxt>
            <RegionTxt>Zurich</RegionTxt>
          </ExploreRegionContainer>
          <UpdateRegionContainer>
            <PinIconSVG color={MatchMatePalette.primaryColor} />
            <RegionExploreTxt>Zurich,ch</RegionExploreTxt>
            <ExpandIconSVG color={MatchMatePalette.primaryColor} />
          </UpdateRegionContainer>
        </HeaderContainer>
        <InputContainer>
          <SearchIconSVG color="grey" />
          <TextInputStyle
            placeholder="things to find out"
            placeholderTextColor={'grey'}></TextInputStyle>
          {/* <Text>Find things to do</Text> */}
        </InputContainer>
      </ContainerScreen>
    </ContainerApp>
  );
};
