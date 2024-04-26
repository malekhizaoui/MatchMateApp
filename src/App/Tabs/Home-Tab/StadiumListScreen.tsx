import React,{Fragment, useState} from 'react';
import {View, Text, TouchableOpacity,SafeAreaView} from 'react-native';
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
import  StadiumListMapScreen  from './StadiumListMapScreen';
export const StadiumListScreen = ({navigation, route}: any) => {
  const {fieldDataPass} = route.params;
  const [showMap,setShowMap]=useState(true)
  return (
    <>
      <HeaderListStadiumContainer>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <BackIconSVG color={showMap?MatchMatePalette.primaryColor:MatchMatePalette.darkBackgroundColor} btnClicked={()=>{navigation.goBack()}} />
      </TouchableOpacity>

        <SearchCardComponent showMap={showMap} />
        <TouchableOpacity onPress={()=>{setShowMap(!showMap)}}>
        <TextTypeOfRender style={{color:showMap?MatchMatePalette.primaryColor:MatchMatePalette.darkBackgroundColor}}>{showMap?"Map":"list"}</TextTypeOfRender>
        </TouchableOpacity>
      </HeaderListStadiumContainer>
      {showMap?( <ContainerListStadiumScreen style={{backgroundColor:MatchMatePalette.darkBackgroundColor,marginTop:0,paddingTop:20}} showsVerticalScrollIndicator={false} 
      contentContainerStyle={{justifyContent:"center",alignItems:"center",alignSelf:"center"

      }}
      >
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
              <ImageListStadiumComponent
                stadium={stadium}
                btnClicked={() => {
                  navigation.navigate('StadiumDetail',{stadium});
                }}
              />
            );
          })}
        </ListStadiumContainer>
      </ContainerListStadiumScreen>):<StadiumListMapScreen/>}
    </>
  );
};
