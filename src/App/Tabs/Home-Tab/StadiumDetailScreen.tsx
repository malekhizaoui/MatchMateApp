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
import {MatchMatePalette} from '../../../assets/color-palette';
import NavigateBack from '../../../Components/NavigateBack';
import ImageSlideComponent from '../../../Components/HomeComponents/ImageSlideComponent';
import DescriptionStadiumComponent from '../../../Components/HomeComponents/DescriptionStadiumComponent';
import FacilityCardComponent from '../../../Components/HomeComponents/FacilityCardComponent';
// import CarousselComponent from '../../../Components/HomeComponents/CarousselComponent';
export const StadiumDetailScreen = ({navigation, route}: any) => {
  const {stadium} = route.params;
  console.log("stadium",stadium);
  
  return (
    <ContainerApp>
      <NavigateBack
          navigation={navigation}
          headerTitle={"Stadium Detail"}
        />
      <ContainerDetailScreen
        horizontal={false}
        showsVerticalScrollIndicator={false}>
        
        <ImageSlideComponent stadium={stadium} btnClicked={navigation}/>
        <DescriptionStadiumComponent stadium={stadium} btnClicked={navigation}/>
        <TxtContainer>Facilities</TxtContainer>
        <FacilityCardComponent/>
        
        <TxtContainer>Location</TxtContainer>
        <ImageLocation></ImageLocation>
      </ContainerDetailScreen>
      <BtnCheck onPress={()=>{
        navigation.navigate('StadiumAvailability',{stadiumId:stadium.id})
      }}>
        <TextButton>Check availability</TextButton>
      </BtnCheck>
    </ContainerApp>
  );
};
