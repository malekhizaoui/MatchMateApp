import React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
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
  ListContainer,
  TextContainer,
  FieldContent,
  TextTitleList,
  TextCheckAllList,
  StadiumContainer,
  StadiumImage,
  StadiumDescription,
  TextDescription,
  TitleDescription
} from './StyledComponent/StyledComponent';
import ExpandIconSVG from '../../../assets/Icons/svg/ExpandIconSVG';
import {MatchMatePalette} from '../../../assets/color-palette';
import SearchIconSVG from '../../../assets/Icons/svg/SearchIconSVG';
import PinIconSVG from '../../../assets/Icons/svg/PinIconSVG';
export const HomeScreen = ({navigation}:any) => {
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
            <RegionExploreTxt>Zurich,CH</RegionExploreTxt>
            <ExpandIconSVG color={MatchMatePalette.primaryColor} />
          </UpdateRegionContainer>
        </HeaderContainer>
        <InputContainer>
          <SearchIconSVG color="grey" />
          <TextInputStyle
            placeholder="things to find out"
            placeholderTextColor={'grey'}></TextInputStyle>
        </InputContainer>

        <TextContainer>
          <TextTitleList>Most fields</TextTitleList>
          <TouchableOpacity>
            <TextCheckAllList>Discover All</TextCheckAllList>
          </TouchableOpacity>
        </TextContainer>
        <ListContainer
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <FieldContent></FieldContent>
          <FieldContent></FieldContent>
          <FieldContent></FieldContent>
          <FieldContent></FieldContent>
        </ListContainer>
        <TextContainer>
          <TextTitleList>Recommended</TextTitleList>
          <TouchableOpacity>
            <TextCheckAllList>Discover All</TextCheckAllList>
          </TouchableOpacity>
        </TextContainer>
        <ListContainer
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <StadiumContainer>
            <StadiumImage></StadiumImage>
            <StadiumDescription>
            <TitleDescription>Explore Madjen</TitleDescription>
            <TextDescription>Near court</TextDescription>
            </StadiumDescription>
          </StadiumContainer>
          <StadiumContainer>
            <StadiumImage></StadiumImage>
            <StadiumDescription>
            <TitleDescription>Explore Madjen</TitleDescription>
            <TextDescription>Near court</TextDescription>
            </StadiumDescription>
          </StadiumContainer>
          <StadiumContainer>
            <StadiumImage></StadiumImage>
            <StadiumDescription>
            <TitleDescription>Explore Madjen</TitleDescription>
            <TextDescription>Near court</TextDescription>
            </StadiumDescription>
          </StadiumContainer>
          <StadiumContainer onPress={()=>{navigation.navigate('StadiumDetail')}}>
            <StadiumImage></StadiumImage>
            <StadiumDescription>
            <TitleDescription>Explore Madjen</TitleDescription>
            <TextDescription>Near court</TextDescription>
            </StadiumDescription>
          </StadiumContainer>
        </ListContainer>
      </ContainerScreen>
    </ContainerApp>
  );
};
