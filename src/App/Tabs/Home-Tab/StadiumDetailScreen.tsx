import React from 'react';
import {View,Text} from 'react-native';
import {
  ContainerApp,
  ContainerDetailScreen,
} from './StyledComponent/StyledComponent';
import { MatchMatePalette } from '../../../assets/color-palette';
import BackIconSVG from '../../../assets/Icons/svg/BackIconSVG';
import NavigateBack from '../../../Components/NavigateBack';
export const StadiumDetailScreen = ({navigation}:any) => {
    console.log("ddd");
    
  return (
    <ContainerApp>
      <ContainerDetailScreen>
        <NavigateBack color={MatchMatePalette.primaryColor} navigation={navigation}/>
        
      </ContainerDetailScreen>
    </ContainerApp>
  );
};
