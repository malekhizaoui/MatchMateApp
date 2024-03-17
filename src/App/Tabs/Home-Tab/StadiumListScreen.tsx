import React,{useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  ContainerApp,
  ContainerListStadiumScreen,
  HeaderListStadiumContainer,
  TextTypeOfRender,
  ListStadiumContainer,
} from './StyledComponent/StyledComponent';
import NavigateBack from '../../../Components/NavigateBack';
import SearchCardComponent from '../../../Components/HomeComponents/SearchCardComponent';
import ImageListStadiumComponent from '../../../Components/HomeComponents/ImageListStadiumComponent';
import { MatchMatePalette } from '../../../assets/color-palette';
import BackIconSVG from '../../../assets/Icons/svg/BackIconSVG';
export const StadiumListScreen = ({navigation, route}: any) => {
  const {fieldDataPass} = route.params;
  const [showMap,setShowMap]=useState(true)
  return (
    <ContainerApp >
      <HeaderListStadiumContainer>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <BackIconSVG color={MatchMatePalette.primaryColor} btnClicked={()=>{navigation.goBack()}} />
      </TouchableOpacity>

        <SearchCardComponent />
        <TouchableOpacity onPress={()=>{setShowMap(!showMap)}}>
        <TextTypeOfRender>{showMap?"Map":"list"}</TextTypeOfRender>
        </TouchableOpacity>
      </HeaderListStadiumContainer>
      <ContainerListStadiumScreen showsVerticalScrollIndicator={false}>
        {showMap&&<ListStadiumContainer>
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
              <ImageListStadiumComponent
                stadium={stadium}
                btnClicked={() => {
                  navigation.navigate('');
                }}
              />
            );
          })}
        </ListStadiumContainer>}
      </ContainerListStadiumScreen>
    </ContainerApp>
  );
};
