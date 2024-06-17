import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  ContainerApp,
  ContainerDetailScreen,
  TxtContainer,
  ImageLocation,
  BtnCheck,
  TextButton,
} from './StyledComponent/StyledComponent';
import {YaMap, Marker} from 'react-native-yamap';

import {MatchMatePalette} from '../../../assets/color-palette';
import NavigateBack from '../../../Components/NavigateBack';
import ImageSlideComponent from '../../../Components/HomeComponents/ImageSlideComponent';
import DescriptionStadiumComponent from '../../../Components/HomeComponents/DescriptionStadiumComponent';
import FacilityCardComponent from '../../../Components/HomeComponents/FacilityCardComponent';
import {StatusBar} from 'react-native';
import PinOrderSVG from '../../../assets/Icons/svg/TabsIcon/PinOrderSVG';
import StadiumLocationMapComponent from '../../../Components/HomeComponents/StadiumLocationMapComponent';
// import CarousselComponent from '../../../Components/HomeComponents/CarousselComponent';
export const StadiumDetailScreen = ({navigation, route}: any) => {
  const {stadium} = route.params;

  return (
    <ContainerApp>
      <NavigateBack
        navigation={navigation}
        headerTitle={'Stadium Detail'}
        color={MatchMatePalette.primaryColor}
      />
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.darkBackgroundColor}
      />
      <ContainerDetailScreen
        horizontal={false}
        showsVerticalScrollIndicator={false}>
        <ImageSlideComponent stadium={stadium} btnClicked={navigation} />
        <DescriptionStadiumComponent
          stadium={stadium}
          btnClicked={navigation}
        />
        <TxtContainer>Facilities</TxtContainer>
        <FacilityCardComponent />

       
      </ContainerDetailScreen>
      <TxtContainer>Location</TxtContainer>
        <ImageLocation>
          <StadiumLocationMapComponent stadium={stadium} />
        </ImageLocation>
      <BtnCheck
        onPress={() => {
          navigation.navigate('StadiumAvailability', {stadiumId: stadium.id});
        }}>
        <TextButton>Check availability</TextButton>
      </BtnCheck>
    </ContainerApp>
  );
};
