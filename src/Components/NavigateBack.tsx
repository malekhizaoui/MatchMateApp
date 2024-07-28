import React from 'react';
import BackIconSVG from '../assets/Icons/svg/BackIconSVG';
import {View, TouchableOpacity, Text} from 'react-native';
import { usePalette } from '../assets/color-palette/ThemeApp';
interface NavigateBackComponentProps{
  color?:string ,
  navigation:any,
  headerTitle?:string,
  backgroundColor?:string
}

export const NavigateBack = ({navigation, headerTitle,color,backgroundColor}: NavigateBackComponentProps) => {
  const palette=usePalette()
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'fixed',
        height: 60,
        width: '90%',
        zIndex: 9999,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:backgroundColor
      }}>
    
        <BackIconSVG color={color?color:palette.primaryColor} btnClicked={()=>{navigation.goBack()}}/>
      <Text
        style={{
          color: color?color:palette.primaryColor,
          fontSize: 20,
          fontWeight: '600',
          marginLeft: 30,
        }}>
        {headerTitle}
      </Text>
    </View>
  );
};

export default NavigateBack;
