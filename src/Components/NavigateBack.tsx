import React from 'react';
import BackIconSVG from '../assets/Icons/svg/BackIconSVG';
import {View, TouchableOpacity, Text} from 'react-native';
import {MatchMatePalette} from '../assets/color-palette';
interface NavigateBackComponentProps{
  color?:string ,
  navigation:any,
  headerTitle?:string
}

export const NavigateBack = ({navigation, headerTitle,color}: NavigateBackComponentProps) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'absolute',
        height: 40,
        width: '90%',
        top: 10,
        zIndex: 9999,
      }}>
    
        <BackIconSVG color={color?color:MatchMatePalette.primaryColor} btnClicked={()=>{navigation.goBack()}}/>
      <Text
        style={{
          color: color?color:MatchMatePalette.primaryColor,
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
