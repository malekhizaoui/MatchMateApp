import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  ContainerApp,
  ContainerDetailScreen,
  TxtContainer,
  ImageLocation,
  BtnCheck,
  TextButton,
  CloseContainerIcon,
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
import CloseIconSVG from '../../../assets/Icons/svg/CloseIconSVG';
// import CarousselComponent from '../../../Components/HomeComponents/CarousselComponent';
interface StadiumDetailScreenProps {
  navigation: any;
  route: any;
  container: any;
}
export const StadiumDetailScreen = ({
  navigation,
  route,
  container,
}: StadiumDetailScreenProps) => {
  const {stadium} = route.params;
  const [showMap, setShowMap] = useState(false);
  return (
    <ContainerApp>
      <NavigateBack
        navigation={navigation}
        headerTitle={'Stadium Detail'}
        color={MatchMatePalette.primaryColor}
        backgroundColor={MatchMatePalette.darkBackgroundColor}
      />
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.darkBackgroundColor}
      />
      {!showMap && (
        <ContainerDetailScreen
          horizontal={false}
          showsVerticalScrollIndicator={false}>
          <ImageSlideComponent stadium={stadium} />
          <DescriptionStadiumComponent
            stadium={stadium}
            btnClicked={() => {
              setShowMap(true);
            }}
          />
          <TxtContainer>Facilities</TxtContainer>
          <FacilityCardComponent />
        </ContainerDetailScreen>
      )}
      {showMap && (
        <>
          <ImageLocation container={showMap && '100%'}>
            <StadiumLocationMapComponent stadium={stadium} />

            <CloseContainerIcon
              onPress={() => {
                setShowMap(false);
              }}>
              <CloseIconSVG />
            </CloseContainerIcon>
          </ImageLocation>
        </>
      )}

      {stadium.status==="private"&&(<BtnCheck
        onPress={() => {
          navigation.navigate('StadiumAvailability', {stadiumId: stadium.id});
        }}>
        <TextButton>Check availability</TextButton>
      </BtnCheck>)}
    </ContainerApp>
  );
};
