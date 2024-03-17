import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  ContainerApp,
  ContainerListStadiumScreen,
  HeaderListStadiumContainer,
  InputHeaderContainer,
  TextTypeOfRender,
  InputIconContainer,
  TextInputStyle,
  LineSperator,
  FilterIconContainer,
  ListStadiumContainer,
  ImageContainer,
  StadiumImageContainer,
  TitleStadiumName,
  NumberOfCourt,
  StadiumDescriptionTxt,
} from './StyledComponent/StyledComponent';
import SearchIconSVG from '../../../assets/Icons/svg/SearchIconSVG';
import NavigateBack from '../../../Components/NavigateBack';
import FilterIconSVG from '../../../assets/Icons/svg/FilterIconSVG';
import {MatchMatePalette} from '../../../assets/color-palette';
import PreviousIconSVG from '../../../assets/Icons/svg/PreviousIconSVG';
import NextIconSVG from '../../../assets/Icons/svg/NextIconSVG';
export const StadiumListScreen = ({navigation, route}: any) => {
  const {fieldDataPass} = route.params;
  return (
    <ContainerApp>
      <HeaderListStadiumContainer>
        <NavigateBack navigation={navigation} />
        <InputHeaderContainer>
          <InputIconContainer>
            <SearchIconSVG color={'#262626'} />
            <TextInputStyle placeholder="Search ..."></TextInputStyle>
          </InputIconContainer>
          <FilterIconContainer>
            <LineSperator></LineSperator>
          </FilterIconContainer>
          <LineSperator></LineSperator>
          <FilterIconSVG color={MatchMatePalette.darkBackgroundColor} />
        </InputHeaderContainer>
        <TextTypeOfRender>Map</TextTypeOfRender>
      </HeaderListStadiumContainer>
      <ContainerListStadiumScreen>
        <ListStadiumContainer>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: '600',
              marginBottom: 10,
            }}>
            {fieldDataPass.length} listings court
          </Text>
          {fieldDataPass.map((stadium: any) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('StadiumDetail', {stadium});
                }}>
                <ImageContainer>
                  <StadiumImageContainer
                    source={{
                      uri: stadium.backgroundImage,
                    }}></StadiumImageContainer>
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: 15,
                      backgroundColor: 'rgba(0, 0, 0, 0.54)',
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      width: '8%',
                      height: 30,
                      borderRadius: 15,
                    }}>
                    <PreviousIconSVG color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: 15,
                      backgroundColor: 'rgba(0, 0, 0, 0.54)',
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      width: '8%',
                      height: 30,
                      borderRadius: 15,
                    }}>
                    <NextIconSVG color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      bottom: 10,
                      right: 15,
                      backgroundColor: 'rgba(0, 0, 0, 0.54)',
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      width: '8%',
                      height: 18,
                      borderRadius: 5,
                    }}>
                    <NumberOfCourt>1/4</NumberOfCourt>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      bottom: 10,
                      left: 15,
                      backgroundColor: 'rgba(0, 0, 0, 0.54)',
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      width: '18%',
                      height: 32,
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 12,
                      }}>
                      Rental
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 12,
                        fontWeight: '600',
                      }}>
                      150 CHF
                    </Text>
                  </TouchableOpacity>
                </ImageContainer>
                <TitleStadiumName>{stadium.titleDescription}</TitleStadiumName>
              </TouchableOpacity>
            );
          })}
        </ListStadiumContainer>
      </ContainerListStadiumScreen>
    </ContainerApp>
  );
};
